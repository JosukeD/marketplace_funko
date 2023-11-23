import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUpForm.css';

function SignUpForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    axios.post('/api/signup', {
      username: username,
      password: password
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  return (
    <div className="sign-up-container">
      <div className="sign-up-form">
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
            Sign Up  {/* Corregido aquí */}
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
