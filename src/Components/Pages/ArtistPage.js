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

	const mappedPTag = (props) => {
		return (
			props.map((item, idx) => {
				return (
					<p key={idx}>
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
					<p
						key={idx}
					>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href={props[item]}>
							{item}
						</a>
					</p>
				)
			})
		)
	}



	return (
		<div className="container">
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
								{/* {mappedPTag(currArtist.body_paragraphs)} */}
								Social Platforms
								{mappedATag(currArtist.social_platforms)}
								Music Platforms
								{mappedATag(currArtist.music_platforms)}
							</div>
						</div>
						<div className="row main-footer">
							<div className="col">
								<img src="/WRCLabel.png" className="logo float-right" alt="logo" />
							</div>
						</div>
					</React.Fragment>
					:
					null
			}
		</div>
	)
}
