// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLO-qaCfxDjfumyvJOHICbH54tuPT76DQ",
  authDomain: "fantasyisland-db229.firebaseapp.com",
  projectId: "fantasyisland-db229",
  storageBucket: "fantasyisland-db229.appspot.com",
  messagingSenderId: "402791206925",
  appId: "1:402791206925:web:605aa0a7bfb4e1a5e78544"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);