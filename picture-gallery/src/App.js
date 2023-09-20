import "./App.css";
import { PictureGallery } from "./components";
import { LoginForm } from "./components";
import { SignUpForm } from "./components";
import { pictureList } from "./utl";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<SignUpForm />} />
				<Route exact path="/login" element={<LoginForm />} />
				<Route
					exact
					path="/home"
					element={<PictureGallery images={pictureList} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
