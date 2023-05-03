// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdDKo62bPPVeBxNYkqJsbJjGef__Yxmfw",
  authDomain: "recipe-haven-c6a94.firebaseapp.com",
  projectId: "recipe-haven-c6a94",
  storageBucket: "recipe-haven-c6a94.appspot.com",
  messagingSenderId: "208290736342",
  appId: "1:208290736342:web:53f18c49892379cb820177"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;