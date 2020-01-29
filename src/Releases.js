import React from 'react'
import data from "./constants/releaseData.json";
import './Releases.scss';

export default function Releases() {
	const ReleaseMap = data.map((item, idx) => {
		return (
			<div key={idx} className="row release-image-row">
				<div class="col" />
				<div className="col-lg-6 col-md-8 col-sm-10 mx-auto">
					<div className="text-center">
						<img className="img-fluid" src={"images/releases/" + item.album_artwork} />
						<span className="">{item.name}</span>
						<span className="">{item.release_date}</span>
					</div>
				</div>
				<div class="col" />
			</div>
		)
	})
	return (
		<div className="container">
			<h1>Releases</h1>
			{ReleaseMap}
		</div>
	)
}
