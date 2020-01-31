import React, { useState, useEffect } from 'react'
import Link from './Link';
import genFade from './utilities/shadow';
import './Navbar.scss';
import Dot from './icons/Dot';
import Cube from './icons/Cube';
import Blockchain from './icons/Blockchain';
import Fingerprint from './icons/Fingerprint';

export default function Navbar() {
	let headers = [
		"Artists",
		"releases",
		"home",
	];
	const Links = {
		"Artists": "Fingerprints",
		"Releases": "Dot",
		"Merchandise": "Cube",
		"Services": "",
		"Contact": "",
		"Home": "",
		"Map": "Blockchain"
	}
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
	return (
		<div className="navbar position-fixed">
			<div className="d-none d-lg-block desktop-links">
				{desktopLinks}
			</div>
			<div className="d-flex d-lg-none mobile-links">
				{mobileLinks}
			</div>
		</div>
	)
}
