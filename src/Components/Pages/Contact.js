import React from "react";
import "./Contact.scss";
import Logo from "../Logo"

export default function Contact() {
	return (
		<div className="center-contact">
			<h1 className="header-subpage">Contact</h1>
			<p>you can send us an email at</p>
			<p>whyrecordcompany@gmail.com</p>
			<p>or visit us on social media</p>
			<ul className="remove-ul-styling">
				<li><a className="no-style-link" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/whyrecord">twitter</a></li>
				<li><a className="no-style-link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/whyrecordcompany">instagram</a></li>
				<li><a className="no-style-link" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/WHYRecordCompany">facebook</a></li>
			</ul>
		</div>
	)
}
