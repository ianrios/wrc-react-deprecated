import React from 'react'

export default function Footer() {
	return (
		<footer className="container py-5">
			<div className="row">
				<div className="col-12 col-md">
					<img src="favicon.ico" width="24" height="24" alt="" className="d-block mb-2" />
					{/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="d-block mb-2"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg> */}
					<small className="d-block mb-3 text-muted">© 2017-2018</small>
				</div>
				<div className="col-6 col-md">
					<h5>Features</h5>
					<ul className="list-unstyled text-small">
						<li><a className="text-muted" href="https://www.whyrecord.com">Cool stuff</a></li>
						<li><a className="text-muted" href="https://www.whyrecord.com">Random feature</a></li>
						<li><a className="text-muted" href="https://www.whyrecord.com">Team feature</a></li>
						<li><a className="text-muted" href="https://www.whyrecord.com">Stuff for developers</a></li>
						<li><a className="text-muted" href="https://www.whyrecord.com">Another one</a></li>
						<li><a className="text-muted" href="https://www.whyrecord.com">Last time</a></li>
					</ul>
				</div>
				<div className="col-6 col-md">
					<h5>Resources</h5>
					<ul className="list-unstyled text-small">
						<li><a className="text-muted" href="https://www.whyrecord.com">Resource</a></li>
						<li><a className="text-muted" href="https://www.whyrecord.com">Resource name</a></li>
						<li><a className="text-muted" href="https://www.whyrecord.com">Another resource</a></li>
						<li><a className="text-muted" href="https://www.whyrecord.com">Final resource</a></li>
					</ul>
				</div>
				<div className="col-6 col-md">
					<h5>Resources</h5>
					<ul className="list-unstyled text-small">
						<li><a className="text-muted" href="https://www.whyrecord.com">Business</a></li>
						<li><a className="text-muted" href="https://www.whyrecord.com">Education</a></li>
						<li><a className="text-muted" href="https://www.whyrecord.com">Government</a></li>
						<li><a className="text-muted" href="https://www.whyrecord.com">Gaming</a></li>
					</ul>
				</div>
				<div className="col-6 col-md">
					<h5>About</h5>
					<ul className="list-unstyled text-small">
						<li><a className="text-muted" href="https://www.whyrecord.com">Team</a></li>
						<li><a className="text-muted" href="https://www.whyrecord.com">Locations</a></li>
						<li><a className="text-muted" href="https://www.whyrecord.com">Privacy</a></li>
						<li><a className="text-muted" href="https://www.whyrecord.com">Terms</a></li>
					</ul>
				</div>
			</div>
		</footer>
	)
}
