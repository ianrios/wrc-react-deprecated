import React, { useState } from 'react';
import './Link.scss';
import { Link } from "react-router-dom";

export default function LinkWrapper(props) {

	const [hover, setHover] = useState(false);

	return (
		<Link
			// className={hover ? "demotext" : ''}
			id={props.id}
			onMouseEnter={() => setHover(!hover)}
			onMouseLeave={() => setHover(!hover)}
			style={{
				paddingTop: '40px',
				textDecoration: 'none',
				color: '#000000',
				fontSize: props.size,
				textShadow: hover ? props.textShadow : "",

			}}
			to={props.to}

		>
			{props.text}
		</Link>
	);
}
