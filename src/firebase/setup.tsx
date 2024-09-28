
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCLywicjoBFI0pV7Le9T8b8J7giaweNBPE",
  authDomain: "olx-clone-a85ba.firebaseapp.com",
  projectId: "olx-clone-a85ba",
  storageBucket: "olx-clone-a85ba.appspot.com",
  messagingSenderId: "922286184095",
  appId: "1:922286184095:web:e989aa991edd6b9e6034aa"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider() 