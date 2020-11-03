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

  const db = firebaseApp.firestore();

  export {db};