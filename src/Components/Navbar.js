import React, { useState, useEffect } from "react";
import {
	useLocation
} from "react-router-dom";
import Link from './Link';
import genFade from '../utilities/shadow';
import './Navbar.scss';
import Funnel from "./Icons/Funnel";

export default function Navbar(props) {
	const Links = {
		"Home": ["WRC", false],
		"Artists": ["Fingerprint", true],
		"Releases": ["Dot", true],
		// "Services": ["Honeycomb", true],
		// "Store": ["Cube", true],
		// "Map": ["Blockchain", true],
		"Contact": ["@", false],
	}
	const [textShadow, setTextShadow] = useState("");
	useEffect(() => {
		setTextShadow(genFade());
	}, []);
	const mappedLinks = Object.keys(Links).map((item, idx) => {
		return (
			<Link
				linksObj={Links}
				iconHover={true}
				icon={Links[item][1] ? item : false}
				iconText={!Links[item][1] ? Links[item][0] : null}
				size={"25px"}
				to={`/${item}`}
				id={idx}
				text={item}
				key={idx}
				textShadow={textShadow}
				isText={!Links[item][1]}
				lastItem={idx === (Object.keys(Links).length - 1)}
			/>
		)
	})
	const [showFilter, setShowFilter] = useState(false);
	const releaseFilter = (
		<div className="filter-wrap">
			<div
				className="filter float-right"
				onClick={() => setShowFilter(!showFilter)}
			>

				<Funnel
					fillColor={"white"}
					height={"35px"}
					width={"35px"}
				/>
			</div>
			{
				showFilter ?
					<div className="d-flex d-lg-none mobile-filter row">
						<div className="col-6 sidebar-mobile text-left">
							<h2>Artists</h2>
							{/* {filteredArtists} */}
						</div>
						<div className="col-6 sidebar-mobile text-right">
							<h2>Filter</h2>
							{/* {filteredReleases} */}
						</div>
					</div>
					:
					null
			}
		</div>
	)
	const location = useLocation();
	// console.log(location);
	return (
		<div className="navbar position-fixed">
			<div className="links">
				{mappedLinks}
			</div>
			{location.pathname === "/releases" ? releaseFilter : null}
		</div>
	)
}
