// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDWmMa1Q4q2tj4xDXC1bICJhpJuVtyJMB8',
  authDomain: 'pinfo-68a00.firebaseapp.com',
  projectId: 'pinfo-68a00',
  storageBucket: 'pinfo-68a00.appspot.com',
  messagingSenderId: '127938683536',
  appId: '1:127938683536:web:ebc7a912f72b972e28ae15'
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
