import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import releaseData from "../../constants/releaseData.json";
import artistData from "../../constants/artistData.json";
import "./ReleasePage.scss"

export default function ReleasePage() {
	const locationObj = useLocation();
	const location = locationObj.pathname.split("/")[2];
	const currRelease = releaseData.find(i => i.local_path.toLowerCase() === location.toLowerCase());
	const foundRelease = currRelease === undefined ? false : true;

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
									{
										currRelease.primary_artist_ids.map(
											(i, j) => {
												const currArtist = artistData.find(a => a.id === i);
												return (
													<React.Fragment key={j}>
														<Link to={`/artist/${currArtist.local_path}`} className="smaller-font-temp">
															{currArtist.name}
														</Link>
														<span className="white-text">
															{`${j < currRelease.primary_artist_ids.length - 1 ? ", " : ""}`}
														</span>
													</React.Fragment>
												)
											}
										)
									}
								</h1>
								<h2>
									{
										currRelease.secondary_artist_ids.map(
											(i, j) => {
												const currArtist = artistData.find(a => a.id === i);
												return (
													<React.Fragment key={j}>
														<Link to={`/artist/${currArtist.local_path}`} className="smaller-font-temp">
															{currArtist.name}
														</Link>
														<span className="white-text">
															{`${j < currRelease.secondary_artist_ids.length - 1 ? ", " : ""}`}
														</span>
													</React.Fragment>
												)
											}
										)
									}
								</h2>
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
