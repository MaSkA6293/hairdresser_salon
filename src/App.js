import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Header from './Header/Header';
import Nav from './Nav/nav';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
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
