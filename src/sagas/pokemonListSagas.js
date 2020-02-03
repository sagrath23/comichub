import {
  put,
  takeEvery,
  call
} from 'redux-saga/effects';
import { listPokemons } from '../services';
import * as actions from '../actions';

export function* loadNewPokemonList(action) {
  const requestResult = yield call(listPokemons, action.payload.limit, action.payload.offset);

  yield put(actions.listAction(requestResult));
}

// Our watcher Saga: spawn a new loadNewPokemonList task on each LOAD_LIST_ACTION
export function* watchLoadNewPokemonList() {
  yield takeEvery(actions.loadListAction, loadNewPokemonList)
}
