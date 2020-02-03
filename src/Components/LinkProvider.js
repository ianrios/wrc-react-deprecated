import React, { useState } from "react";
import Context from "./context";

const LinkProvider = props => {
	const [links, setLinks] = useState({
		"Home": ["WRC", false],
		"Artists": ["Fingerprint", true],
		"Releases": ["Dot", true],
		"Services": ["Honeycomb", true],
		"Store": ["Cube", true],
		"Map": ["Blockchain", true],
		"Contact": ["@", false]
	});

	// this goes after contact
	// ,
	// 	"linkStatus":"viewing"

	// this goes after "data: links"
	// ,
	// 			updateLinkStatus: () => {
	// 				setLinks({ ...state, linkStatus: "viewed" });
	// 			}

	return (
		<Context.Provider
			value={{
				data: links
			}}
		>
			{props.children}
		</Context.Provider>
	);
};

export default LinkProvider;