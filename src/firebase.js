// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCgbw-DjtDAmzDEXmLxt5ivQLod3fVHBDs",
  authDomain: "geekhouse-d6adf.firebaseapp.com",
  projectId: "geekhouse-d6adf",
  storageBucket: "geekhouse-d6adf.appspot.com",
  messagingSenderId: "944463216237",
  appId: "1:944463216237:web:9258a8a5fc6ca1356f4964",
  measurementId: "G-6JZ417GK43"
}
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


