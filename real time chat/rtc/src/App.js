import './App.css';
import HomeP from './HomeP';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Login from './loginpg';
import React from 'react';
import { useState } from 'react';
import Register from './Register';

function App() {
  const [currentForm, setcurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setcurrentForm(formName) ;
  }

  return (
    <div className="App">
      {
        currentForm === "login"? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>
      }

    </div>
  );
}

export default App;
