// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsdWJvQmaDQMCjlVEOXwATn-PPrBhBLFQ",
  authDomain: "waterplant-website.firebaseapp.com",
  projectId: "waterplant-website",
  storageBucket: "waterplant-website.appspot.com",
  messagingSenderId: "165399395467",
  appId: "1:165399395467:web:f125d1caa9050d69c9288e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
