// Import the functions you need from the SDKs you need
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import firebase, { initializeApp, getAnalytics } from "firebase";
// import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyB11y00RBpQk3pOSWScefwfmN2EXej6MBo",
	authDomain: "picturegallery-12bf5.firebaseapp.com",
	projectId: "picturegallery-12bf5",
	storageBucket: "picturegallery-12bf5.appspot.com",
	messagingSenderId: "266710357141",
	appId: "1:266710357141:web:49c0b6c5c4a651115db79c",
	measurementId: "G-EZ4JR5KQTD",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// const db = getFirestore(app)
// export { auth, provider, db };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
