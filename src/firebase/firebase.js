// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEM6MYa6Qgz2RM1clmVNC7YMVWc4u_bYs",
    authDomain: "chat-box-reactapp.firebaseapp.com",
    projectId: "chat-box-reactapp",
    storageBucket: "chat-box-reactapp.appspot.com",
    messagingSenderId: "576280711984",
    appId: "1:576280711984:web:737978ab91395ee2d8eef5"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();