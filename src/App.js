import React, { Component } from 'react';

import './App.css';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="about"><About /></div>
        <div className="resume"><Resume /></div>
        <div className="portfolio"><Portfolio /></div>
        <div className="contact"><Contact /></div>
        <Footer />
      </div>
    );
  }
}
  
export default App;