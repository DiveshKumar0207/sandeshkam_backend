// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9AqUNjy5I7ftCeu_8y6SDpjj4szKAijw",
  authDomain: "news-app-28f83.firebaseapp.com",
  projectId: "news-app-28f83",
  storageBucket: "news-app-28f83.appspot.com",
  messagingSenderId: "1036074124889",
  appId: "1:1036074124889:web:031d15643764e6ef2d9348",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
export default app;
