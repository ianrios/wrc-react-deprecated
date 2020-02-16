import React, { useState, useEffect } from 'react';
import {
	BrowserRouter,
	useLocation
} from "react-router-dom";
import Q from './Q';
import Navbar from './Navbar';
import Route from './Routes';
import Logo from "./Logo";
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

	return (
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
			<Wrapper />
		</BrowserRouter>
	)
}