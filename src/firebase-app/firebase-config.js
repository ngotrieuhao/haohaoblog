import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpf3iNvqqMM4eSDiv5ylffyCmLnVXFiuk",
  authDomain: "monkey-blogging-d2fdd.firebaseapp.com",
  projectId: "monkey-blogging-d2fdd",
  storageBucket: "monkey-blogging-d2fdd.appspot.com",
  messagingSenderId: "952012327086",
  appId: "1:952012327086:web:4d820c71f6ee02c035853f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
