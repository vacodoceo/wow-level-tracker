import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBxH20xv52j6YJSontC3vBeoQznzll3oks",
  authDomain: "wow-level-tracker.firebaseapp.com",
  projectId: "wow-level-tracker",
  storageBucket: "wow-level-tracker.appspot.com",
  messagingSenderId: "650710393143",
  appId: "1:650710393143:web:524fd7ed82756ca9573ab2",
  measurementId: "G-79E791LVBN"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export default firebase;
