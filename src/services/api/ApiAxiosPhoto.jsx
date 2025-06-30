import React from 'react';
import axios from 'axios';

export default function ApiAxiosPhoto(nomePoke) {
  const [pokemonSprite, setPokemonSprite] = React.useState([]);

  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${nomePoke.nomePoke}`)
    .then((response) => {
      setPokemonSprite(response.data.sprites.front_default);
    });

  return (
    <img
      src={pokemonSprite}
      alt={nomePoke.nomePoke || 'Imagem do item'}
      className="mb-4 rounded-lg"
    />
  );
}
