import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth"; // Import module auth

const firebaseConfig = {
  apiKey: "AIzaSyC94z53q9lRessKlPTIm5aAfnCiM6RZte4",
  authDomain: "studentrecord-daa13.firebaseapp.com",
  projectId: "studentrecord-daa13",
  storageBucket: "studentrecord-daa13.appspot.com",
  messagingSenderId: "828097011647",
  appId: "1:828097011647:web:d7bd01b375c72c630ccb0a",
  measurementId: "G-X5TX1HRFK1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app); // Get the auth instance

export {
  db,
  storage,
  auth,
};
