import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const provider = new firebase.auth.GoogleAuthProvider();
/*
const firebaseConfig = {
  apiKey: "AIzaSyDoN-nSGUo_1h87nkOXSXX2vv4IBXBXey0",
  authDomain: "chatwind-49.firebaseapp.com",
  projectId: "chatwind-49",
  storageBucket: "chatwind-49.appspot.com",
  messagingSenderId: "1034185885241",
  appId: "1:1034185885241:web:a46af138b7a40d318defe8",
  measurementId: "G-EHQ2YBVYY9",
};
*/

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW_AeXvohjecKYfSK5dFKBXxEcfMTLVZ0",
  authDomain: "chatwind-7c3b1.firebaseapp.com",
  databaseURL: "https://chatwind-7c3b1-default-rtdb.firebaseio.com",
  projectId: "chatwind-7c3b1",
  storageBucket: "chatwind-7c3b1.appspot.com",
  messagingSenderId: "953375850181",
  appId: "1:953375850181:web:4f86c1d37da4f1831cbaac",
  measurementId: "G-SQJW8JNGQ4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, provider, storage };




