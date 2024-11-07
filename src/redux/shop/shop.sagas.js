import { takeLatest, call, put, all } from 'redux-saga/effects';

import { convertCollectionsSnapshotToMap, firestoreDB } from '../../firebase/firebase.util';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

import shopActionTypes from './shop.types';
import { getDoc, collection, getDocs } from 'firebase/firestore';

export function* fetchCollectionsAsync() {

  try {

    const querySnapshot = yield getDocs(collection(firestoreDB, "categories"));
    const shopData = {}
    querySnapshot.forEach((doc) => {
      const item = doc.data()
      shopData[`${item.title.toLowerCase()}`] = item;
    });
    yield put(fetchCollectionsSuccess(shopData));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(shopActionTypes.FETCH_COLLECTION_START, fetchCollectionsAsync)
}

export function* shopSagas() {
  yield all([call(fetchCollectionStart)])
}