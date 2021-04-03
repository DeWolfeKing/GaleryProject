import {all} from 'redux-saga/effects';
import {watchGallerySaga} from './gallerySaga';
export default function* rootSaga() {
  yield all([
    watchGallerySaga(),
  ]);
}
