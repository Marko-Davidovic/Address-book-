import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCcDcGnevAIGTtOke6w8tu3C2okFRfmC1A",
    authDomain: "address-7d219.firebaseapp.com",
    databaseURL: "https://address-7d219.firebaseio.com",
    projectId: "address-7d219",
    storageBucket: "address-7d219.appspot.com",
    messagingSenderId: "622914660443",
    appId: "1:622914660443:web:1385d4fe5f36c8464eb77e",
    measurementId: "G-QQDWD4JSSN"
  });

// const firebaseApp = firebase.initializeApp({

//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL ,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID ,
//     measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID 
//     });

  const db = firebaseApp.firestore();

  export {db};