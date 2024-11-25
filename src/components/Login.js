import React, { useState } from "react";

import API from "../api";
import "../styles/Login.css"; 
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "customer",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous error
    try {
      const { data } = await API.post("/api/auth/login", formData);
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", formData.role);
      alert("Login successful!");
      window.location.href = "/dashboard";
    } catch (err) {
      setErrorMessage(err.response?.data?.error || "Invalid email or password.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
        />

        <label htmlFor="role">Role:</label>
        <select
          id="role"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          required
        >
          <option value="customer">customer</option>
          <option value="admin">admin</option>
        </select>

        {errorMessage && (
          <p className="error-message" style={{ color: "red" }}>
            {errorMessage}
          </p>
        )}

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
