import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyCu_RkOy-eiFqNWBPr_tEEW4zY8JVYg-tg",
  authDomain: "music-box-e8f66.firebaseapp.com",
  projectId: "music-box-e8f66",
  storageBucket: "music-box-e8f66.appspot.com",
  messagingSenderId: "1039275884942",
  appId: "1:1039275884942:web:f643baf07a740cf5c5a4df",
}

const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp
