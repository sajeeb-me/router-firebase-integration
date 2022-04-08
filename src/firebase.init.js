// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGwldnDzuhv0l4eFs_ht4s38aVAbRKbTQ",
    authDomain: "router-firebase-integrat-fe6dd.firebaseapp.com",
    projectId: "router-firebase-integrat-fe6dd",
    storageBucket: "router-firebase-integrat-fe6dd.appspot.com",
    messagingSenderId: "577866313689",
    appId: "1:577866313689:web:cd955091db9718ad46f3c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;