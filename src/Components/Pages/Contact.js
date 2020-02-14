import React from "react";
import "./Contact.scss";

export default function Contact() {
	return (
		<div className="center-contact">
			<h1 className="header-sub-page">Contact</h1>
			<p>you can send us an email at</p>
			<p>
				<a href={`mailto:whyrecordcompany@gmail.com`}>whyrecordcompany@gmail.com</a>
			</p>
			<p>or visit us on social media</p>
			{/* <ul className="remove-ul-styling"> */}
			<p>
				<a className="no-style-link" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/whyrecord">twitter</a>{" - "}
				<a className="no-style-link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/whyrecordcompany">instagram</a>{" - "}
				<a className="no-style-link" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/WHYRecordCompany">facebook</a>
			</p>
			{/* </ul> */}
		</div>
	)
}
