// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvyvDipjg4lI0qYL6kXqdT-x9WEAQHd-Q",
  authDomain: "fantasyisland-55d4d.firebaseapp.com",
  projectId: "fantasyisland-55d4d",
  storageBucket: "fantasyisland-55d4d.appspot.com",
  messagingSenderId: "921922939007",
  appId: "1:921922939007:web:0016bb611ffa42a8b4f74a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);