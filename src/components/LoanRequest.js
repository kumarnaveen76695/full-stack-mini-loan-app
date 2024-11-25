import React, { useState } from "react";
import API from "../api";

const LoanRequest = () => {
  const [formData, setFormData] = useState({ amount: 0, term: 1 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/api/loans", formData);
      alert("Loan requested successfully!");
      console.log(data);
    } catch (err) {
      alert(err.response?.data?.error || "Loan request failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Request Loan</h2>
      <input
        type="number"
        placeholder="Amount"
        value={formData.amount}
        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Term (weeks)"
        value={formData.term}
        onChange={(e) => setFormData({ ...formData, term: e.target.value })}
        required
      />
      <button type="submit">Request Loan</button>
    </form>
  );
};

export default LoanRequest;
