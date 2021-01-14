import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/functions";
import { Realm } from "./constants/realms";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

firebase.initializeApp(config);

export interface Character {
  name: string;
  realm: Realm;
  level: number | null;
}

export interface User {
  email: string;
  name: string;
  lastName: string;
  characters: Character[];
}

export const firestore = firebase.firestore();
export const functions = firebase.functions();
export default firebase;
