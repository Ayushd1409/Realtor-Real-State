// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkkOckR2Y07IE2Y6-k_M9qZxQycqL7xMw",
  authDomain: "realtor-react-a4eda.firebaseapp.com",
  projectId: "realtor-react-a4eda",
  storageBucket: "realtor-react-a4eda.appspot.com",
  messagingSenderId: "884197132924",
  appId: "1:884197132924:web:eb83513fa816d0df73d7f9"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();