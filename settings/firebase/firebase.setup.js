import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDIuUduXxa6iyL98HJA3Jwrdp4glUTmKFk",
  authDomain: "realfast-c347a.firebaseapp.com",
  projectId: "realfast-c347a",
  storageBucket: "realfast-c347a.appspot.com",
  messagingSenderId: "180254507402",
  appId: "1:180254507402:web:ed709c6c21885481e50873"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

const auth = getAuth();
//firestore
//storage



//firestore
const db = getFirestore(app);

//storage
export {auth,db}













