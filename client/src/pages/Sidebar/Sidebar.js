import React from 'react';
import './Sidebar.css';
import logo from '../../assets/Logo.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img
        src={logo}
        alt="Logo"
        className="sidebar-logo"
      />

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

      <div className="sidebar-user">
        <i className="bi bi-person-circle"></i>
        <span>John Doe</span>
      </div>
    </div>
  );
};

export default Sidebar;
