import React, { useState } from 'react';
import './SignInForm.css'; // Create this CSS file for styling

function SignInForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Handle the form submission here, e.g., send data to an API
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-form">
        <h2>Sign In</h2>
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
          <button type="button" onClick={handleSignIn}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;