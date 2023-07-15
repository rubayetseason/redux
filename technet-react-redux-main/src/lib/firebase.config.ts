// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAC2O5A4hav-utRiiidIWEiNaStE0JjHwU',
  authDomain: 'technet-redux-48b27.firebaseapp.com',
  projectId: 'technet-redux-48b27',
  storageBucket: 'technet-redux-48b27.appspot.com',
  messagingSenderId: '324275076837',
  appId: '1:324275076837:web:0852790505886cf7559e0c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
