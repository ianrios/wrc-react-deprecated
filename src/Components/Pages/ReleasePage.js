import React from 'react'
import { useLocation } from 'react-router-dom';
import releaseData from "../../constants/releaseData.json";
import artistData from "../../constants/artistData.json";

export default function ReleasePage() {
	const locationObj = useLocation();
	const location = locationObj.pathname.split("/")[2];
	const currRelease = releaseData.find(i => i.local_path.toLowerCase() === location.toLowerCase());
	const foundRelease = currRelease === undefined ? false : true;
	const artistObj = {
		"primaryArtist": artistData.find(i => i.id === currRelease.primary_artist_id),
		"secondaryArtists": [],
		"remixArtists": []
	}
	//artistData.filter(i => i.id === currRelease.secondary_artist_ids),

	return (
		<React.Fragment>
			<div className="row main-header">
				<div className="col">
					<h1 className="header-subpage">{foundRelease ? currRelease.name : "could not locate release page"}</h1>
				</div>
			</div>
			{
				foundRelease ?
					<div className="row">
						<div className="col">
							release info goes here
							<p>
								{artistObj.primaryArtist.name}
							</p>
						</div>
					</div>
					:
					null
			}
		</React.Fragment>
	)
}
