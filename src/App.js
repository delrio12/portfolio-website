import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import SocialBar from './SocialBar';


class App extends React.Component {
  
  render() {
    return (
      <div className="app">
         {/* BrowserRouter allows us to build a single-page web application with 
        navigation without the page refreshing as the user navigates */}
        <BrowserRouter>
        <Navbar />

          <Route exact path='/' component={Home}/> 
          <Route path='/About' component={About} /> 
          <Route path='/Portfolio' component={Portfolio} />  
          <Route path='/Contact' component={Contact} />
          {/* // <Home /> 
          // <About />
          // <Portfolio />
          // <Contact />
          //  
         */}
        <Footer />
        <SocialBar />
        
       </BrowserRouter>
      </div>
    );
  }
}
  
export default App;