import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Mini Loan App</h1>
      <p>Please login and register to continue</p>
      <div className="button-container">
        <Link to="/login">
          <button className="home-button">Login</button>
        </Link>
        <Link to="/register">
          <button className="home-button">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
