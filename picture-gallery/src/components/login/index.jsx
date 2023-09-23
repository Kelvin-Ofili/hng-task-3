// LoginForm.js
import { useState } from "react";
import styles from "./styles.module.scss";
import { auth, db } from "../../firebaseConfig";
import { setDoc, doc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Heading } from "../heading";
const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const userInfo = await signInWithEmailAndPassword(auth, email, password);
			const user = userInfo.user;
			setDoc(doc(db, "users", user.uid), {
				uid: user.uid,

				email,
			});
			navigate("/home");
		} catch (error) {
			// Handle login error (display error message, etc.)
			alert("login failed");
		}
	};

	return (
		<div className={styles.everything}>
			<Heading />
			<form className={styles.form}>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="button" onClick={handleLogin}>
					Login
				</button>
			</form>
		</div>
	);
};

export { LoginForm };
