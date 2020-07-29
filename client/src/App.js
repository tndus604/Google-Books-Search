import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Jumbotron from './components/Jumbotron/jumbotron';
import SearchForm from './components/SearchForm/searchform';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <SearchForm />
    </div>
  );
}

export default App;
