 import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDTJIzPMNRn0rADqlFPEj8xX7SFTFWnQMs",
    authDomain: "school-roll-call.firebaseapp.com",
    databaseURL: "https://school-roll-call-default-rtdb.firebaseio.com",
    projectId: "school-roll-call",
    storageBucket: "school-roll-call.appspot.com",
    messagingSenderId: "1009020354923",
    appId: "1:1009020354923:web:10dffbddffab4aec5c8c2e"
  };

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

console.log(firebase.name);
console.log(firebase.database());