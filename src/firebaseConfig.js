import firebase from 'firebase';
// See https://firebase.google.com/docs/web/setup#project_setup for how to
// auto-generate this config
var config = {
  apiKey: "AIzaSyCcHMlDGhJDxjysXpxzvoRfl366zhPrdh0",
  authDomain: "todo-app-7a9b4.firebaseapp.com",
  databaseURL: "https://todo-app-7a9b4.firebaseio.com"
};

firebase.initializeApp(config);

var rootRef = firebase.database().ref();
export default rootRef;