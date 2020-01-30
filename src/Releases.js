import React from 'react'
import releaseData from "./constants/releaseData.json";
import artistData from "./constants/artistData.json";
import './Releases.scss';

export default function Releases() {
	const ReleaseMap = releaseData.sort(
		(a, b) => (a.release_date > b.release_date) ? -1 : ((a.release_date < b.release_date) ? 1 : 0)
	).map((item, idx) => {
		return (
			<div key={idx} className="row release-image-row">
				<div className="col" />
				<div className="col-lg-6 col-md-8 col-sm-10 mx-auto">
					<div className="text-center">
						{/* <img className="img-fluid" src={item.album_artwork} alt={item.name} /> */}
						<h3 className="">{item.name}</h3>
						<h3 className="">{artistData.filter(c => item.primary_artist_id === c.id)[0].name}</h3>
						<h6 className="">{item.label_number}</h6>
					</div>
				</div>
				<div className="col" />
			</div>
		)
	})
	return (
		<div className="container">
			<h1 className="header-subpage">Releases</h1>
			{ReleaseMap}
		</div>
	)
}
