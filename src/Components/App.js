import React, { useState, useEffect } from 'react';
import {
	BrowserRouter,
	useLocation
} from "react-router-dom";
import Q from './Q';
import Navbar from './Navbar';
import Route from './Routes';
import Logo from "./Logo";
import ScrollToTop from "./ScrollToTop";
import './App.scss';

function Wrapper() {
	const [viewMain, setViewMain] = useState(true);
	const location = useLocation();
	const pathArr = location.pathname.split("/");
	useEffect(() => {
		if (pathArr.length > 2 && (pathArr[1] === "artist" || pathArr[1] === "release")) {
			setViewMain(false)
		}
	}, [pathArr]);
	// const letters = "WHY? Record Company".split("").map(i => Math.floor(Math.random() * 2) === 1 ? "rotate" : "")
	// console.log(letters)
	// className={`${letters[k]}`}
	const appTitle = "WHY? Record Company".split("").map((i, k) => i === "?" ? <Q size={2} key={k} /> : <span key={k} >{i}</span>)

	return (
		<div className="App">
			{viewMain ?
				<div className="body-grid">
					<div className="main-image" style={{
						backgroundImage: `url("/images/textures/${Math.floor(Math.random() * 6) + 1}.jpg")`
					}} onClick={() => setViewMain(!viewMain)}>
						<div className='image-overlay-text app-title'>
							{appTitle}
						</div>
					</div>
					<div className="enter-text">
						<span className="questrial colored-link white-text" onClick={() => setViewMain(!viewMain)}>
							enter
						</span>
					</div>
				</div>
				:
				<div className="body-main">
					<Navbar />
					<div className="container">
						<Route />
						<Logo viewMain={viewMain} setViewMain={setViewMain} />
					</div>
				</div>
			}
		</div>
	)
}

export default function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Wrapper />
		</BrowserRouter>
	)
}