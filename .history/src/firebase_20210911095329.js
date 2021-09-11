import firebase from 'firebase/app'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA3lRGQJLjaNz_2VtsTXjaLsGR7WCV-Q6k',
  authDomain: 'netflix-clone-aee88.firebaseapp.com',
  projectId: 'netflix-clone-aee88',
  storageBucket: 'netflix-clone-aee88.appspot.com',
  messagingSenderId: '571416844360',
  appId: '1:571416844360:web:1b66b944275c2f5cffe07d',
}

const app = initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = getAuth()

export { auth }
export default db
