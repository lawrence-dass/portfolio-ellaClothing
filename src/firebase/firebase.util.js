import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
}

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
export const firestoreDB = getFirestore(app);

export const convertCollectionsSnapshotToMap = async collections => {
  const transformedCollections = await collections.docs.map(doc => {
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

export const auth = getAuth();

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  })
}


export const googleProvider = new GoogleAuthProvider();



