import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDCAWEqTk35MN1rYlJa-ndiYE8CWLiGHS4",
  authDomain: "ecomm-f7e31.firebaseapp.com",
  databaseURL: "https://ecomm-f7e31.firebaseio.com",
  projectId: "ecomm-f7e31",
  storageBucket: "ecomm-f7e31.appspot.com",
  messagingSenderId: "509017669788",
  appId: "1:509017669788:web:6059eddfa5e8f03d6aed59",
  measurementId: "G-PGTVQ8L326"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
