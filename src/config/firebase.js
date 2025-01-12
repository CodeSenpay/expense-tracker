// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr-O1_O4lLj4CZSi_GbdYiEVmU3DdQNFQ",
  authDomain: "expense-tracker-d3327.firebaseapp.com",
  projectId: "expense-tracker-d3327",
  storageBucket: "expense-tracker-d3327.appspot.com",
  messagingSenderId: "404796276101",
  appId: "1:404796276101:web:fe34c24771c7b6303fd8ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
