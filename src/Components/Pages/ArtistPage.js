import React from 'react'
import { useLocation } from 'react-router-dom';
import releaseData from "../../constants/releaseData.json";
import artistData from "../../constants/artistData.json";
import "./ArtistPage.scss";

export default function ArtistPage() {
	const locationObj = useLocation();
	const location = locationObj.pathname.split("/")[2];
	const currArtist = artistData.find(i => i.local_path === location);
	const foundArtist = currArtist === undefined ? false : true;

	const mappedPTag = (props, className) => {
		return (
			props.map((item, idx) => {
				return (
					<p
						key={idx}
						className={className}
					>
						{item}
					</p>
				)
			})
		)
	}
	const mappedImgTag = (props) => {
		console.log(props)
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
					<h1 className="header-subpage">{foundArtist ? currArtist.name : "could not locate artist page"}</h1>
				</div>
			</div>
			{
				foundArtist ?
					<React.Fragment>
						<div className="row main-body">
							<div className="col-6">
								<img className="artist-page-image img-fluid" alt={currArtist.name} src={currArtist.profile_pic} />
							</div>
							<div className="col-6">
								<p className="">
									{currArtist.short_description}
								</p>
								{/* {mappedPTag(currArtist.roles)} */}
								{mappedPTag(currArtist.body_paragraphs, "artist-bio-paragraphs")}
								<div className="row">
									<div className="col-md-6">
										Social Platforms
										<div>
											{mappedATag(currArtist.social_platforms)}
										</div>
									</div>
									<div className="col-md-6">
										Music Platforms
									<div>
											{mappedATag(currArtist.music_platforms)}
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<h5 className="h5-location-artist-page">{currArtist.location.city}, {currArtist.location.country}</h5>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<a className="email-link" href={`mailto:${currArtist.email}?Subject=Hello%20${currArtist.name}`}>{currArtist.email}</a>
									</div>
								</div>
							</div>
						</div>
						<div className="row artist-page-releases">
							{mappedImgTag(releaseData.filter(i => i.primary_artist_id === currArtist.id))}
						</div>

					</React.Fragment>
					:
					null
			}
		</React.Fragment>

	)
}
