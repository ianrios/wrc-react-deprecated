import React from 'react'
import { Link } from 'react-router-dom';
import data from "../../constants/artistData.json";
import './Artists.scss';

export default function Artists() {
	const ArtistsMap = data.map((item, idx) => {
		return idx < 7 ?
			<div key={idx} className="row artist-image-row">
				<div className="col" />
				<div className="col-lg-6 col-md-8 col-sm-10 mx-auto text-on-image">
					<div className="text-center">
						<Link
							to={`/artist/${item.local_path}`}
						>

							<img className="img-fluid" src={item.profile_pic} alt={item.name} />
							<span className="centered-text">{item.name}</span>
						</Link>
					</div>
				</div>
				<div className="col" />
			</div>
			: null
	})
	return (
		<React.Fragment>
			<h1 className="header-subpage">Artists</h1>
			{ArtistsMap}
		</React.Fragment>
	)
}
