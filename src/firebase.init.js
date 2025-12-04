// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD84AvgPWOcdc3X2Yz7S14cDSy5lNgw39c",
  authDomain: "auth-moha-milon-7207d.firebaseapp.com",
  projectId: "auth-moha-milon-7207d",
  storageBucket: "auth-moha-milon-7207d.firebasestorage.app",
  messagingSenderId: "1059083697538",
  appId: "1:1059083697538:web:99ffa61a471d1b5f49239b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
  