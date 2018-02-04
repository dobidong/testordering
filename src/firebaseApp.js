import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBErm-maeSLR94fFd50lPpxe-4yHyKjdLw",
    authDomain: "orderingsystem-2ef9b.firebaseapp.com",
    databaseURL: "https://orderingsystem-2ef9b.firebaseio.com",
    projectId: "orderingsystem-2ef9b",
    storageBucket: "orderingsystem-2ef9b.appspot.com",
    messagingSenderId: "369150942254"
  };

export const firebaseApp = firebase.initializeApp(config)
//new 
export const eventsRef = firebaseApp.database().ref().child('events')