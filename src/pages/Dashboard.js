import React, { useState } from "react";
import API from "../api";
import "../styles/dashboard.css"; // Import the CSS file

const Dashboard = () => {
  const [formData, setFormData] = useState({ amount: "", term: "" });
  const [loanDetails, setLoanDetails] = useState(null);
  const [error, setError] = useState("");
  const [paymentAmount, setPaymentAmount] = useState(""); // New state for payment amount

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      // Send the loan data to the API
      const { data } = await API.post("/api/loans", {
        amount: formData.amount,
        term: formData.term,
      });
      setLoanDetails(data.loan); // Store the loan details in the state
    } catch (err) {
      setError(err.response?.data?.error || "Failed to create loan.");
    }
  };

  const handlePay = async (repaymentId) => {
    if (!paymentAmount || isNaN(paymentAmount) || paymentAmount <= 0) {
      setError("Please enter a valid payment amount.");
      return;
    }

    try {
      const { data } = await API.post("/api/repayment/pay", {
        repaymentId,
        amount: parseFloat(paymentAmount),
      });
      setLoanDetails(data.loan); // Update loan details after successful payment
      setPaymentAmount(""); // Clear the payment amount input field
      setError(""); // Clear any previous errors
    } catch (err) {
      setError(err.response?.data?.error || "Payment failed. Please try again.");
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Loan Dashboard</h2>
      <form onSubmit={handleSubmit} className="dashboard-form">
        <label htmlFor="amount">Loan Amount:</label>
        <input
          type="number"
          id="amount"
          placeholder="Enter loan amount"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          required
        />

        <label htmlFor="term">Loan Term (in weeks):</label>
        <input
          type="number"
          id="term"
          placeholder="Enter loan term (weeks)"
          value={formData.term}
          onChange={(e) => setFormData({ ...formData, term: e.target.value })}
          required
        />

        <button type="submit">Loan Request</button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {loanDetails && (
        <div className="loan-details">
          <h3>Loan Details</h3>
          <p><strong>Amount:</strong> {loanDetails.amount}</p>
          <p><strong>Term:</strong> {loanDetails.term} weeks</p>
          <p><strong>Status:</strong> {loanDetails.status}</p>

          <h4>Repayments</h4>
          {loanDetails.repayments && loanDetails.repayments.length > 0 ? (
            <ul>
              {loanDetails.repayments.map((repayment) => (
                <li key={repayment._id}>
                  <strong>Due Date:</strong> {new Date(repayment.dueDate).toLocaleDateString()} | 
                  <strong> Amount:</strong> {repayment.amount} | 
                  <strong> Status:</strong> {repayment.status}

                  {repayment.status === "PENDING" && (
                    <div>
                      <input
                        type="number"
                        placeholder="Enter payment amount"
                        value={paymentAmount}
                        onChange={(e) => setPaymentAmount(e.target.value)}
                      />
                      <button onClick={() => handlePay(repayment._id)}>Pay</button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>No repayments available yet.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
