import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";


const firebaseConfig = {
    apiKey: "AIzaSyA6FaRmvaTme0gCfv5vjTaJHoYPE1Xc8nU",
    authDomain: "clone-d88e6.firebaseapp.com",
    projectId: "clone-d88e6",
    storageBucket: "clone-d88e6.appspot.com",
    messagingSenderId: "68865988793",
    appId: "1:68865988793:web:93c1d17b3ececf7a092368"
  };

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = app.firestore();
