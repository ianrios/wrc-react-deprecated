import React from 'react'
import data from "./constants/artistData.json";
import './Artists.scss';

export default function Artists() {
	const ArtistsMap = data.map((item, idx) => {
		return (
			<div key={idx} className="row artist-image-row">
				<div class="col" />
				<div className="col-lg-6 col-md-8 col-sm-10 mx-auto text-on-image">
					<div className="text-center">
						<img className="img-fluid" src={"images/artists/profiles/" + item.profile_pic} />
						<span className="centered-text">{item.name}</span>
					</div>
				</div>
				<div class="col" />
			</div>
		)
	})
	return (
		<div className="container">
			<h1>Artists</h1>
			{ArtistsMap}
		</div>
	)
}
