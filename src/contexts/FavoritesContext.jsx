// /* eslint-disable react-refresh/only-export-components */

// Fast refresh only works when a file only exports components. Move your React context(s) to a separate file.eslint(react-refresh/only-export-components)

// A atualização rápida só funciona quando um arquivo exporta apenas componentes. Mova seu(s) contexto(s) React para um arquivo separado.eslint(react-refresh/only-export-components)

import React, { useState, useEffect } from 'react';
import FavoritesCreateContext from './FavoritesCreateContext';

// Esta linha foi para o arquivo "FavoritesCreateContext.jsx" para resolver o problema de "Fast refresh":
// Criamos um contexto para gerenciar os favoritos
//export const FavoritesContext = React.createContext();
export const FavoritesContext = FavoritesCreateContext;

export function FavoritesProvider({ children }) {
  // Estado que armazena os itens favoritos
  const [favorites, setFavorites] = useState([]);

  // Carrega os favoritos do LocalStorage quando o app inicia
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites)); // Converte de string para objeto
    }
  }, []);

  // Salva os favoritos no LocalStorage sempre que eles mudarem
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Função para adicionar ou remover itens dos favoritos
  const toggleFavorite = (item) => {
    setFavorites((prev) => {
      // Se o item já estiver nos favoritos, remove
      if (prev.find((fav) => fav.id === item.id)) {
        return prev.filter((fav) => fav.id !== item.id);
      }
      // Caso contrário, adiciona
      return [...prev, item];
    });
  };

  return (
    // Provedor do contexto, que disponibiliza os favoritos e a função toggleFavorite
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
