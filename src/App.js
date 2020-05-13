import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from "react-helmet";

import './App.css';

import Header from './Header/Header';
import Nav from './Nav/nav';
import Write from './Forma_write/Write';
import Footer from './Footer/Footer';
import Page404 from './Page404/404';
import FirsPage from './FirstPage/FirstPage';
import Jobs from './Jobs/Jobs';
import PageInterjer from './PageInterjer/PageInterjer';
import Pageourwork from './Pageourwork/Ourwork';
import Pageouraction from './Pageouraction/Action';
import Pagepriselist from './Pagepriselist/Priselist';


const App = () => {
  const [showform, setshowform] = useState('none')

  const closeWindow = (e) => {
    setshowform('none')
  }
  const openForm = (e) => {
    e.preventDefault();
    setshowform('block')
  }

  return (

    <div className="Head contaner">

      <Helmet>
        <meta charSet="utf-8" />
        <title>Салон красоты Елена</title>
        <meta name="description"
          content="Салон красоты Елена. Все виды парикмахерских услуг. Маникюр. 
        Педикюр. Свадебные прически. БИО завивка. Креативное окрашивание волос.
         Выпрямление волос" />
        <meta name="Keywords"
          content="Салон красоты Елена, парикмахерская, мужская стрижка, женская стрижка,
          окрашивание волос, маникюр, педикюр"></meta>
      </Helmet>

      <Header openForm={openForm} />
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/" component={FirsPage} />
          <Route exact path="/Jobs" component={Jobs} />
          <Route exact path="/Interjer" component={PageInterjer} />
          <Route exact path="/Ourwork" component={Pageourwork} />
          <Route exact path="/Ouraction" component={Pageouraction} />
          <Route exact path="/Priselist" component={Pagepriselist} />
          <Route component={Page404} />
        </Switch>
      </Router>
      <Footer />
      <Write closeWindow={closeWindow} stateform={showform} />
    </div>
  )
}


export default App;
