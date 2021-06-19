import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';

function App() {
    return (
      // BrowserRouter allows us to build a single-page web application with navigation without the page refreshing as the user navigates
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
};
  
export default App;