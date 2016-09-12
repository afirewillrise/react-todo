import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyC239AewulT27xrTB20djgPV-YoqXaFOHM",
  authDomain: "react-todo-demo-75fe6.firebaseapp.com",
  databaseURL: "https://react-todo-demo-75fe6.firebaseio.com",
  storageBucket: "react-todo-demo-75fe6.appspot.com",
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Monish',
    age: 25
  }
}).then(() => {
  console.log("Set worked!");
}, (e) => {
  console.log("Set failed");
});

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log("Got values from DB", snapshot.val());
// }, (e) => {
//   console.log("Error fetching values from DB", e);
// })

var todoRef = firebaseRef.child('todos');

todoRef.on('child_added', (snapshot) => {
  console.log("Todo added", snapshot.key, snapshot.val());
});

todoRef.push({
  text: 'Todo Item 1'
});

todoRef.push({
  text: 'Todo Item 2'
});
