import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyyhFUJcRxpUJlmBFAdaXhU9PI2ubEiOw",
  authDomain: "flash-andante.firebaseapp.com",
  projectId: "flash-andante",
  storageBucket: "flash-andante.appspot.com",
  messagingSenderId: "533429704226",
  appId: "1:533429704226:web:207c9b3ac5cf157d859c7b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()