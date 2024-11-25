import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import LoanRequest from "./components/LoanRequest";
import RepaymentPayment from "./components/RepaymentPayment";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

const App = () => (
  <Router>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/RepaymentPayment" element={<RepaymentPayment />} />
      <Route path="/LoanRequest" element={<LoanRequest />} />
    </Routes>
  </Router>
);

export default App;
