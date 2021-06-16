import firebase from "firebase"; //generic firebase(doesn't know which project to work with)

//telling firebase project to work with this particular project.
const firebaseConfig = {
    apiKey: "AIzaSyBE2MaPOsq5fGNOqQbWSx4iZI6zYK6GNGw",
    authDomain: "contactsapp-bde70.firebaseapp.com",
    projectId: "contactsapp-bde70",
    storageBucket: "contactsapp-bde70.appspot.com",
    messagingSenderId: "997500666391",
    appId: "1:997500666391:web:b349a5bb566c2a5aaf5252"
  };

  firebase.initializeApp(firebaseConfig)//telling firebase which project to work it

  export default firebase; //exporting the firebase linked to the project