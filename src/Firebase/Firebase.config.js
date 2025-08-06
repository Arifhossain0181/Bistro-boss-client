// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_Jm8KUQLVJDGG-CtBgviDGP15_F14hpI",
  authDomain: "bistro-boss-39fdd.firebaseapp.com",
  projectId: "bistro-boss-39fdd",
  storageBucket: "bistro-boss-39fdd.firebasestorage.app",
  messagingSenderId: "1002853969048",
  appId: "1:1002853969048:web:996ec6b8234a850c3a34ed"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default app;