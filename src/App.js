import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SocialBar from './components/SocialBar';


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
         {/* BrowserRouter allows us to build a single-page web application with 
        navigation without the page refreshing as the user navigates */}
        <BrowserRouter>
         
          <Navbar />
          <Route exact path='/' component={Home}/> 
          <Route path='/About' component={About} /> 
          <Route path='/Portfolio' component={Portfolio} />  
          <Route path='/Contact' component={Contact} />
          
          <About />
          <Portfolio />
          <Contact />
          <Footer />
          <SocialBar />
        </BrowserRouter>
      </div>
    );
  }
}
  
export default App;