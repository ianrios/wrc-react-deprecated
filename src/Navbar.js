import React, { useState, useEffect } from 'react'
import Link from './Link';
import genFade from './utilities/shadow';
import './Navbar.scss';

export default function Navbar() {
	const Links = {
		"Home": ["WRC", false],
		"Artists": ["Fingerprint", true],
		"Releases": ["Dot", true],
		"Services": ["Honeycomb", true],
		"Store": ["Cube", true],
		"Map": ["Blockchain", true],
		"Contact": ["@", false],
	}
	const [textShadow, setTextShadow] = useState("");
	useEffect(() => {
		setTextShadow(genFade());
	});
	const mappedLinks = Object.keys(Links).map((item, idx) => {
		console.log(item)
		return (
			<Link
				linksObj={Links}
				iconHover={true}
				icon={Links[item][1] ? item : false}
				iconText={!Links[item][1] ? Links[item][0] : null}
				size={"25px"}
				to={item}
				id={idx}
				text={item}
				key={idx}
				textShadow={textShadow}
			/>
		)
	})
	return (
		<div className="navbar position-fixed">
			<div className="links">
				{mappedLinks}
			</div>
		</div>
	)
}
