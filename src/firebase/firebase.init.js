import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// Firebase initialization

const initializeAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;