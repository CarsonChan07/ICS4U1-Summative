// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1o_iznf7LHNyEdX9Wi74XtCbnm-MAhss",
  authDomain: "ics4u-ccc14.firebaseapp.com",
  projectId: "ics4u-ccc14",
  storageBucket: "ics4u-ccc14.firebasestorage.app",
  messagingSenderId: "708282590973",
  appId: "1:708282590973:web:72d41ad3d19ffe5f2a0094"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(firebaseConfig);
const firestore = getFirestore(firebaseConfig);

export { auth, firestore }