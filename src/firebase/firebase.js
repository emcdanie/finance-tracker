import {initializeApp} from "firebase/app";
import { getFirestore } from 'firebase/firestore'


   const firebaseConfig = {
       apiKey: "AIzaSyBKH7dn0wk1zK6P45Xg-_DUuviTaoMR5xw",
       authDomain: "finance-tracker-58be4.firebaseapp.com",
       projectId: "finance-tracker-58be4",
       storageBucket: "finance-tracker-58be4.appspot.com",
       messagingSenderId: "604417126500",
       appId: "1:604417126500:web:f49a5144a5ed63a7bb6f71"
   };

// init firebase
const app = initializeApp(firebaseConfig);


//init firestore
const db = getFirestore(app);



export {db}