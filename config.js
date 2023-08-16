import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCRdwM59mRkYHGSxp1YTApmjhvI8hOqYL8",
  authDomain: "btn2-37c9d.firebaseapp.com",
  databaseURL: "https://btn2-37c9d-default-rtdb.firebaseio.com",
  projectId: "btn2-37c9d",
  storageBucket: "btn2-37c9d.appspot.com",
  messagingSenderId: "83358872179",
  appId: "1:83358872179:web:3d1f4fcd1d5bcd48ad7006",
  measurementId: "G-M8JBQRQ1BF"
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();
