import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import TopBar from './TopBar';
import SignInForm from './SignInForm';
import styles from './styles.css';

function Home() {
  return <h2>Home Page</h2>;
}

function App() {
  return (
    <Router>
      <div className='body'>
      <TopBar />
      <Routes>
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
      
    </Router>
  );
}

export default App;