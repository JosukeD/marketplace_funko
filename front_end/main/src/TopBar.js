import React from 'react';
import { Link } from 'react-router-dom';
import logo from './resources/logo.jpg';
import './TopBar.css';

function TopBar() {
  return (
    <div className="top-bar">
      <div className="background-bar"></div>
      <div className="logo">
        <img src={logo} alt="Funko Pop Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for Funko Pops" />
      </div>
      <div className="sign-in">
        <Link to="/signin" className="white-text">Sign In</Link> {}
      </div>
    </div>
  );
}

export default TopBar;