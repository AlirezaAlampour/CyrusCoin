import firebase from "firebase/app"
import "firebase/firebase-firestore"
import "firebase/firebase-auth"
import "firebase/auth"

// // const app = firebase.initializeApp({
// //   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// //   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// //   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// //   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// //   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// //   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// // })

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   };

//   if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//   }
//   export const auth = firebase.auth()
//   export default firebase


var firebaseConfig = {
  apiKey: "AIzaSyCr7MsGFVoKq2jgAIfo8BSEMGqrjJmmuR4",
  authDomain: "cyrus-cpo.firebaseapp.com",
  projectId: "cyrus-cpo",
  storageBucket: "cyrus-cpo.appspot.com",
  messagingSenderId: "477380298004",
  appId: "1:477380298004:web:5cf07f895af7280221ae01",
  measurementId: "G-12VEY9WJKS"
};

// Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
export const auth = firebase.auth()
export default firebase
