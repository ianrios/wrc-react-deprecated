import React, { useState } from 'react';
import {
	BrowserRouter
} from "react-router-dom";
import Q from './Q';
import Navbar from './Navbar';
// import Footer from './Footer';
import Route from './Routes';
import Logo from "./Logo";
import './App.scss';

export default function App() {
	const [viewMain, setViewMain] = useState(true);
	return (
		<BrowserRouter>
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
						{/* <Footer /> */}
					</div>
				}
			</div>
		</BrowserRouter>
	)
}