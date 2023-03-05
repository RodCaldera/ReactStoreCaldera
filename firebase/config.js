// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSvYfkuFecPGaGFpeh-a31rxlUdzYukwI",
  authDomain: "play-88d64.firebaseapp.com",
  projectId: "play-88d64",
  storageBucket: "play-88d64.appspot.com",
  messagingSenderId: "133948776991",
  appId: "1:133948776991:web:cf8730eb056b188db52b2a",
  measurementId: "G-C3ZRN8J46T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const initFirestore=()=>{
    return app
}