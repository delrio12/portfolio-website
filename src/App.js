import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
import SocialBar from './SocialBar';


class App extends React.Component {
  
  render() {
    return (
      <div className="app">
        <Header />
        <Route exact path='/' render={() => (
            <div className="home"><Home /></div>
        )}/>
        <Route exact path='/About' render={() => (
            <div className="about"><About /></div>
        )}/>
        <Route exact path='/Portfolio' render={() => (
            <div className="portfolio"><Portfolio /></div>
        )}/>
        <Route exact path='/Contact' render={() => (
            <div className="contact"><Contact /></div>
        )}/>
        <Footer />
        <SocialBar/>
        
      </div>
    );
  }
}
  
export default App;