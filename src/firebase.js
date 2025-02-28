import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-joDGbO_I-YpQVDUg0ovUU_3j3V2DQyA",
  authDomain: "personal-work-station-v2.firebaseapp.com",
  projectId: "personal-work-station-v2",
  storageBucket: "personal-work-station-v2.appspot.com",
  messagingSenderId: "213325118888",
  appId: "1:213325118888:web:c7d8d345e08c710604b19d",
  measurementId: "G-3ZHMH5F68L",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider };
