
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCleDOyfyal8eCNgJ2ZE4omPJjDMgXUzDU",
  authDomain: "netflix-clone-de3d5.firebaseapp.com",
  projectId: "netflix-clone-de3d5",
  storageBucket: "netflix-clone-de3d5.appspot.com",
  messagingSenderId: "447660701827",
  appId: "1:447660701827:web:2bfb1b0aa3525137d2c3b6"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}