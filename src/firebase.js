// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqEBDqM_3UKEZiumvrdPpKEZjUcs8ivgk",
  authDomain: "mulist-b4987.firebaseapp.com",
  projectId: "mulist-b4987",
  storageBucket: "mulist-b4987.appspot.com",
  messagingSenderId: "844134284087",
  appId: "1:844134284087:web:ab566f756928dcaa08b8b2",
  measurementId: "G-EXSFVCPF81",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
