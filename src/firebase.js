import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyA8CTDG3hHloprBrBTe6BgH-hSpSSOqQ_E',
  authDomain: 'clone-b8c1c.firebaseapp.com',
  projectId: 'clone-b8c1c',
  storageBucket: 'clone-b8c1c.appspot.com',
  messagingSenderId: '57016193695',
  appId: '1:57016193695:web:dd4a1f1681414bf08908aa',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
