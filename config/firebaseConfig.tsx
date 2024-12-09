// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlxq34ukzkVZeBUEC2R2vXTqITilNddaA",
  authDomain: "app-movil-867af.firebaseapp.com",
  projectId: "app-movil-867af",
  storageBucket: "app-movil-867af.firebasestorage.app",
  messagingSenderId: "493498333096",
  appId: "1:493498333096:web:57ae7054b49abd487a0f9d",
  measurementId: "G-SK8WM01MR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;