import "./App.css";
import avatar from "../assets/images/avatar-jessica.jpeg";
import { Hero } from "./components/Hero";
import LinksList from "./components/LinksList";
import { links } from "./data/links";

function App() {
	return (
		<>
			<div className="social-links-container">
				<img className="pfp-logo" src={avatar} alt="profile-avatar" />
				<Hero
					name={"Jessica Randall"}
					livingAt={"London, United Kingdom"}
					about={"Front-end developer and avid reader."}
				/>
				<LinksList links={links} />
			</div>
		</>
	);
}

export default App;
