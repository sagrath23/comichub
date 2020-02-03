import { createActions } from 'redux-actions';

const {
  listAction,
  detailAction,
  loadListAction,
  loadPokemonAction
} = createActions({
  LIST_ACTION: (pokemons = []) => ({ pokemons }),
  DETAIL_ACTION: (pokemon = {}) => ({ pokemon }),
  LOAD_LIST_ACTION: (limit, offset) => ({ limit, offset }),
  LOAD_POKEMON_ACTION: (pokemonName) => ({ pokemonName })
})

export {
  listAction,
  detailAction,
  loadListAction,
  loadPokemonAction
}
