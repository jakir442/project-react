// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'project-react-31880.firebaseapp.com',
  projectId: 'project-react-31880',
  storageBucket: 'project-react-31880.appspot.com',
  messagingSenderId: '41393938768',
  appId: '1:41393938768:web:fb905095bb6a04972fcc55',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
