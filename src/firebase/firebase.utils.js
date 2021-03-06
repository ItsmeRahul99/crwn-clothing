import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAC5GnQTnX5mcD5Y4WFsN0VmQqzVWy0PlE",
  authDomain: "crwn-db-af3d2.firebaseapp.com",
  projectId: "crwn-db-af3d2",
  storageBucket: "crwn-db-af3d2.appspot.com",
  messagingSenderId: "810004367708",
  appId: "1:810004367708:web:342fb4a2d097b453aa9999",
  measurementId: "G-068WMK6VDY",
};
firebase.initializeApp(config);
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
