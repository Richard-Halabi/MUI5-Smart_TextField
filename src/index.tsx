import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MiscProvider from './context/misc/MiscState';

ReactDOM.render(
  <React.StrictMode>
    <MiscProvider>
      <App />
    </MiscProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
