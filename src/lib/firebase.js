// Firebase App (the core Firebase SDK) is always required and must be listed first
import { initializeApp } from "firebase/app"
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// import {seedDatabase} from "../seed"

// Add the Firebase products that you want to use
// if we don't import "firebase/auth, we will get an error when we try to call firebase.auth(), -> firebase.auth is not a function
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCu_RkOy-eiFqNWBPr_tEEW4zY8JVYg-tg",
  authDomain: "music-box-e8f66.firebaseapp.com",
  projectId: "music-box-e8f66",
  storageBucket: "music-box-e8f66.appspot.com",
  messagingSenderId: "1039275884942",
  appId: "1:1039275884942:web:f643baf07a740cf5c5a4df",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app
