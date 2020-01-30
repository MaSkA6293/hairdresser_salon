import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Header from './Header/Header';
import Nav from './Nav/nav';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
      </div>
    )
  }
}

export default App;
