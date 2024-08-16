// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEPaLNqwuf3wiSEO6y-Un779PsEhm-rUk",
  authDomain: "eds-platform.firebaseapp.com",
  projectId: "eds-platform",
  storageBucket: "eds-platform.appspot.com",
  messagingSenderId: "674967424790",
  appId: "1:674967424790:web:3cec6355360948921cca37",
  measurementId: "G-17Y0DQ2W2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);