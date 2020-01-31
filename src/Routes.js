import React from 'react'
import {
	Switch,
	Route,
} from "react-router-dom";
import Artists from './Artists';
import Releases from './Releases';
import Services from './Services';
import Merchandise from './Merchandise';
import Home from './Home';
import Contact from './Contact';

export default function Routes() {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route path="/artists">
				<Artists />
			</Route>
			<Route path="/releases">
				<Releases />
			</Route>
			<Route path="/services">
				<Services />
			</Route>
			<Route path="/merchandise">
				<Merchandise />
			</Route>
			<Route path="/contact">
				<Contact />
			</Route>
			<Route path="*">
				<Home />
			</Route>
		</Switch>
	)
}
