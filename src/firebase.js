import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq7eU5leja_1YEwCrMFG5haeP_tEuTfNk",
  authDomain: "whatsapp-clone-9b9f5.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-9b9f5.firebaseio.com",
  projectId: "whatsapp-clone-9b9f5",
  storageBucket: "whatsapp-clone-9b9f5.appspot.com",
  messagingSenderId: "766184228578",
  appId: "1:766184228578:web:f2534a2613cb5f619800bb",
  measurementId: "G-MTVGKE52SR",
};

const fireabseApp = firebase.initializeApp(firebaseConfig);

const db = fireabseApp.firestore();
const auth = fireabseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
