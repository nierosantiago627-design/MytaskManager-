import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4q7U--JPZLjONxUVB9IoNjLpEeVIexE",
  authDomain: "mytaskmanager-5151f.firebaseapp.com",
  projectId: "mytaskmanager-5151f",
  storageBucket: "mytaskmanager-5151f.appspot.com",
  messagingSenderId: "488795819967",
  appId: "1:488795819967:web:54442ebe1ccdf923555b0a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
