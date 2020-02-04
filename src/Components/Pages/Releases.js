import React, { useState } from 'react';
import releaseData from "../../constants/releaseData.json";
import artistData from "../../constants/artistData.json";
import './Releases.scss';



export default function Releases() {

	const [filterArtists, setFilterArtists] = useState(0);
	const releaseFilter = [
		"All",
		"WRC",
		"CYCLE",
		"Blue Label",
		"Other"
	].map((item, idx) => {
		return (
			<p
				className="filter-sidebar"
				key={idx}
				onClick={() => setFilterArtists(idx)}
			>
				{item}
			</p>
		)
	});


	let artistsObj = {};
	const ReleaseMap = releaseData
		.sort((a, b) => (a.release_date > b.release_date) ? -1 : ((a.release_date < b.release_date) ? 1 : 0))
		.filter(i => {
			if (filterArtists === 0) {
				return i
			}
			else if (filterArtists === 1) {
				return i.label_number.slice(0, 3) === "WHY"
			}
			else if (filterArtists === 2) {
				return "cycle_label_number" in i
			}
			else if (filterArtists === 3) {
				return "blue_label_number" in i
			}
			else if (filterArtists === 4) {
				return i.label_number.slice(0, 3) !== "WHY"
			}
		})
		.map((item, idx) => {
			const currArtist = artistData.filter(c => item.primary_artist_id === c.id)[0].name;
			if (currArtist in artistsObj) {

				artistsObj[currArtist]++;
			}
			else {
				artistsObj[currArtist] = 1;
			}
			const color = Math.floor(Math.random() * (Math.floor(12) - Math.ceil(1))) + Math.ceil(1);
			return (
				<div key={idx} className="text-center mb-last-child">
					<div className="release-image-centered-hover-text">
						<h2 className="release_name">{item.name}</h2>
						<h3 className="artist_name_release">{currArtist}</h3>
						<p>{item.release_date.split("T")[0]}</p>
						<h6 className="release_id">{item.label_number}</h6>
					</div>
					<img className={`img-fluid release-image release-image-color-${color}`} src={item.album_art} alt={item.name} />
					<h2 className="release_name">{item.name}</h2>
					<h3 className="artist_name_release">{currArtist}</h3>
					<h6 className="release_id">{item.label_number}</h6>
				</div>
			)
		});
	const filteredArtists = Object.keys(artistsObj)
		.sort((a, b) => artistsObj[b] - artistsObj[a])
		.map((item, idx) => {
			return (
				<p
					className="filtered-artists"
					key={idx}
				>
					{item} - {artistsObj[item]}
				</p>
			)
		});
	return (
		<React.Fragment>
			<div className="container lock-scroll">
				<div className="row release-image-row">
					<div className="col sidebar text-left" >
						<div className="d-none d-lg-block desktop-filter">
							<h2>Artists</h2>
							{filteredArtists}
						</div>
					</div>
					<div className="col-lg-6 col-md-8 col-sm-10 mx-auto unlock-scroll releases-list">
						<h1 className="header-subpage">Releases</h1>
						{ReleaseMap}
					</div>
					<div className="col sidebar text-right" >
						<div className="d-none d-lg-block desktop-filter">
							<h2>Filter</h2>
							{releaseFilter}
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
