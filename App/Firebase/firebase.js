import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyCHz2qUV2F0oTjZ2Ijc4P278JeNOoi2F3U",
    authDomain: "aristote-second-project.firebaseapp.com",
    databaseURL: "https://aristote-second-project.firebaseio.com",
    projectId: "aristote-second-project",
    storageBucket: "aristote-second-project.appspot.com",
    messagingSenderId: "787309081739"
};
const Firebase = firebase.initializeApp(config);
export default Firebase;