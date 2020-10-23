import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';


ReactDOM.render(
  <React.StrictMode>
    {/* BrowserRouter allows us to build a single-page web application with 
    navigation without the page refreshing as the user navigates */}
    
      <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);
