// import 'firebase/auth'
// import 'firebase/firestore'
// import { initializeApp } from 'firebase/app'
// import { getAuth } from ' firebase/auth'
// import { getFirestore } from 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: 'AIzaSyA3lRGQJLjaNz_2VtsTXjaLsGR7WCV-Q6k',
//   authDomain: 'netflix-clone-aee88.firebaseapp.com',
//   projectId: 'netflix-clone-aee88',
//   storageBucket: 'netflix-clone-aee88.appspot.com',
//   messagingSenderId: '571416844360',
//   appId: '1:571416844360:web:1b66b944275c2f5cffe07d',
// }

// const firebaseApp = initializeApp(firebaseConfig)
// const auth = getAuth(firebaseApp)
// const db = getFirestore(firebaseApp)

// export { auth }
// export default db

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from ' firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA3lRGQJLjaNz_2VtsTXjaLsGR7WCV-Q6k',
  authDomain: 'netflix-clone-aee88.firebaseapp.com',
  projectId: 'netflix-clone-aee88',
  storageBucket: 'netflix-clone-aee88.appspot.com',
  messagingSenderId: '571416844360',
  appId: '1:571416844360:web:1b66b944275c2f5cffe07d',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { auth }
export default db
