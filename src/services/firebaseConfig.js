// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIEjWSQfJGUJw7517mvG-Ps3s1tPUGhBo",
  authDomain: "chat-react-app-c8b7f.firebaseapp.com",
  projectId: "chat-react-app-c8b7f",
  storageBucket: "chat-react-app-c8b7f.appspot.com",
  messagingSenderId: "888179263280",
  appId: "1:888179263280:web:521eb2cd54009d9b886af5",
  measurementId: "G-ELG181XC33"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const databaseApp = getFirestore(app);