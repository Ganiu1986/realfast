// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDIuUduXxa6iyL98HJA3Jwrdp4glUTmKFk",
  authDomain: "realfast-c347a.firebaseapp.com",
  projectId: "realfast-c347a",
  storageBucket: "realfast-c347a.appspot.com",
  messagingSenderId: "180254507402",
  appId: "1:180254507402:web:ed709c6c21885481e50873"
};

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const auth = getAuth(app);

// const auth = getAuth();
// //firestore
// //storage



// //firestore
// const db = getFirestore(app);

// const storage = getStorage(app);

// export {auth,db,storage}


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
// const analytics = getAnalytics(app);

//firestore
const db = getFirestore(app);

//storage
const storage = getStorage(app);

export {auth,db,storage}









