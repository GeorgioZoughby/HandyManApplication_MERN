import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/dark_logo.png';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleHowItWorksClick = (event) => {
    event.preventDefault();
    document.getElementById("steps-section").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="phone-menu" onClick={toggleMenu}>
          <i className="bi bi-list"></i>
        </div>
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        <ul className={`navbar-list ${menuOpen ? "open" : ""}`}>
          <Link to="/">
            <li onClick={() => setMenuOpen(false)}>
              <i className="bi bi-house-door-fill"></i> Home
            </li>
          </Link>
          <Link to="/services">
            <li onClick={() => setMenuOpen(false)}>
              <i className="bi bi-briefcase-fill"></i> Services
            </li>
          </Link>
          <Link to="/faq">
            <li onClick={() => setMenuOpen(false)}>
              <i className="bi bi-question-circle-fill"></i> FAQ
            </li>
          </Link>
          <Link to="/aboutus">
            <li onClick={() => setMenuOpen(false)}>
              <i className="bi bi-info-circle-fill"></i> About Us
            </li>
          </Link>
        </ul>
        <div className={`navbar-actions${menuOpen ? " open" : ""}`}>
          {localStorage.getItem("token") ? (
            <button className="navbar-button" id="logout-button" onClick={handleLogout}>Log Out</button>
          ) : (
            <button className="navbar-button" id="login-button">
              <Link to="/login">Log In</Link>
            </button>
          )}
          {localStorage.getItem("token") ? (
            <Link to="/services">
              <button className="navbar-button" id="cta-button">Book a Tasker Now</button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="navbar-button" id="cta-button">Book a Tasker Now</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
