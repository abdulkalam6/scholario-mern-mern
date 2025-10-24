import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.log('Error connecting to server:', error);
        setMessage('Failed to connect to backend server');
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>MERN Stack Application</h1>
        <p>{message}</p>
        <p>Frontend (React) + Backend (Express/Node) + Database (MongoDB)</p>
      </header>
    </div>
  );
}

export default App;