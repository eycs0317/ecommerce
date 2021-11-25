// Import the functions you need from the SDKs you need
// import * as firebase from "firebase/app";
import { initializeApp } from "@firebase/app";
import { getFirestore} from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
// import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXgig-CbAo7R-BsBQkgCMDDxRVdri13xM",
  authDomain: "myshop-d9e43.firebaseapp.com",
  projectId: "myshop-d9e43",
  storageBucket: "myshop-d9e43.appspot.com",
  messagingSenderId: "11257998031",
  appId: "1:11257998031:web:66a209bda1d05dbc7ca5ba",
  measurementId: "G-JWHBX0VCSZ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };