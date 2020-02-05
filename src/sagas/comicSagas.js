import {
  put,
  takeEvery,
  call
} from 'redux-saga/effects';
import { getComic } from '../services';
import { comicFailed, comicSuccessed, comicRequest } from '../store/domains/comic';

export function* getComicSaga({ payload: { id }}) {
  try {
    const { results: requestResult } = yield call(getComic, id);

    yield put(comicSuccessed(requestResult));
  } catch(error) {
    console.error(error);

    yield put(comicFailed());
  }
}

export function* watchComicRequestSaga() {
  yield takeEvery(comicRequest, getComicSaga);
}
