// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/storage";

// Your web app's Firebase configuration
const app = firebase.initializeApp({
    apiKey: "AIzaSyDZwiEEawbt6gXVgiwrRJkhAAnWKOyUSxg",
    authDomain: "sdr-qr.firebaseapp.com",
    projectId: "sdr-qr",
    storageBucket: "sdr-qr.appspot.com",
    messagingSenderId: "424940387375",
    appId: "1:424940387375:web:d88390af25fa698aa6dada"
});

// Initialize Firebase
export default app;
export const auth = app.auth();
