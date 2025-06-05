import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Assure-toi que App.jsx est bien importé
import './index.css';  // Si tu utilises un fichier CSS global

const root = ReactDOM.createRoot(document.getElementById('root')); // Assure-toi d'avoir un élément avec id "root" dans ton HTML
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
