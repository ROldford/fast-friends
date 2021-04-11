import firebase from "firebase/app";

function initializeFirebase() {
  var config = {
    apiKey: "AIzaSyB39HK0K7O11L2cz-D7P0Rg1KR3OqrK-BU",
    authDomain: "fast-friends-b92b0.firebaseapp.com",
    projectId: "fast-friends-b92b0",
    storageBucket: "fast-friends-b92b0.appspot.com",
    messagingSenderId: "585475789644",
    appId: "1:585475789644:web:637fbd3a7a822e381a75e9",
  };
  //initialize firebase
  firebase.initializeApp(config);
}

export default initializeFirebase;