import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdW5BuWZV-apEC42cPubAn1rOCQRfskgc",
  authDomain: "linkedin-clone-6a2f0.firebaseapp.com",
  projectId: "linkedin-clone-6a2f0",
  storageBucket: "linkedin-clone-6a2f0.appspot.com",
  messagingSenderId: "1036065340794",
  appId: "1:1036065340794:web:28e8f8d1948b91669d2ac3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
