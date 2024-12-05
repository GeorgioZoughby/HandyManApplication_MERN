import React from 'react';
import './Navbar.css';
import logo from '../../assets/dark_logo.png';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/login");
  };

  const handleHowItWorksClick = (event) => {
    event.preventDefault();
    document.getElementById("steps-section").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        <ul className="navbar-list">
          <Link to="/">
            <li>
              <i className="bi bi-house-door-fill"></i> Home
            </li>
          </Link>
          <Link to="/services">
            {window.scrollTo(0, 0)}
            <li>
              <i className="bi bi-briefcase-fill"></i> Services
            </li>
          </Link>
          <li onClick={handleHowItWorksClick}>
            <i className="bi bi-clipboard-check-fill"></i> How it works
          </li>
          <Link to="/contact-us">
            {window.scrollTo(0, 0)}
            <li>
              <i className="bi bi-telephone-fill"></i> Contact Us
            </li>
          </Link>
        </ul>

        <div className="navbar-actions">
          {localStorage.getItem("token") ? (
            <button className="navbar-button" id="logout-button" onClick={handleLogout}>Log Out</button>
          ) : (
            <button className="navbar-button" id="login-button">
              <Link to="/login">Log In</Link>
            </button>
          )}
          <Link to="/signupTasker">
            <button className="navbar-button" id="cta-button">Become a Tasker</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
