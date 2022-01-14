// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//ska jag ta bort dem jag inte använder? 
//import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//import firebase from "firebase";
//import { initializeApp } from 'firebase/app';

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
//import {getFirestore} from '@firebase/firestore';
//import { getAuth } from "firebase/auth";

//import { collection, doc, setDoc } from "firebase/firestore";
//uninstall dotenv?
//import dotenv from "dotenv";
//dotenv.config();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
};

//const app = initializeApp(firebaseConfig);

//export default app;


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
//const auth = getAuth(firebaseApp);
export default db;

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const firebaseApp = firebase.initializeApp(firebaseConfig);

//const db = getFirestore(app);
//const firestore = app.firestore();
//const firestore = firebaseApp.firestore()

//const db = firebase.firestore();

//ska jag exportera?
//export default db;
