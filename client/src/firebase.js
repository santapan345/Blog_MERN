// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD67TDjizlwj3bJaJxxk-H93vF2nOefaq0",
  authDomain: "blog-app-f91a2.firebaseapp.com",
  projectId: "blog-app-f91a2",
  storageBucket: "blog-app-f91a2.appspot.com",
  messagingSenderId: "1038523282760",
  appId: "1:1038523282760:web:543ab1fde3b1dc082d6f7d",
  measurementId: "G-FQ4Y01JF2G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


