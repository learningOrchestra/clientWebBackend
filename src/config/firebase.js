import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_CREDENCIAL,
  authDomain: 'client-web-auth.firebaseapp.com',
  projectId: 'client-web-auth',
  storageBucket: 'client-web-auth.appspot.com',
  messagingSenderId: '967253516236',
  appId: '1:967253516236:web:73f50d6a0478c6f79a8769',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
