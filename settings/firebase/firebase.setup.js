// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIuUduXxa6iyL98HJA3Jwrdp4glUTmKFk",
  authDomain: "realfast-c347a.firebaseapp.com",
  projectId: "realfast-c347a",
  storageBucket: "realfast-c347a.appspot.com",
  messagingSenderId: "180254507402",
  appId: "1:180254507402:web:ed709c6c21885481e50873"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}