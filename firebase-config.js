import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA4xNJYmhHjfM5wmuXdANDx97PohO6KbJs",
  authDomain: "islami-khidma-app.firebaseapp.com",
  projectId: "islami-khidma-app",
  storageBucket: "islami-khidma-app.firebasestorage.app",
  messagingSenderId: "280753682312",
  appId: "1:280753682312:web:b8658e7bfe9eeba1c5ec3d",
  measurementId: "G-BEPCG66HCM"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
