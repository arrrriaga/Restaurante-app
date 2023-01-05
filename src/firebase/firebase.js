// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgOrcDggiHiZXsB0a0Mesk1tlBwKWOnd8",
  authDomain: "restaurante-app-d2f90.firebaseapp.com",
  projectId: "restaurante-app-d2f90",
  storageBucket: "restaurante-app-d2f90.appspot.com",
  messagingSenderId: "181337871419",
  appId: "1:181337871419:web:1670c050997ab195eeb81e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
