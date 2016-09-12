import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyC239AewulT27xrTB20djgPV-YoqXaFOHM",
    authDomain: "react-todo-demo-75fe6.firebaseapp.com",
    databaseURL: "https://react-todo-demo-75fe6.firebaseio.com",
    storageBucket: "react-todo-demo-75fe6.appspot.com",
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
