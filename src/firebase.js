// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBG-Fo3rhUVbH8TSkRyVHxMI9TPsseRXrw",
  authDomain: "payonize-2f179.firebaseapp.com",
  projectId: "payonize-2f179",
  storageBucket: "payonize-2f179.appspot.com",
  messagingSenderId: "867826863458",
  appId: "1:867826863458:web:49c2493d7f1c49f7e8b03b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
