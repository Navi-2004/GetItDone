
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig ={

//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: REACT_APP_FIREBASE_APP_ID,
//     measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID
// };
const firebaseConfig = {
    apiKey: "AIzaSyAbMXdVMwJ-OpFb1WkPcK9-DrECIacLR20",
    authDomain: "makeitdone-be852.firebaseapp.com",
    projectId: "makeitdone-be852",
    storageBucket: "makeitdone-be852.appspot.com",
    messagingSenderId: "886344593470",
    appId: "1:886344593470:web:a6b9d58eae3d3ac743e16f",
    measurementId: "G-VB1K9Q8TXP"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);