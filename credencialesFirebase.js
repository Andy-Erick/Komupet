// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwBzp8rQv-91_cp4o1fWp1wrkWzTcM3ng",
  authDomain: "komupet.firebaseapp.com",
  projectId: "komupet",
  storageBucket: "komupet.appspot.com",
  messagingSenderId: "604173242411",
  appId: "1:604173242411:web:2a3425015f299a867d1a6e",
  measurementId: "G-4LZYRLKYGF"
};

// Initialize Firebase
const komupetFirebase = initializeApp(firebaseConfig);