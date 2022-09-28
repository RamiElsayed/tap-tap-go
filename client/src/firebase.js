// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getStorage } from "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr-Lz-fLH0EjTzAJY93Eebc1V6YVDm0n0",
  authDomain: "taptapgo-2f4e1.firebaseapp.com",
  projectId: "taptapgo-2f4e1",
  storageBucket: "taptapgo-2f4e1.appspot.com",
  messagingSenderId: "540794756600",
  appId: "1:540794756600:web:9f75a830d3d99ed98e4a0d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
