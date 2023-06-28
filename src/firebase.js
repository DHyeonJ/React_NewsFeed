// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCa-TqkqnfugBdHNvlUwHcoF5Jkt9sNg_E',
  authDomain: 'fir-test-fe5bf.firebaseapp.com',
  projectId: 'fir-test-fe5bf',
  storageBucket: 'fir-test-fe5bf.appspot.com',
  messagingSenderId: '382815658287',
  appId: '1:382815658287:web:13ff1c3eb48cff526441da'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
