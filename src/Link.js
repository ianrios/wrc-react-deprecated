import React from 'react';
import './Link.scss';
import { Link } from "react-router-dom";

import Dot from './icons/Dot';
import Cube from './icons/Cube';
import Honeycomb from './icons/Honeycomb';
import Blockchain from './icons/Blockchain';
import Fingerprint from './icons/Fingerprint';

function titleCase(str) {
	return str.toLowerCase().split(' ').map(function (word) {
		return (word.charAt(0).toUpperCase() + word.slice(1));
	}).join(' ');
}

function chooseIcon(props) {
	if (props.iconHover &&
		props.icon) {
		switch (props.icon) {
			case "Artists":
				return <Fingerprint
					fillColor={"white"}
					height={"35px"}
					width={"35px"}
				/>
			case "Releases":
				return <Dot
					fillColor={"white"}
					height={"35px"}
					width={"35px"}
				/>
			case "Services":
				return <Honeycomb
					fillColor={"white"}
					height={"35px"}
					width={"35px"}
				/>
			case "Store":
				return <Cube
					fillColor={"white"}
					height={"35px"}
					width={"35px"}
				/>
			case "Map":
				return <Blockchain
					fillColor={"white"}
					height={"35px"}
					width={"35px"}
				/>
			default:
				return null
		}
	}
	else {
		return props.iconText
	}
}

export default function LinkWrapper(props) {
	const text = titleCase(props.text);

	return (
		<Link
			className="link-icon-navbar"
			id={props.id}
			style={{
				paddingTop: '20px',
				textDecoration: 'none',
				fontSize: props.size,
			}}
			to={props.to.toLowerCase()}
		>
			<span className="no-hover-nav-link">{props.iconHover ? chooseIcon(props) : text}</span>
			<span className="text-shadow hover-nav-link text-navbar-link-color">{props.text}</span>
		</Link>
	);
}
