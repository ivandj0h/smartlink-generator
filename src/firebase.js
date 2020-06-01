import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCfvrF1jmbmeZ8xUp4ghjON5MQ4TXYmwLo",
  authDomain: "link-generate-tblg.firebaseapp.com",
  databaseURL: "https://link-generate-tblg.firebaseio.com",
  projectId: "link-generate-tblg",
  storageBucket: "link-generate-tblg.appspot.com",
  messagingSenderId: "190788353250",
  appId: "1:190788353250:web:b1712dee3bc2cf769e32bb",
  measurementId: "G-XR0V4C9T24",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
