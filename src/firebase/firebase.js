import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAtgrfVQvrFgRUcNwmNCf6YNr0MbOyKLus",
  authDomain: "disneyalbaceo.firebaseapp.com",
  databaseURL: "https://disneyalbaceo-default-rtdb.firebaseio.com",
  projectId: "disneyalbaceo",
  storageBucket: "disneyalbaceo.appspot.com",
  messagingSenderId: "1043535163741",
  appId: "1:1043535163741:web:58379ed8d086795daa78b4",
  measurementId: "G-YNM449SVGN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
