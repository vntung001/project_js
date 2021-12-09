
import firebase from 'firebase/app';
import "firebase/storage";




  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDKC9_KGapmI7o0I6j59qRFwvHF7Tyz8I4",
    authDomain: "ecomerce-162cc.firebaseapp.com",
    projectId: "ecomerce-162cc",
    storageBucket: "ecomerce-162cc.appspot.com",
    messagingSenderId: "1011853599758",
    appId: "1:1011853599758:web:d3cf27e8e874207465c85f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;
