import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBYRpLP2WzrHNhhLl6XkDKmssbTb03M3tE",
  authDomain: "lineclone-5252d.firebaseapp.com",
  projectId: "lineclone-5252d",
  storageBucket: "lineclone-5252d.firebasestorage.app",
  messagingSenderId: "613276369458",
  appId: "1:613276369458:web:a5e6a4fd58c11b4488722b",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
