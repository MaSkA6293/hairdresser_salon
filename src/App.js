import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Nav from './Nav/nav';
import Write from './Forma_write/Write';
import Footer from './Footer/Footer';
import Page404 from './Page404/404';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FirsPage from './FirstPage/FirstPage';
import Jobs from './Jobs/Jobs';
import PageInterjer from './PageInterjer/PageInterjer';
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
        <Router>
          <Switch>
            <Route exact path="/" component={FirsPage} />
            <Route exact path="/Jobs" component={Jobs} />
            <Route exact path="/Interjer" component={PageInterjer} />
            <Route component={Page404} />
          </Switch>
        </Router>



        <Footer />
        <Write closeWindow={this.closeWindow} stateform={this.state.showform} />


      </div>
    )
  }
}

export default App;
