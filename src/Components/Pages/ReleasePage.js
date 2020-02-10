import React from 'react'
import { useLocation } from 'react-router-dom';
import releaseData from "../../constants/releaseData.json";
import artistData from "../../constants/artistData.json";

export default function ReleasePage() {
	const locationObj = useLocation();
	const location = locationObj.pathname.split("/")[2];
	const currRelease = releaseData.find(i => i.local_path === location);
	const foundArtist = currRelease === undefined ? false : true;
	return (
		foundArtist ?
			<div className="container">
				<div className="row main-header">
					<div className="col">
						<h1 className="header-subpage">{currRelease.name}</h1>
					</div>
				</div>
			</div>
			:
			<div className="container">
				<div className="row main-header">
					<div className="col">
						<h1 className="header-subpage">could not locate release page</h1>
					</div>
				</div>
			</div>
	)
}
