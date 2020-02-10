import React from 'react'
import { useLocation } from 'react-router-dom';
import releaseData from "../../constants/releaseData.json";
import artistData from "../../constants/artistData.json";

export default function ArtistPage() {
	const locationObj = useLocation();
	const location = locationObj.pathname.split("/")[2];
	const currArtist = artistData.find(i => i.local_path === location);
	const foundArtist = currArtist === undefined ? false : true;
	return (
		foundArtist ?
			<div className="container">
				<div className="row main-header">
					<div className="col">
						<h1 className="header-subpage">{currArtist.name}</h1>
					</div>
				</div>
			</div>
			:
			<div className="container">
				<div className="row main-header">
					<div className="col">
						<h1 className="header-subpage">could not locate artist page</h1>
					</div>
				</div>
			</div>
	)
}
