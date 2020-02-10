import React, { useState } from 'react';
import { Link } from "react-router-dom";
import releaseData from "../../constants/releaseData.json";
import artistData from "../../constants/artistData.json";
import './Releases.scss';



export default function Releases() {

	const [filterArtists, setFilterArtists] = useState(0);
	const typeSwitch = (prop) => {
		switch (prop) {
			case "All":
				return "all-label";
			case "WRC":
				return "wrc-label";
			case "Blue Label":
				return "blue-label";
			case "CYCLE":
				return "cycle-label";
			case "MIX":
				return "mix-label";
			case "RECORDINGS":
				return "sample-label";
			case "Other":
				return "other-label";
			default:
				return null;
		}
	}
	const releaseFilter = [
		"WRC",
		"Blue Label",
		"CYCLE",
		"MIX",
		"RECORDINGS",
		"Independent",
		"All"
	].map((item, idx) => {
		return (
			<p
				className={`filter-sidebar ${typeSwitch(item)}`}
				key={idx}
				onClick={() => setFilterArtists(idx)}
			>
				{item}
			</p>
		)
	});
	const secondaryMap = (props) => {
		const secondaryArtists = props.filter(c => c === artistData.id);
		// console.log(secondaryArtists)
		const mappedSecondary = secondaryArtists.map(i => <p>{i}</p>)
		return (<div className="release-secondary-artists" >{mappedSecondary}</div>);
	};
	const remixMap = (props) => {
		const remixArtists = props.filter(c => c === artistData.id);
		// console.log(remixArtists)
		const mappedRemix = remixArtists.map(i => <p>{i}</p>)
		return (<div className="release-remixers">{mappedRemix}</div>);
	};
	// const linkMap = (props) => {
	// 	// console.log(props)
	// 	return (<div className="release-links">{props.map(l => <p> {l}</p>)}</div>);
	// };
	let artistsObj = {};
	const ReleaseMap = releaseData
		.sort((a, b) => (a.release_date > b.release_date) ? -1 : ((a.release_date < b.release_date) ? 1 : 0))
		.filter(i => {
			if (filterArtists === 6) {
				return i
			}
			else if (filterArtists === 0) {
				return i.label_number.slice(0, 3) === "WHY"
			}
			else if (filterArtists === 1) {
				return "blue_label_number" in i
			}
			else if (filterArtists === 2) {
				return "cycle_label_number" in i
			}
			else if (filterArtists === 3) {
				return "mix_label_number" in i
			}
			else if (filterArtists === 4) {
				return "recordings_label_number" in i
			}
			else if (filterArtists === 5) {
				return i.label_number.slice(0, 3) !== "WHY"
			}
			return null;
		})
		.map((item, idx) => {
			const currArtist = artistData.filter(c => item.primary_artist_id === c.id)[0];
			const currArtistName = currArtist.name;
			if (currArtistName in artistsObj) {

				artistsObj[currArtistName]++;
			}
			else {
				artistsObj[currArtistName] = 1;
			}
			const color = Math.floor(Math.random() * (Math.floor(12) - Math.ceil(1))) + Math.ceil(1);
			return (
				<div key={idx} className="text-center mb-last-child">
					<div className="image-hover-release-info-container" >
						<img className={`img-fluid release-image release-image-color-${color}`} src={item.album_art} alt={item.name} />
						<div className="release-image-centered-hover-text">
							<h2 className="release-name">{item.name}</h2>
							<h3 className="artist-name-release">{currArtistName}</h3>
							<p>{item.release_date.split("T")[0]}</p>
							{item.secondary_artist_ids ? secondaryMap(item.secondary_artist_ids) : null}
							{item.remix_artist_ids ? remixMap(item.remix_artist_ids) : null}
							{/* {item.links ? linkMap(item.links) : null} */}
							<h6 className="release_id">{item.label_number}</h6>
						</div>
					</div>
					<h2 className="release-name">
						<Link to={`/release/${item.local_path}`} >
							{item.name}
						</Link>
					</h2>
					<h3 className="artist-name-release">
						<Link to={`/artist/${currArtist.local_path}`} >
							{currArtistName}
						</Link>
					</h3>
					<h6 className="release-id">{item.label_number}</h6>
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
