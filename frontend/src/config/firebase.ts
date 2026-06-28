import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCCY9UoZ1XMWg4kdasiHzaf8PaK2Qg7zms",
  authDomain: "catalogo-bandas.firebaseapp.com",
  projectId: "catalogo-bandas",
  storageBucket: "catalogo-bandas.firebasestorage.app",
  messagingSenderId: "258059325003",
  appId: "1:258059325003:web:d469a667fd6ec9361807ce",
  measurementId: "G-DH73X7RDV6"
}

export const firebaseApp = initializeApp(firebaseConfig)
export const analytics = getAnalytics(firebaseApp)
export const auth = getAuth(firebaseApp)
