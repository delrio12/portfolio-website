import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  //StrictMode is a helper component that helps me to write better react components.
  <React.StrictMode> 
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
