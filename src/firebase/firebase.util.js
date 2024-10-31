import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB76K1CG3HY41lwY_O9niwJxzRGnpgOZRA",
  authDomain: "crown-clothing-db-6efef.firebaseapp.com",
  projectId: "crown-clothing-db-6efef",
  storageBucket: "crown-clothing-db-6efef.firebasestorage.app",
  messagingSenderId: "244957313054",
  appId: "1:244957313054:web:10be73a8b1b76694ce160f",
  measurementId: "G-NDN0H4P1ZS"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if (!userAuth) return;


  // const userRef = firestore.doc(`users/${userAuth.uid}`);
  // const snapShot = await userRef && userRef.get();

  // if (!snapShot.exists) {
  //   const { displayName, email } = userAuth;
  //   const createdAt = new Date();

  //   try {
  //     await userRef.set({
  //       displayName,
  //       email,
  //       createdAt,
  //       ...additionalData
  //     })

  //   } catch (error) {
  //     console.log('error while creating an user', error.message);
  //   }
  // }
  // return userRef;
}


const app = initializeApp(config);
const db = getFirestore(app);

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollections = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return transformedCollections.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {})
};

export const getCurrentUser = () => {
  // return new Promise((resolve, reject) => {
  //   const unsubscribe = auth.onAuthStateChanged(userAuth => {
  //     unsubscribe();
  //     resolve(userAuth);
  //   }, reject)
  // })
}




