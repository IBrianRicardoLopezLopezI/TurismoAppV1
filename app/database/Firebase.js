import * as firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDOlTbadePs57dPPHhPvqurnAo_ITfid-s",
    authDomain: "appturismo-11b35.firebaseapp.com",
    projectId: "appturismo-11b35",
    storageBucket: "appturismo-11b35.appspot.com",
    messagingSenderId: "515464274439",
    appId: "1:515464274439:web:eacb28703803afb89b00a2",
    measurementId: "G-QBF0DT44BM"
  };

  let Firebase = firebase.initializeApp(firebaseConfig)

  export default Firebase