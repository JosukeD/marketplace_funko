import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import TopBar from './TopBar';
import SignInForm from './SignInForm';

function Home() {
  return <h2>Home Page</h2>;
}

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;