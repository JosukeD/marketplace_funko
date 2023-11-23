import React from 'react';
import { Link } from 'react-router-dom';
import logo from './resources/logo.jpg';
import profileIcon from './resources/Icon.png'; 
import './TopBar.css';

function TopBar() {
  return (
    <div className="topBar">
      <div className="logo">
        <Link to="/"> 
          <img src={logo} alt="Funko Pop Logo" />
        </Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for Funko Pops" />
      </div>
      <Link to="/signin">Sign In</Link>
      <Link to="/profile">
        <img className="profile-icon" src={profileIcon} alt="Profile" /> {/* Botón de perfil agregado aquí */}
      </Link>
    </div>
  );
}

export default TopBar;
