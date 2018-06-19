import React, { Component } from 'react';
import Header from './Components/Header.js'
import Navbar from './Components/Navbar.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
      </div>
    );
  }
}

export default App;
