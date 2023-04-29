// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import AsyncStorage from "@react-native-async-storage/async-storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlXxhgJ7VOf6RCncAdEZ7WmEgeTAHJ_U4",
  authDomain: "chatapp-10f32.firebaseapp.com",
  databaseURL: "https://chatapp-10f32-default-rtdb.firebaseio.com",
  projectId: "chatapp-10f32",
  storageBucket: "chatapp-10f32.appspot.com",
  messagingSenderId: "839948895634",
  appId: "1:839948895634:web:a4cde444abbb3a3a572d4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
//const firestore = getFirestore(); //2 cai nay sau se dung
//const storage = getStorage();

export { auth, 
 // firestore,
  // storage 
  };