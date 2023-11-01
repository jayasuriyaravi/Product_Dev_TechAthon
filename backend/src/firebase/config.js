import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyB9zbQ2qkK3fPTMT4MXJEOhq6ysmvKfTtQ",

  authDomain: "oneee-1c9d0.firebaseapp.com",

  databaseURL: "https://oneee-1c9d0-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "oneee-1c9d0",

  storageBucket: "oneee-1c9d0.appspot.com",

  messagingSenderId: "995222550562",

  appId: "1:995222550562:web:3b906c953313e8e829b27b",

  measurementId: "G-JV1E6N3PM2"

};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };