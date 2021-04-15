import firebase from "firebase/app"
import "firebase/auth"

var firebaseConfig = {
  apiKey: "AIzaSyC12E6ebKzvYx0ZWdfR1_AN_5scecJY_N8",
  authDomain: "otp-web-auth-d96d2.firebaseapp.com",
  projectId: "otp-web-auth-d96d2",
  storageBucket: "otp-web-auth-d96d2.appspot.com",
  messagingSenderId: "154430942177",
  appId: "1:154430942177:web:d3cc2203092bd0ee42c0a0",
  measurementId: "G-VQKK6T5MY9"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}


export const auth = firebase.auth() 
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export default firebase;