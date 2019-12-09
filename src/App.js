import React from 'react';

import './App.scss';
import Link from './Link';
import genFade from './utilities/shadow'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = { textShadow: '' }
		this.headers = [
			"artists",
			"releases",
			"store",
			"services",
			"index",
			"contact",
		];
	}

	componentDidMount() {
		this.setState({ textShadow: genFade() })
	}

	render() {
		const links = this.headers.map((item, idx) => {
			return (
				<Link size={"50px"} id={idx} text={item} textShadow={this.state.textShadow} />
			)
		})
		return (
			<div className="App">
				<div
					className="navbar"
					style={{
						display: "flex",
						justifyContent: 'space-evenly',
						flexDirection: 'row',
						flexWrap: 'wrap'
					}}>
					{links}
				</div>
				<div className="main">
					<p>WHY<span className='question-mark'>?</span> Record Company</p>
				</div >
			</div>
		);
	}
}
export default App;