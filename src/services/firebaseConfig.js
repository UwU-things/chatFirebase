// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCIEjWSQfJGUJw7517mvG-Ps3s1tPUGhBo",
  authDomain: "chat-react-app-c8b7f.firebaseapp.com",
  projectId: "chat-react-app-c8b7f",
  storageBucket: "chat-react-app-c8b7f.appspot.com",
  messagingSenderId: "888179263280",
  appId: "1:888179263280:web:521eb2cd54009d9b886af5",
  measurementId: "G-ELG181XC33"
};

export const app = initializeApp(firebaseConfig);
export const databaseApp = getFirestore(app);