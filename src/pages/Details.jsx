import React from 'react';
import { useParams } from 'react-router-dom';
import { FavoritesContext } from '../contexts/FavoritesContext';
import ApiGetPokeService from '../services/api/ApiGetPokeServices';
import Topo from '../components/Helper/Topo';
import Mensagem from '../components/Helper/Mensagem';

function Details() {
  const { id } = useParams(); // Obtém o ID da URL
  const { favorites, toggleFavorite } = React.useContext(FavoritesContext); // Acessa os favoritos e a função toggleFavorite
  const [items, setItems] = React.useState([]); // Todos os itens
  // Placeholder para os detalhes do item
  const item = {
    id,
    title: 'Título Placeholder',
    description: 'Descrição completa do item.',
  };
  const isFavorite = favorites.some((fav) => fav.id === item.id); // Verifica se o item é favorito

  // Chama a função ApiGetPokeService
  React.useEffect(() => {
    ApiGetPokeService(item.id)
      .then((data) => {
        //console.log('Pokemons data:', data);
        setItems(data);
      })
      .catch((error) => {
        console.error('Error fetching pokemons: ', error);
      });
  }, [item.id]);

  // console.log(`Item ID: ${items.id}`);
  // console.log(`Item weight: ${items.weight}`);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-800 shadow-md rounded-lg">
      <Topo title="Detalhes" description="Lista de Detalhes" />
      {/* Título da página */}
      <h2 className="text-3xl font-bold mb-6 text-gray-100 text-center">
        Detalhes do Item
      </h2>
      {/* Título do item */}
      <h3 className="text-2xl font-semibold mb-4 text-gray-200">{item.id}</h3>
      {/* Descrição do item */}
      {/* <p className="text-gray-400 mb-6 leading-relaxed">{item.description}</p> */}
      <div className="text-gray-400 mb-6 leading-relaxed">
        {items.id > 0 ? (
          <Mensagem mensagem={`ID: ${items.id}`} />
        ) : (
          <Mensagem mensagem="Nenhuma ordem encontrada." />
        )}
        {items.order > 0 ? (
          <Mensagem mensagem={`Order: ${items.order}`} />
        ) : (
          <Mensagem mensagem="Nenhuma ordem encontrada." />
        )}
        {items.weight > 0 ? (
          <Mensagem mensagem={`Weight: ${items.weight}`} />
        ) : (
          <Mensagem mensagem="Nenhum peso encontrado." />
        )}
        {items.height > 0 ? (
          <Mensagem mensagem={`Height: ${items.height}`} />
        ) : (
          <Mensagem mensagem="Nenhum peso encontrado." />
        )}
      </div>
      {/* Botão para adicionar/remover dos favoritos */}
      <button
        onClick={() => toggleFavorite(item)}
        className={`px-6 py-3 rounded-lg font-medium transition-colors duration-300 ${
          isFavorite
            ? 'bg-red-500 text-white hover:bg-red-600'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
      >
        {isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
      </button>
    </div>
  );
}

export default Details;
