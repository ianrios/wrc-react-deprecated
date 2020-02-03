import React, { useState } from "react";
import Context from "./context";

const ReleaseTypeProvider = props => {
	const [releaseTypes, setReleaseTypes] = useState([
		"All",
		"WRC",
		"CYCLE",
		"Blue Label",
		"Other"
	]);

	// this goes after other
	// ,
	// 	"releaseStatus":"viewing"

	// this goes after "data: releaseTypes"
	// ,
	// 			updateReleaseStatus: () => {
	// 				setReleaseTypes({ ...state, releaseStatus: "viewed" });
	// 			}

	return (
		<Context.Provider
			value={{
				data: releaseTypes
			}}
		>
			{props.children}
		</Context.Provider>
	);
};

export default ReleaseTypeProvider;