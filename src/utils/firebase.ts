import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../fbconfig";
import { getFirestore } from "firebase/firestore";

const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth();

export const FirebaseDb = getFirestore(FirebaseApp);
