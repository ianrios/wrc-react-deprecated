import React, { useState, useEffect } from 'react';
import Link from './Link';
import Q from './Q';
import genFade from './utilities/shadow';
import './App.scss';

export default function App() {
	let headers = [
		"artists",
		"releases",
		"store",
		"services",
		"index",
		"contact",
	];

	const [textShadow, setTextShadow] = useState("");

	useEffect(() => {
		setTextShadow(genFade());
	});

	const desktopLinks = headers.map((item, idx) => {
		return (
			<Link size={"50px"} id={idx} text={item} key={idx} textShadow={textShadow} />
		)
	})

	const [viewMain, setViewMain] = useState(true);

	return (
		<div className="App">
			{viewMain ?
				<div className="body-grid">
					<div className="main-image" onClick={() => setViewMain(false)}>
						<div className='image-overlay-text'>
							{/* <div className="background-invert"> */}
							WHY<Q
								size={2}
							/> Record Company
							{/* </div> */}
						</div>
					</div>
				</div>
				:
				<div className="body-main">
					<div className="navbar">
						<div className="d-none d-lg-block desktop-links">
							{desktopLinks}
						</div>
						<div className="d-block d-lg-none mobile-links">
							this should only appear on mobile
						</div>
					</div>
				</div>
			}
		</div>
	)
}
