import {
  put,
  takeEvery,
  call
} from 'redux-saga/effects';
import { getComic } from '../services';
import { comicFailed, comicSuccessed, comicRequest } from '../store/domains/comic';

export function* getComicSaga({ payload: { id }}) {
  try {
    const requestResult = yield call(getComic, id);

    yield put(comicSuccessed(requestResult));
  } catch(error) {
    console.error(error);

    yield put(comicFailed());
  }
}

// Our watcher Saga: spawn a new getComicSaga task on each INCREMENT_ASYNC
export function* watchComicRequestSaga() {
  yield takeEvery(comicRequest, getComicSaga);
}
