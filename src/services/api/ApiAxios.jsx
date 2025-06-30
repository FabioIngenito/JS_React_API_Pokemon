import axios from 'axios';

export default async function ApiAxios() {
  const response = await axios.get(
    'https://pokeapi.co/api/v2/pokemon?limit=10&offset=10/',
  );

  return response.data.results;
}
