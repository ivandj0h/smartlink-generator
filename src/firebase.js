import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_ID,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSANGING_SENDER_ID,
  appId: process.env.REACT_APP_GITHUB_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_GITHUB_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
