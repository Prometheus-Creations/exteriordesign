/* eslint-disable import/no-extraneous-dependencies */
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCoAIPTO7kvdbQgvZwW9RrtfNKd-sbSL8w",
  authDomain: "akbarsauto-558cf.firebaseapp.com",
  projectId: "akbarsauto-558cf",
  storageBucket: "akbarsauto-558cf.appspot.com",
  messagingSenderId: "1083247371673",
  appId: "1:1083247371673:web:a771358c1ad8ccea2b1f08"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth, onAuthStateChanged };