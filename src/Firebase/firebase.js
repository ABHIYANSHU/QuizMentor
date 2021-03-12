import firebase from 'firebase'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDCA9RVwoVlyQXIGhln05UIJwer3JZ9b_Y",
    authDomain: "todo-3779b.firebaseapp.com",
    projectId: "todo-3779b",
    storageBucket: "todo-3779b.appspot.com",
    messagingSenderId: "550383627506",
    appId: "1:550383627506:web:a9cb9b8c7f3f6aeac8746b",
    measurementId: "G-47LKEHRX8L"
  });

const db = firebaseConfig.firestore();

export default db
