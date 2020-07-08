import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC9dJgpvpFv0OsLFlHjv-j2b9HF2c_NYQY',
  authDomain: 'learning-249bd.firebaseapp.com',
  databaseURL: 'https://learning-249bd.firebaseio.com',
  projectId: 'learning-249bd',
  storageBucket: 'learning-249bd.appspot.com',
  messagingSenderId: '559599719397',
  appId: '1:559599719397:web:2cfe39ceb6e6e04c75d50c',
  measurementId: 'G-33FZGV4B6B',
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
export default firebase;
