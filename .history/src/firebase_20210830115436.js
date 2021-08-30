import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyA3lRGQJLjaNz_2VtsTXjaLsGR7WCV-Q6k',
  authDomain: 'netflix-clone-aee88.firebaseapp.com',
  projectId: 'netflix-clone-aee88',
  storageBucket: 'netflix-clone-aee88.appspot.com',
  messagingSenderId: '571416844360',
  appId: '1:571416844360:web:1b66b944275c2f5cffe07d',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db
