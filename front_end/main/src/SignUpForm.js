import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignInForm.css';

function SignUpForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  }

  return (
    <div className="sign-in-container">
      <div className="sign-in-form">
        <h2>Sign Up</h2>
        <form>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="button" onClick={handleSignUp}>
            Sign Up
          </button>
        </form>
        <p>
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;
