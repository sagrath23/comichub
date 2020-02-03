import {
  put,
  takeEvery,
  call
} from 'redux-saga/effects';
import { listComics } from '../services';
import { comicListSuccessed, comicListFailed, comicListRequest } from '../store/domains/comicList';


export function* loadNewComicList() {
  try {
    const requestResult = yield call(listComics);

    yield put(comicListSuccessed(requestResult.results));
  } catch (error) {
    console.error(error);

    yield put(comicListFailed());
  }
}

export function* watchComicListRequest() {
  yield takeEvery(comicListRequest, loadNewComicList)
}
