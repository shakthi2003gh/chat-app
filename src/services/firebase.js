import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup, signOut } from "firebase/auth";
import { getFirestore, onSnapshot } from "firebase/firestore";
import { collection } from "firebase/firestore";

// Initialize Firebase
const app = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STROAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

// >authentication
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export function login() {
  signInWithPopup(auth, provider);
}

export function logout() {
  signOut(auth);
}

// >file store
const db = getFirestore(app);
const messagesColRef = collection(db, "messages");

export function getMessages() {
  onSnapshot(messagesColRef, (snap) => {
    console.log(snap);
  });
}
