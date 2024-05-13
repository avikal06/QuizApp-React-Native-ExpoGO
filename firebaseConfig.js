import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import getFirestore
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD7v1nsvIRcoDjVDv9tDapkFX58V5V-NuY",
    authDomain: "quizapp-db9ea.firebaseapp.com",
    projectId: "quizapp-db9ea",
    storageBucket: "quizapp-db9ea.appspot.com",
    messagingSenderId: "291356693862",
    appId: "1:291356693862:web:c2a2d2edef7e2ee0bbe4a7"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore
const store = getStorage(app);

export { auth, db, store };
