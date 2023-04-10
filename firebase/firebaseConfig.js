import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDl-oELN5XR9oYfWg8UDgN5SZbjMX7iyDE",
  authDomain: "project-8d172.firebaseapp.com",
  projectId: "project-8d172",
  storageBucket: "project-8d172.appspot.com",
  messagingSenderId: "118684838317",
  appId: "1:118684838317:web:42a47b83d644ea80c5d924",
  measurementId: "G-GGMNXGK9W2",
};

const authConfig = initializeApp(firebaseConfig);
const auth = getAuth(authConfig);
const db = getFirestore(authConfig);
const storage = getStorage(authConfig);

export { auth, db, storage };
