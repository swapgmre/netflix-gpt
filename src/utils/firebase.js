// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-V4Tt-NDGgtOuqsSWpaVKdpsw6alY2OY",
  authDomain: "netflixgpt-8989c.firebaseapp.com",
  projectId: "netflixgpt-8989c",
  storageBucket: "netflixgpt-8989c.firebasestorage.app",
  messagingSenderId: "9580414184",
  appId: "1:9580414184:web:0436ea30fa2e85fdb7b55d",
  measurementId: "G-GG9D1R30P3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();