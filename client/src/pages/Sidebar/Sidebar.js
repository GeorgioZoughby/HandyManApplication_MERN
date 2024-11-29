import React from 'react';
import './Sidebar.css';
import logo from '../../assets/Logo.png';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
      <img
        src={logo}
        alt="Logo"
        className="sidebar-logo"
      />
      </Link>
      <ul className="sidebar-list">
        <Link to="/">
        <li>
          <i className="bi bi-house-door-fill"></i> Home
        </li>
        </Link>
        <Link to="/services">
        <li>
          <i className="bi bi-briefcase-fill"></i> Services
        </li>
        </Link>
        <Link to="/history">
        <li>
          <i className="bi bi-clock-history"></i> History
        </li>
        </Link>
        <Link to="/faq">
        <li>
          <i class="bi bi-question-circle "></i> FAQ
        </li>
        </Link>
      </ul>

      <div className="sidebar-actions">
        <button className="sidebar-button" id="login-button"><Link to="/login">Login</Link></button>
        <Link to="/signupTasker"><button className="sidebar-button" id="cta-button">Become a Tasker</button></Link>
      </div>
    </div>
  );
};

export default Sidebar;
