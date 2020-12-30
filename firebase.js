import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDYT_sUOqTOAOps2M9Lkg1u85LSKf0ALF0",
  authDomain: "contact--form-kid-ink.firebaseapp.com",
  projectId: "contact--form-kid-ink",
  storageBucket: "contact--form-kid-ink.appspot.com",
  messagingSenderId: "194247980815",
  appId: "1:194247980815:web:bd5e22567aea7cfc68307a",
});

var db = firebaseApp.firestore();

export { db };
