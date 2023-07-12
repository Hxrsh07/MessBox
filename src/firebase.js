import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTS0kv_AHSMR5Fada_HGU8P3Tcz3L4Aqk",
  authDomain: "messbox-react.firebaseapp.com",
  projectId: "messbox-react",
  storageBucket: "messbox-react.appspot.com",
  messagingSenderId: "421161197756",
  appId: "1:421161197756:web:7cd6f1623401d7a638b0b9",
  measurementId: "G-K2570YGGJ0"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

