import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyA6xgQ8-mlXI80XCzHEGOuH4sAjOrxtPqs",
    authDomain: "my-db-e06fd.firebaseapp.com",
    databaseURL: "https://my-db-e06fd.firebaseio.com",
    projectId: "my-db-e06fd",
    storageBucket: "my-db-e06fd.appspot.com",
    messagingSenderId: "1086692179297",
    appId: "1:1086692179297:web:a56410b29ca852f4df9920",
    measurementId: "G-6FC8Z6FQE1"
  };

  export const createUserProfileDocument=async (userAuth,additionalData) =>{
   if(!userAuth) return;

const userref=firestore.doc(`users/${userAuth.uid}`);
const snapshot=await userref.get();
   if (!snapshot.exists){
       const {displayName,email} =userAuth;
       const createdAt=new Date();

       try {
         await userref.set({
        displayName,
        email,
        createdAt,
        ...additionalData

         })

       }catch (error){
        console.log("error creating user",error.message);

       }

   }

   return userref;

  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle =() =>auth.signInWithPopup(provider);
  export default firebase;