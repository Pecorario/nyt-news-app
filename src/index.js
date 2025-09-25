import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ArticlesProvider } from './context/ArticlesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ArticlesProvider>
      <App />
    </ArticlesProvider>
  </React.StrictMode>
);
