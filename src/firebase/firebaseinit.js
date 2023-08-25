import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB-js3ec1WWDW9kd7Vd8LCPHbFYbk6xzeo",
    authDomain: "miaaw-c00cb.firebaseapp.com",
    projectId: "miaaw-c00cb",
    storageBucket: "miaaw-c00cb.appspot.com",
    messagingSenderId: "859263994272",
    appId: "1:859263994272:web:d2605a2fe7324956cbbcc5",
    measurementId: "G-B403JTJR5X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();