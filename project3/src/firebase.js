import { initializeApp } from "firebase/app";
import { getFirestore,collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBhRyMYEt2fRoKPaJhoaeluPz12S6smGJs",
  authDomain: "helloworld-eb6bb.firebaseapp.com",
  projectId: "helloworld-eb6bb",
  storageBucket: "helloworld-eb6bb.appspot.com",
  messagingSenderId: "853672625324",
  appId: "1:853672625324:web:05d4a421632984528b8b09",
  measurementId: "G-7NPFHW27Y1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection (db, "notes")
