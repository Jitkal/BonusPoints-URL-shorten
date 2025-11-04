// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8uQwW1RQ1AHSUIr8nH2J2DP5e302fZbg",
    authDomain: "url-shorten-8df89.firebaseapp.com",
    projectId: "url-shorten-8df89",
    storageBucket: "url-shorten-8df89.firebasestorage.app",
    messagingSenderId: "186911119513",
    appId: "1:186911119513:web:7ebef501926a651fbb8008",
    measurementId: "G-DQ2KZZ726N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db