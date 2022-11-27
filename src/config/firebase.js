// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDydOr9LsWG6L7XqO2Ri9g5Mc59KjAo_OM",
  authDomain: "chat-room-4d84b.firebaseapp.com",
  projectId: "chat-room-4d84b",
  storageBucket: "chat-room-4d84b.appspot.com",
  messagingSenderId: "148119364994",
  appId: "1:148119364994:web:40bbb48fe22a6891951b9b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
