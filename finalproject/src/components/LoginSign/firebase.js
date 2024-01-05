// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGh56c4BXz-uK2TFB2byCNyDfcyCPc2N4",
  authDomain: "authentication-7e561.firebaseapp.com",
  projectId: "authentication-7e561",
  storageBucket: "authentication-7e561.appspot.com",
  messagingSenderId: "1006269224912",
  appId: "1:1006269224912:web:6909f510e8db861ecdcbd5",
  measurementId: "G-JCEDS137M4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const database = getAuth(app);