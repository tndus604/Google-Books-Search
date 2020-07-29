import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Jumbotron from './components/Jumbotron/jumbotron';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
    </div>
  );
}

export default App;
