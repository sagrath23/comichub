import { all } from 'redux-saga/effects';
import { watchComicListRequest } from './comicListSagas';
import { watchComicRequestSaga } from './comicSagas';

export default function* rootSaga() {
  yield all([watchComicListRequest(), watchComicRequestSaga()]);
}
