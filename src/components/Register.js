import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../styles/Register.css';
import API from "../api";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer", // Default role
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/api/auth/register", formData);
      alert("Registration successful! Please login.");
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed.");
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Register</h2>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />

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
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />

        <label htmlFor="role">Role:</label>
        <select
          id="role"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        >
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
        </select>
        <p>
        After registered please
        <Link to="/login"> login
          
        </Link>
        </p>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
