import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from "./App";
import App from './App';
import { FavoritesProvider } from './contexts/FavoritesContext';
import './index.css'; // Tailwind CSS importado

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </React.StrictMode>,
);
