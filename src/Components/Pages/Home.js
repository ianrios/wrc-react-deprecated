import React from 'react';
import "./Home.scss"

export default function Home() {
	const ran = Math.floor(Math.random() * (Math.floor(21) - Math.ceil(1))) + Math.ceil(1);
	const source = "/images/landscapes/" + ran + ".jpg";
	return (
		<React.Fragment>
			<div className="row main-header">
				<div className="col">
					<h1 className="header-subpage">WHY? Record Company</h1>
				</div>
			</div>
			<div className="row main-body">
				<div className="col-6 image-wrapper">
					<img className="home-image" alt="random" src={source} />
				</div>
				<div className="col-6">
					<p className="main-page-p">
						WHY? Record Company (further stylized as WRC) is a home for audio, visual, and technological creatives.
						Housing over 200 songs and over 50 releases bound to no genre, WRC is proud to foster musicians grow a fanbase over the many years.
						Although founded in 2019, the idea for WHY Records is not new; label owners whythough? and dyl_pykl had speculated on hosting their own music independently for quite some time (since around 2016) and since then, have recruited many other like minded individuals.
						The first threads of the label were formed in college and was originally named "PULSE Artist Collective", yet being in college meant a specific branding and professionalism, hence the switch to WRC.
						WRC was created for our music to have a home, without the stress or uncertainty of traditional record label methods.
						We do everything in house, from writing, recording, producing, mixing, mastering, designing artwork, planning promotion, distributing, and more.
					</p>
				</div>
			</div>
		</React.Fragment>
	)
}
