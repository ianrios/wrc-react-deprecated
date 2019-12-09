import React from 'react';

import './App.scss';

import Link from './Link';
import Q from './Q'

import genFade from './utilities/shadow'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = { textShadow: '', viewMain: true }
		this.headers = [
			"artists",
			"releases",
			"store",
			"services",
			"index",
			"contact",
		];
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({ viewMain: !this.state.viewMain })
	}
	componentDidMount() {
		this.setState({ textShadow: genFade() })
	}

	render() {
		const desktopLinks = this.headers.map((item, idx) => {
			return (
				<Link size={"50px"} id={idx} text={item} key={idx} textShadow={this.state.textShadow} />
			)
		})
		return (
			<div className="App">
				{this.state.viewMain ?
					<div className="body-grid">
						{/* <p className='header-text'>WHY<Q /> Record Company</p> */}
						<div className="main-image" onClick={this.handleClick}>
							<div className='image-overlay-text'>
								<div className="background-invert">
									WHY<Q
										size={2}
									/> Record Company
								</div>
							</div>
						</div>
					</div>
					:
					<div className="navbar">
						<div className="d-none d-lg-block desktop-links">
							{desktopLinks}
						</div>
						<div className="d-block d-lg-none mobile-links">
							this should only appear on mobile
						</div>
					</div>
				}
			</div>
		);
	}
}
export default App;