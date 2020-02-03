import { handleActions } from 'redux-actions';
import { listAction, detailAction} from '../actions';

const initialState = {
  detailedPokemon: {},
  currentPokemonList: {
    results: []
  }
};

const pokedexReducer = handleActions({
  [listAction]: (state, { payload: { pokemons }}) => ({ ...state, currentPokemonList: pokemons }),
  [detailAction]: (state, { payload: { pokemon }}) => ({ ...state, detailedPokemon: { ...pokemon }})
}, initialState);

export default pokedexReducer;
