import React from 'react'
import {
	Switch,
	Route,
} from "react-router-dom";
import Artists from './Pages/Artists';
import Releases from './Pages/Releases';
import Services from './Pages/Services';
import Store from './Pages/Merchandise';
import Home from './Pages/Home';
import Contact from './Pages/Contact';

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
			<Route path="/store">
				<Store />
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
