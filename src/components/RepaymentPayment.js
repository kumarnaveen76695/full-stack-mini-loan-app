import React, { useState } from "react";
import API from "../api"; 
import '../styles/repaymentPayment.css';

const RepaymentPayment = ({ loanId, repayments }) => {
  const [paymentAmount, setPaymentAmount] = useState("");
  const [selectedRepayment, setSelectedRepayment] = useState(null);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

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
      setSuccessMessage(data.message);
      setError(""); // Clear any previous errors
    } catch (err) {
      setError(err.response?.data?.error || "Payment failed. Please try again.");
      setSuccessMessage(""); // Clear success message if error occurs
    }
  };

  return (
    <div className="repayment-container">
      <h3>Repayment Schedule</h3>
      {repayments.map((repayment) => (
        <div key={repayment._id} className="repayment-item">
          <p>
            <strong>Due Date:</strong> {new Date(repayment.dueDate).toLocaleDateString()} | 
            <strong> Amount:</strong> {repayment.amount} | 
            <strong> Status:</strong> {repayment.status}
          </p>
          {repayment.status === "PENDING" && (
            <div>
              <input
                type="number"
                placeholder="Enter payment amount"
                value={selectedRepayment === repayment._id ? paymentAmount : ""}
                onChange={(e) => {
                  setPaymentAmount(e.target.value);
                  setSelectedRepayment(repayment._id);
                }}
              />
              <button onClick={() => handlePay(repayment._id)}>Pay</button>
            </div>
          )}
        </div>
      ))}
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default RepaymentPayment;
