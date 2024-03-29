import React from '../../../node_modules/react';

export default function Cube(props) {
	return (
		<svg
			height={props.height}
			width={props.width}
			style={{ fill: props.fillColor }}
			viewBox="-34 0 512 512"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="m221.703125 0-221.703125 128v256l221.703125 128 221.703125-128v-256zm176.515625 136.652344-176.515625 101.914062-176.515625-101.914062 176.515625-101.910156zm-368.132812 26.027344 176.574218 101.941406v203.953125l-176.574218-101.945313zm206.660156 305.894531v-203.953125l176.574218-101.941406v203.949218zm0 0" />
		</svg>
	)
}