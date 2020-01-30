import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Link from './Link';
import Q from './Q';
import Artists from './Artists';
import Releases from './Releases';
import Services from './Services';
import Merchandise from './Merchandise';
import Home from './Home';
import Contact from './Contact';
import Footer from './Footer';
import genFade from './utilities/shadow';
import './App.scss';

export default function App() {
	let headers = [
		"artists",
		"releases",
		// "merchandise",
		// "services",
		// "contact",
		"home",
	];

	const [textShadow, setTextShadow] = useState("");

	useEffect(() => {
		setTextShadow(genFade());
	});

	const desktopLinks = headers.map((item, idx) => {
		return (
			<Link size={"50px"} to={item} id={idx} text={item} key={idx} textShadow={textShadow} />
		)
	})
	const mobileLinks = headers.map((item, idx) => {
		return (
			<div id={idx} key={idx}>
				<Link size={"50px"} to={item} text={item.slice(0, 1)} className="mobile-link-first-letter" />
				<Link size={"12px"} to={item} text={item.slice(1)} className="mobile-link-remaining" />
			</div>
		)
	})

	const [viewMain, setViewMain] = useState(true);

	return (
		<Router>
			<div className="App">
				{viewMain ?
					<div className="body-grid">
						<div className="main-image" onClick={() => setViewMain(!viewMain)}>
							<div className='image-overlay-text'>
								WHY<Q size={2} /> Record Company
							</div>
						</div>
					</div>
					:
					<div className="body-main">
						<div className="navbar position-fixed">
							<div className="d-none d-lg-block desktop-links">
								{desktopLinks}
							</div>
							<div className="d-flex d-lg-none mobile-links">
								{mobileLinks}
							</div>
						</div>
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="/artists">
								<Artists />
							</Route>
							<Route path="/releases">
								<Releases />
							</Route>
							<Route path="/services">
								<Services />
							</Route>
							<Route path="/merchandise">
								<Merchandise />
							</Route>
							<Route path="/contact">
								<Contact />
							</Route>
							<Route path="*">
								<Home />
							</Route>
						</Switch>
						{/* <Footer /> */}
					</div>
				}
			</div>
		</Router>
	)
}
