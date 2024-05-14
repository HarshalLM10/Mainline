// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Access the API key from environment variables

const firebaseConfig = {
  apiKey:  "AIzaSyArSEd973XrQt0170hhQ8gnddgVTwnHsGQ",
  authDomain: "mainline-3dcd2.firebaseapp.com",
  projectId: "mainline-3dcd2",
  storageBucket: "mainline-3dcd2.appspot.com",
  messagingSenderId: "876569282126",
  appId: "1:876569282126:web:8ee24612350977aec0251f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
