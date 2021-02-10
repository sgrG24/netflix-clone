import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCMdZ2Xfs0UNTJzJ0c6qQJXY96LPaYRiFg",
  authDomain: "netflix-clone-7d879.firebaseapp.com",
  projectId: "netflix-clone-7d879",
  storageBucket: "netflix-clone-7d879.appspot.com",
  messagingSenderId: "710475103299",
  appId: "1:710475103299:web:7532d16b91fbdde6a9e8f6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
