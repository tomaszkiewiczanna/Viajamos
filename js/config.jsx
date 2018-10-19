import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCHmw8GjzmFRXLSXg7FZXKlqJs6FS_DDRA",
    authDomain: "training-project-866ab.firebaseapp.com",
    databaseURL: "https://training-project-866ab.firebaseio.com",
    projectId: "training-project-866ab",
    storageBucket: "training-project-866ab.appspot.com",
    messagingSenderId: "1061277711594"
};
firebase.initializeApp(config);
export default firebase;