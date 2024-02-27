import { initializeApp } from "firebase/app";import "firebase/database";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBhIbUAZtzwLDAnBlE7eeC2bVLrWtgdWJY",
  authDomain: "react-contact-d66f2.firebaseapp.com",
  projectId: "react-contact-d66f2",
  storageBucket: "react-contact-d66f2.appspot.com",
  messagingSenderId: "930728183268",
  appId: "1:930728183268:web:647e39a0757316256eb3f1",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)


