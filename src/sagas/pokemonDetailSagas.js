import {
  put,
  takeEvery,
  call
} from 'redux-saga/effects';
import { getPokemon } from '../services';
import * as actions from '../actions';

export function* loadPokemonDetail(action) {
  const requestResult = yield call(getPokemon, action.payload.pokemonName);

  yield put(actions.detailAction(requestResult));
}

// Our watcher Saga: spawn a new loadPokemonDetail task on each INCREMENT_ASYNC
export function* watchLoadPokemonDetail() {
  yield takeEvery(actions.loadPokemonAction, loadPokemonDetail);
}
