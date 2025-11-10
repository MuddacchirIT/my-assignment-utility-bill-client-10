// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv0kIEhw4Y96GxhW2w7lOuWisUdzh8CU8",
  authDomain: "fir-toy-topia.firebaseapp.com",
  projectId: "fir-toy-topia",
  storageBucket: "fir-toy-topia.firebasestorage.app",
  messagingSenderId: "488691500947",
  appId: "1:488691500947:web:14b8e0d8622efab98e8a66",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
