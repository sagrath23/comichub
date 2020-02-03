import request from 'superagent';

const config = {
  pokeApiBaseUrl: 'https://pokeapi.co/api/v2'
};

export const listPokemons = async (limit, offset) => {
  const response = await request.get(`${config.pokeApiBaseUrl}/pokemon`).query({ limit, offset }).set('Access-Control-Allow-Origin', '*');

  return response.body;
};

export const getPokemon = async (pokemonName) => {
  const response = await request.get(`${config.pokeApiBaseUrl}/pokemon/${pokemonName}`);

  return response.body;
};
