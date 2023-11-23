import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TopBar from './TopBar';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import UserProfile from './User';
import Home from './Home';
import './styles.css';
import './tarjetas.css'

function createDropdown() {
  var select = document.createElement("select");
  var funkos = ["Funko 1", "Funko 2", "Funko 3", "Funko 4"];
  for(var i = 0; i < funkos.length; i++) {
    var option = document.createElement("option");
    option.value = funkos[i];
    option.text = funkos[i];
    select.appendChild(option);
  }
  document.body.appendChild(select);
}

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/profile" element={<UserProfile />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;