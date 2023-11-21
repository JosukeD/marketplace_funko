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
      <div className="tarjeta">Tarjeta 1</div>
      <div className="tarjeta">Tarjeta 2</div>
      <div className="tarjeta">Tarjeta 3</div>
      <div className="tarjeta">Tarjeta 4</div>
      {/* Agrega más tarjetas según sea necesario */}
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
