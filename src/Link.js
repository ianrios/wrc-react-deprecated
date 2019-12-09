import React from 'react';
import './Link.scss';

class Link extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hover: false }
		this.toggleHover = this.toggleHover.bind(this)
	}

	toggleHover() {
		this.setState({ hover: !this.state.hover })
	}

	render() {
		return (
			<a
				// className={this.state.hover ? "demotext" : ''}
				id={this.props.id}
				onMouseEnter={this.toggleHover}
				onMouseLeave={this.toggleHover}
				style={{
					paddingTop:'40px',
					textDecoration: 'none',
					color: '#000000',
					fontSize: this.props.size,
					textShadow: this.state.hover ? this.props.textShadow : ""
				}}
				href="#"

			>
				{this.props.text}
			</a>
		);
	}
}
export default Link;