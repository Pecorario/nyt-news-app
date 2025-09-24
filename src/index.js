import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Deixamos o CSS básico por enquanto

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);