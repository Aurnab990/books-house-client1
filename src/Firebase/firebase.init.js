// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzFkqzQtVEqVmtNTEIXAxaDb3xF_ShkeY",
  authDomain: "books-store-f614a.firebaseapp.com",
  projectId: "books-store-f614a",
  storageBucket: "books-store-f614a.appspot.com",
  messagingSenderId: "46517343021",
  appId: "1:46517343021:web:9ea06fbfc8dd7ceb1c79a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;