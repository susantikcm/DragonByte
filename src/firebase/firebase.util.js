import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyCDQ9WonSV2Xrp6DC3vITYz3BOGM4bN500",
    authDomain: "dragon-byte-75655.firebaseapp.com",
    databaseURL: "https://dragon-byte-75655.firebaseio.com",
    projectId: "dragon-byte-75655",
    storageBucket: "dragon-byte-75655.appspot.com",
    messagingSenderId: "291093412606",
    appId: "1:291093412606:web:7a87ba344cdfbdc02d83af"
};

//async because we are making API request
//param userAuth -> passed from currentUser state from App.js
//passing addtionalData for later use on sign up
export const createUserProfileDocument = async (userAuth, additionalData) => {
    //if user is not signed in then exits this function
    if(!userAuth) return;

    //if userAuth exists, then get the userReference 
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    //get userSnapshot
    const userSnapshot = await userRef.get();
    //console.log(snapshot);

    //if snapshot does exist, then exit function and return userRef
    //if not, create user data first 
    if(!userSnapshot.exists) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

//import whenever needed 
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//ways to fetch data from Firestore
//firestore.collection('users').doc('AFnI6l2hYORAmceRctDY0aSMu3i2').collection('cartItems').doc('Pacman')
//firestore.doc('users//FnI6l2hYORAmceRctDY0aSMu3i2/cartItems/Pacman')
//firestore.collection('~/users//FnI6l2hYORAmceRctDY0aSMu3i2/cartItems')

//this give access to Google Auth throught the firebase auth library
const provider = new firebase.auth.GoogleAuthProvider();  
//to always trigger the google pop-up whenever GoogleAuthProvider() is used
provider.setCustomParameters({ prompt: 'select_account'})

//signInWithPopup() takes many types of pop-up like google/twitter/FB
//but we only need google pop-up, so we pass provider we created above
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//in case we want the whole library
export default firebase;