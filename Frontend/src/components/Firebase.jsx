// src/firebase.js
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: 'AIzaSyBeONXKfWNBFRaVPmmAKfpSDN-Z4KAotV8',
  authDomain: 'emergency-doctor-services.firebaseapp.com',
  projectId: 'emergency-doctor-services',
  storageBucket: 'emergency-doctor-services.appspot.com',
  messagingSenderId: '831351373881',
  appId: '1:831351373881:web:1c00694e7c0c5e36e84de8',
};

// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);

