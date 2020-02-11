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
		<div className="container">
			<div className="row main-header">
				<div className="col">
					<h1 className="header-subpage">{foundArtist ? currArtist.name : "could not locate artist page"}</h1>
				</div>
			</div>
			{
				foundArtist ?
					<div className="row">
						<div className="col">
							artist info goes here
						</div>
					</div>
					:
					null
			}
		</div>
	)
}
