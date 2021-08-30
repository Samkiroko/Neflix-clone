import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA3lRGQJLjaNz_2VtsTXjaLsGR7WCV-Q6k',
  authDomain: 'netflix-clone-aee88.firebaseapp.com',
  projectId: 'netflix-clone-aee88',
  storageBucket: 'netflix-clone-aee88.appspot.com',
  messagingSenderId: '571416844360',
  appId: '1:571416844360:web:1b66b944275c2f5cffe07d',
}

const firebaseApp = initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = getAuth()

createUserWithEmailAndPassword(auth, email, password)

export { auth, email, password }
export default db
