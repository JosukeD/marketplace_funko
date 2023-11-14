import React from 'react';
import { Link } from 'react-router-dom';
import logo from './resources/logo.jpg';
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
      <a href="/signin">Sign In</a>
    </div>
  );
}

export default TopBar;