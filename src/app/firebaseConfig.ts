// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG1RogZnF5idItUUndezTJ-OIdQ8nXPEk",
  authDomain: "chomchum-c7fa7.firebaseapp.com",
  projectId: "chomchum-c7fa7",
  storageBucket: "chomchum-c7fa7.appspot.com",
  messagingSenderId: "390155366551",
  appId: "1:390155366551:web:9439c1cbe24c8a2b4bb9d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};