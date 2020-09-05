import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDReRFDtCmKUOSV8rd6e4TwYxxqoYF_GK8",
    authDomain: "frontend-bb736.firebaseapp.com",
    databaseURL: "https://frontend-bb736.firebaseio.com",
    projectId: "frontend-bb736",
    storageBucket: "frontend-bb736.appspot.com",
    messagingSenderId: "855779621662",
    appId: "1:855779621662:web:58a1ce6fb3590aaa5fa70f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStroge = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStroge, projectFirestore, timestamp };
