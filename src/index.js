import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/main.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

const root4 = ReactDOM.createRoot(document.getElementById('root4'));
root4.render(
  
  <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </React.StrictMode>
);

