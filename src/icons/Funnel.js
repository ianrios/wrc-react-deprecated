import React from 'react'

export default function Funnel(props) {
	return (
		<svg
			height={props.height}
			width={props.width}
			style={{ fill: props.fillColor }}
			viewBox="0 0 512 512"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="m256 0c-42.753906 0-256 3.605469-256 74.667969v70.78125c0 19.050781 8.40625 36.972656 23.039062 49.175781l168.960938 140.714844v155.328125c0 8.085937 4.566406 15.464843 11.796875 19.09375 3.007813 1.492187 6.292969 2.238281 9.535156 2.238281 4.546875 0 9.046875-1.449219 12.800781-4.265625l76.777344-57.578125c10.691406-8.023438 17.089844-20.78125 17.089844-34.15625v-80.660156l168.960938-140.714844c14.632812-12.203125 23.039062-30.125 23.039062-49.175781v-70.78125c0-71.0625-213.246094-74.667969-256-74.667969zm0 42.667969c119.230469 0 190.976562 19.347656 209.984375 32-19.007813 12.648437-90.753906 32-209.984375 32s-190.976562-19.351563-209.984375-32c19.007813-12.652344 90.753906-32 209.984375-32zm0 0" />
		</svg>
	)
}

