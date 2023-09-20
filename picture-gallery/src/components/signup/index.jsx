import { auth, db } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { useState } from "react";
import styles from "./styles.module.scss"
import { useNavigate } from "react-router-dom";
const SignUpForm = () => {
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();
	const handleSignUp = async (e) => {
		e.preventDefault();
		try {
			const userInfo = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userInfo.user;
			await setDoc(doc(db, "users", user.uid), {
				uid: user.uid,
				email,
			});
			navigate("/login");
			console.log("Sign up successful");
			// User logged in successfully
		} catch (error) {
			// Handle login error (display error message, etc.)
			alert("Sign up failed");
		}
	};
	return (
		<form className={styles.form}>
			<input
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className={styles.email}
			/>
			<input
				type="name"
				placeholder="username"
				value={userName}
				onChange={(e) => setUserName(e.target.value)}
				className={styles.username}
			/>
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				className={styles.password}
			/>
			<button type="button" onClick={handleSignUp}>
				Sign Up
			</button>
			<div className={styles.signin}>
				<p>Already have an account?</p>
				<button onClick={() => navigate("/login")}>Sign in</button>
			</div>
		</form>
	);
};

export { SignUpForm };
