import shopActionTypes from './shop.types';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.util';


export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTION_START
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type : shopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionsMap
})

export const fetchCollectionsFailure = (errMessage) => ({
  type : shopActionTypes.FETCH_COLLECTION_FAILURE,
  payload: errMessage
})

// thunk capture this and processes it // thunk captures the function (actually anything), the let the object go to reducer.
export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());
    collectionRef.get().then( snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    }).catch((err) => dispatchEvent(fetchCollectionsFailure(err.message)))

  }
};
