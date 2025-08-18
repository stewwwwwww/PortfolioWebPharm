// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9_viwyG6i2XAsOLDIsou40uPVuivzWWs",
  authDomain: "phuongminhpharma1.firebaseapp.com",
  projectId: "phuongminhpharma1",
  storageBucket: "phuongminhpharma1.appspot.com",
  messagingSenderId: "416502945044",
  appId: "1:416502945044:web:8c176f10d763312e591e01",
  measurementId: "G-W1T1SXYR0Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)