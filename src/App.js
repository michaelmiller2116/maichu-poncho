import React, { Component } from 'react'
import Header from './Components/Header.js'
import Navbar from './Components/Navbar.js'

import './App.css'

class App extends Component {
  render() {
    return <div className="App">
        <Header />
        <Navbar />
        <img className="hero-img" src="assets/store-front.jpg" alt="store front" />
        <h1>TheM-Poncho</h1>
        <h3>
          TheM-Poncho is a project born from two European creative designers
          who
        </h3>
      </div>;
  }
}

export default App
