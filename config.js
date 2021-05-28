import * as firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCUv76hQ_uIe1wUxvXplOSPp7o6VeqNuK8",
  authDomain: "willyapp-67140.firebaseapp.com",
  databaseURL: "https://willyapp-67140.firebaseio.com",
  projectId: "willyapp-67140",
  storageBucket: "willyapp-67140.appspot.com",
  messagingSenderId: "5298834354",
  appId: "1:5298834354:web:292d1e3354f87c2a88f2ab",
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
