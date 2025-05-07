import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1o_iznf7LHNyEdX9Wi74XtCbnm-MAhss",
  authDomain: "ics4u-ccc14.firebaseapp.com",
  projectId: "ics4u-ccc14",
  storageBucket: "ics4u-ccc14.firebasestorage.app",
  messagingSenderId: "708282590973",
  appId: "1:708282590973:web:72d41ad3d19ffe5f2a0094"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(firebaseConfig);
const firestore = getFirestore(firebaseConfig);

export { auth, firestore }