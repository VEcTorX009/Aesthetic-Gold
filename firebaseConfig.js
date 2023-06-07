import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBbknCD4CpRP5TuQGvRCEY9eoFtsds0w74",
    authDomain: "aesthetic-gold-3556d.firebaseapp.com",
    projectId: "aesthetic-gold-3556d",
    storageBucket: "aesthetic-gold-3556d.appspot.com",
    messagingSenderId: "944942509272",
    appId: "1:944942509272:web:afb4dbdb6960cc5ec1bbad",
    measurementId: "G-VBXC8S1GMJ"
  };
let app;
  if (!getApps().length) {
    app = initializeApp(firebaseConfig)
}

  const db = getFirestore(app)
  const auth = getAuth(app)
  export {db, auth}
