import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAF_EOc4Fep9KHPvq6j0ASw66BOKAOnnzQ",
  authDomain: "linkedin-clone-227d6.firebaseapp.com",
  projectId: "linkedin-clone-227d6",
  storageBucket: "linkedin-clone-227d6.appspot.com",
  messagingSenderId: "738927068412",
  appId: "1:738927068412:web:022da842a2de88004f0379",
  measurementId: "G-NWFNTW1M79"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };