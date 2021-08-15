import firebase from "firebase";

// var firebaseConfig = {
//     apiKey: "AIzaSyBHbjMGCHqkOvHfZlVt1rVkR-iSSXdB3L0",
//     authDomain: "resumebuilder-9676c.firebaseapp.com",
//     projectId: "resumebuilder-9676c",
//     storageBucket: "resumebuilder-9676c.appspot.com",
//     messagingSenderId: "355990038695",
//     appId: "1:355990038695:web:b5491f868e0c81c7bcd382"
//   };
const firebaseConfig = {
  apiKey: "AIzaSyA7KGnebohggjfqOrRF8LMYcLXWc7cTiv4",
  authDomain: "resume-builder-29db5.firebaseapp.com",
  projectId: "resume-builder-29db5",
  storageBucket: "resume-builder-29db5.appspot.com",
  messagingSenderId: "434789022296",
  appId: "1:434789022296:web:99cf4f95127963f698282d"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , db , provider , firebaseApp};

  