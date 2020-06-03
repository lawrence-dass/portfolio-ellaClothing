import { takeLatest, call, put, all } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.util';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

import shopActionTypes from './shop.types';

export function* fetchCollectionsAsync () {

  // convert promise based to redux sagas
  // collectionRef.get().then( snapshot => {
  //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //   dispatch(fetchCollectionsSuccess(collectionsMap));
  // }).catch((err) => dispatchEvent(fetchCollectionsFailure(err.message)))
  
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch(error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(shopActionTypes.FETCH_COLLECTION_START, fetchCollectionsAsync)
}

export function* shopSagas () {
  yield all([call(fetchCollectionStart)])
}