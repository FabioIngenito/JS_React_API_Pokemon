import axios from 'axios';

export default async function ApiGetPokeService(poke) {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`);

  return response.data;
}
