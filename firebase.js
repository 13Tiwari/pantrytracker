import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
 apiKey: "AIzaSyBaPZ61XFDQPxV6-5HXCIegCDyzqNpX0us",
 authDomain: "pantrytracker-55862.firebaseapp.com",
 projectId: "pantrytracker-55862",
 storageBucket: "pantrytracker-55862.appspot.com",
 messagingSenderId: "224855247188",
 appId: "1:224855247188:web:931670722b6815806c60c1"
 };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };