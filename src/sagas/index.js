import { all } from 'redux-saga/effects';
import { watchLoadNewPokemonList } from './pokemonListSagas';
import { watchLoadPokemonDetail } from './pokemonDetailSagas';

export default function* rootSaga() {
  yield all([watchLoadNewPokemonList(), watchLoadPokemonDetail()]);
}
