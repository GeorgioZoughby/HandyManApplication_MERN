import React from 'react';
import './Sidebar.css';
import logo from '../../assets/Logo.png';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="/">
      <img
        src={logo}
        alt="Logo"
        className="sidebar-logo"
      />
      </a>
      <ul className="sidebar-list">
        <li>
          <i className="bi bi-house-door-fill"></i> Home
        </li>
        <li>
          <i className="bi bi-briefcase-fill"></i> Services
        </li>
        <li>
          <i className="bi bi-envelope-fill"></i> Contact
        </li>
        <li>
          <i className="bi bi-info-circle-fill"></i> About
        </li>
      </ul>

      <div className="sidebar-actions">
        <button className="sidebar-button" id="login-button"><Link to="/login">Login</Link></button>
        <button className="sidebar-button" id="cta-button">Become a Tasker</button>
      </div>
    </div>
  );
};

export default Sidebar;
