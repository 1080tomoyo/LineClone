import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD-c-tFxXdkI1K5S0JDOg94rNnnxCZgbAs",
  authDomain: "lineclone-40612.firebaseapp.com",
  projectId: "lineclone-40612",
  storageBucket: "lineclone-40612.firebasestorage.app",
  messagingSenderId: "215483508010",
  appId: "1:215483508010:web:b803580d917d8cd84f6a53"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };