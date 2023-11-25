import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignInForm.css';
import axios from 'axios'

function SignInForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    console.log("Submitted login");
    e.preventDefault();

    const apiUrl = `http://localhost:8000/auth/login`;
    localStorage.setItem('username', formData.username);
    
    axios
      .post(apiUrl, formData)
      .then((response) => {
        const token = response.data.jwt;
        localStorage.setItem("token", token);
        window.location.href = "/profile";
      })
      .catch((error) => {
        console.error("Error:", error);
        window.alert("Invalid login :(");
      });
  }
  return (
    <div className="sign-in-container">
      <div className="sign-in-form">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
        <input
          className="inputField"
          placeholder="Username"
          name="username"
          autoComplete="username"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          className="inputField"
          placeholder="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          value={formData.password}
          onChange={handleChange}
        />

        <button className="accessButton loginButton" type="submit">
          Log In
        </button>
      </form>
        <p>
          You don't have an account? <Link to="/signup" className='signInPrompt'>Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default SignInForm;