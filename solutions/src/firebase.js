// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN7okgv7lEGG_zSWjucOOt3tNicRYh6lg",
  authDomain: "solutions-8ea2d.firebaseapp.com",
  projectId: "solutions-8ea2d",
  storageBucket: "solutions-8ea2d.appspot.com",
  messagingSenderId: "149773715699",
  appId: "1:149773715699:web:69d3250a05d3bbb7f34f86",
  measurementId: "G-VPYSGPMYMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//This stuff needs to be imported before being used
export const analytics = getAnalytics(app);//allws for us to get analytics from firebase
export const authentication = getAuth(app);//allows for process of authentication
export const db = getFirestore();//used to connect to database