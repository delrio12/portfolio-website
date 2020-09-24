import React, { Component } from 'react';

import './App.css';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
import SocialBar from './SocialBar';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={apiResponse:""};
  }

  callAPI(){
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res}));
  }

  componentWillMount(){
    this.callAPI();
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="about"><About /></div>
        <div className="resume"><Resume /></div>
        <div className="portfolio"><Portfolio /></div>
        <div className="contact"><Contact /></div>
        <Footer />
        <SocialBar/>
        <p>{this.state.apiResponse}</p>
      </div>
    );
  }
}
  
export default App;