import React, { Component } from 'react'
import Header from './Components/Header.js'
import Navbar from './Components/Navbar.js'
import PonchoList from './Components/PonchoList.js'

import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return <div className="App">
    <img className="hero-img" src="assets/store-front.jpg" alt="store front" />
    <Header />
        <PonchoList  />
      </div>;
  }
}

export default App
