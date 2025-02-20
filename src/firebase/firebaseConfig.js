import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADhAAUEYkrM7sKvG-3SI18XlNCqrLFY6Q",
  authDomain: "bluestock-e1bf1.firebaseapp.com",
  projectId: "bluestock-e1bf1",
  storageBucket: "bluestock-e1bf1.firebasestorage.app",
  messagingSenderId: "430712196683",
  appId: "1:430712196683:web:c0dddfc2ab20149d7f47ce",
  measurementId: "G-0N4QLFD56D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
