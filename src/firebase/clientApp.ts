import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const clientCredentials = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
}

if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials)
  firebase.analytics()
}

export default firebase
