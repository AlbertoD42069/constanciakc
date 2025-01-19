// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxw_HXTXtaKn5XnARrS4E57Wsg7IuSHf0",
  authDomain: "constanciaskc.firebaseapp.com",
  projectId: "constanciaskc",
  storageBucket: "constanciaskc.firebasestorage.app",
  messagingSenderId: "32493179664",
  appId: "1:32493179664:web:a97f6d3aca5a29bcec4b95"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dbkc = getFirestore(app);
export const authKC = getAuth(app);