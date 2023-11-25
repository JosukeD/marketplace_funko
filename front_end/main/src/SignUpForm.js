import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUpForm.css';
import axios from 'axios'


function SignUpForm() {
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

    axios
      .post(apiUrl, formData)
      .then((response) => {
        window.location.href = "/signin";
      })
      .catch((error) => {
        console.error("Error:", error);
        window.alert("Invalid login :(");
      });
    }

  return (
    <div className="sign-up-container">
      <div className="sign-up-form">
        <h2>Sign Up</h2>
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
          Already have an account? <Link to="/signin" className='signInPrompt'>Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;
