// import firebase from "firebase/app";
import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDHyOWtQEl7kNAP8sD5F67F_Ih0B2yrw24",
  authDomain: "electron-react.firebaseapp.com",
  databaseURL: "https://electron-react.firebaseio.com",
  projectId: "electron-react",
  storageBucket: "electron-react.appspot.com",
  messagingSenderId: "430325178667",
  appId: "1:430325178667:web:a4d8c8d9fda45462f8e56e",
  measurementId: "G-406R853S6D",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
