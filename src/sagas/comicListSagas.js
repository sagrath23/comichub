import {
  put,
  takeEvery,
  call
} from 'redux-saga/effects';
import { listComics } from '../services';
import { comicListSuccessed, comicListFailed, comicListRequest } from '../store/domains/comicList';


export function* loadNewComicList({ payload: { limit, offset }}) {
  try {
    const requestResult = yield call(listComics, limit, offset);

    yield put(comicListSuccessed(requestResult.results));
  } catch (error) {
    console.error(error);

    yield put(comicListFailed());
  }
}

export function* watchComicListRequest() {
  yield takeEvery(comicListRequest, loadNewComicList)
}
