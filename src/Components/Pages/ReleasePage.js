import React from 'react'
import { useLocation } from 'react-router-dom';
import releaseData from "../../constants/releaseData.json";
import artistData from "../../constants/artistData.json";
import "./ReleasePage.scss"

export default function ReleasePage() {
	const locationObj = useLocation();
	const location = locationObj.pathname.split("/")[2];
	const currRelease = releaseData.find(i => i.local_path.toLowerCase() === location.toLowerCase());
	console.log(currRelease)
	const foundRelease = currRelease === undefined ? false : true;

	const artistObj = {
		"primaryArtist": foundRelease ? artistData.find(i => i.id === currRelease.primary_artist_id) : "not found",
		"secondaryArtists": [],
		"remixArtists": []
	}
	//artistData.filter(i => i.id === currRelease.secondary_artist_ids),

	const mappedPTag = (props, className) => {

		return (
			props.map((item, idx) => {
				return (
					<p
						key={idx}
						className={`questrial text-left ${className}`}
					>
						{item}
					</p>
				)
			})
		)
	}

	const mappedATag = (props) => {
		const keys = Object.keys(props);
		return (
			keys.map((item, idx) => {
				return (
					<React.Fragment
						key={idx}
					>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href={props[item]}>
							{item}
						</a>
						{
							idx < keys.length - 1 ? " - " : null
						}
					</React.Fragment>

				)
			})
		)
	}

	return (
		<React.Fragment>
			<div className="row main-header">
				<div className="col">
					<h1 className="header-sub-page">{foundRelease ? currRelease.name : "could not locate release page"}</h1>
				</div>
			</div>
			{
				foundRelease ?
					<React.Fragment>
						<div className="row main-body">
							<div className="col-6">
								<img className="img-fluid" src={`${currRelease.album_art}`} alt={`${currRelease.name} Album Art`} />
							</div>
							<div className="col-6">
								<h1>
									{artistObj.primaryArtist.name}
								</h1>
								<p>
									{currRelease.short_description}
								</p>
								<div className="text-border">
									{mappedPTag(currRelease.release_bio, "release-bio-paragraphs")}
								</div>
								<p>
									Primary Genre:  {currRelease.genre}
								</p>
								<p>
									Release Date: {currRelease.release_date.split("T")[0]}

								</p>
								<div className="row">
									<div className="col">
										Music Platforms
									<div>
											{mappedATag(currRelease.links)}
										</div>
									</div>
								</div>
							</div>
						</div>
					</React.Fragment>
					:
					null
			}
		</React.Fragment >
	)
}
