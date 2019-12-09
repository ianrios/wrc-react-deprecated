import React from 'react';
import './Q.scss';

export default class Q extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<span className={`question-mark font-size-${this.props.size?this.props.size:1}`}>?</span >
		)
	}
}