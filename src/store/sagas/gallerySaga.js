import {call, put, all, takeLatest} from 'redux-saga/effects';
import {create} from 'apisauce';
import {failedGalleryData, successGalleryData} from '../actions/galleryActions';
const api = create({
  baseURL:
      'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0',
  headers: {Accept: 'application/vnd.github.v3+json'},
});
function* gallerySaga() {
  try {
    const response = yield api.get();
    yield put(successGalleryData(response.data));
  } catch (response) {
    yield put(failedGalleryData(response.problem))
  }
}

export function* watchGallerySaga() {
  yield all([takeLatest('FETCHING_GALLERY', gallerySaga)]);
}
