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
            <Home />
        )}/>
        <Route exact path='/About' render={() => (
            <About />
        )}/>
        <Route exact path='/Portfolio' render={() => (
            <Portfolio />
        )}/>
        <Route exact path='/Contact' render={() => (
            <Contact />
        )}/>
        <About />
        <Portfolio />
        <Contact />
        <Footer />
        <SocialBar/>
        
      </div>
    );
  }
}
  
export default App;