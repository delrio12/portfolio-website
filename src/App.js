import React, { Component } from 'react';

import './App.css';
/*
import Menu from './Menu';
import Resume from './Resume';
*/
import About from './About';
/*
import Portfolio from './Portfolio';
import Contact from './Contact';
*/


class App extends Component {
  render() {
    return (
      <div className="app">
        {/*<Menu />
        
        
        <Resume />
        
        */}
        <About />
        {/* <Portfolio />
        <Contact /> */}
       
      </div>
    );
  }
}
  
export default App;