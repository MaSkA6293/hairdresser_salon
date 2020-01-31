import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Nav from './Nav/nav';
import Write from './Forma_write/Write';
import Uslugi from './Uslugi/Uslugi';
import OurPartner from './OurPartner/OurPartner';
import PopulyarUslugi from './PopulyarUslugi/PopulyarUslugi';
import Footer from './Footer/Footer';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showform: 'none',
    }
  }
  closeWindow = (e) => {
    this.setState({ showform: 'none' })
  }
  openForm = (e) => {
    e.preventDefault();
    this.setState({ showform: 'block' })
  }
  render() {
    return (
      <div className="Head">
        <Header openForm={this.openForm} />
        <Nav />
        <Uslugi />
        <PopulyarUslugi />
        <OurPartner />
        <Footer />
        <Write closeWindow={this.closeWindow} stateform={this.state.showform} />
      </div>
    )
  }
}

export default App;
