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
export default App;
