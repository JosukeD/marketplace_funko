import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import TopBar from './TopBar';
import SignInForm from './SignInForm';
import styles from './styles.css';
import './tarjetas.css'

function Home() {
  return (
    <div className="container">
      <div className="tarjeta">Funko 1</div>
      <div className="tarjeta">Funko 2</div>
      <div className="tarjeta">Funko 3</div>
      <div className="tarjeta">Funko 4</div>
    </div>
  );
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
