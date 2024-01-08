import React from "react";
import footer from "./footer.jsx";
import NavBar from "./NavBar.jsx";
import card from "./card.jsx";
import welcome from "./welcome.jsx";



//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-cente">
			<NavBar></NavBar>
			<welcome></welcome>
			<card></card>
			<footer></footer>

		</div>

	);
};

export default Home;

