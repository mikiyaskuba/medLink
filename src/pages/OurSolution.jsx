import React from "react";
import "./OurSolution.css";
import mobileClinic from "../assets/mobileClinic.webp";
import mobtwo from "../assets/mobtwo.webp";
import tele from "../assets/tele.webp";

const OurSolution = () => {
	return (
		<div className="solution-container">
			<div className="solution-header">
				<h1 className="solution-title">Our Innovative Healthcare Solution</h1>
				<p className="solution-subtitle">
					Revolutionizing Healthcare Access in Rural Ethiopia
				</p>
			</div>

			<div className="solution-section">
				<div className="solution-text">
					<h2 className="section-title">How We’re Making a Difference</h2>
					<p>
						In rural Ethiopia, access to quality healthcare is often limited,
						leading to preventable illnesses and poor health outcomes.
						HealthGrid addresses this challenge by bringing essential medical
						services directly to underserved communities through mobile clinics
						and telemedicine. Our services ensure that people receive timely
						healthcare, regardless of location.
					</p>
				</div>
				<div className="solution-image">
					<img src={mobileClinic} alt="Mobile Healthcare Service in Action" />
				</div>
			</div>

			<div className="solution-section bg-light-yellow">
				<div className="solution-image">
					<img src={mobtwo} alt="Healthcare Delivery" />
				</div>
				<div className="solution-text">
					<h2 className="section-title">
						Comprehensive Medical Care Delivered to the Field
					</h2>
					<p>
						Our solution covers a wide range of healthcare services, from
						regular check-ups to emergency treatments, maternal health,
						vaccinations, and health education. By bringing healthcare directly
						to rural communities, we drastically reduce the time to care and
						improve health outcomes, fostering stronger, healthier communities.
					</p>
				</div>
			</div>

			<div className="solution-section">
				<div className="solution-text">
					<h2 className="section-title">Technology-Driven Healthcare</h2>
					<p>
						We utilize modern technology to extend our reach. Our digital
						platform allows rural residents to request medical consultations,
						report symptoms, and receive diagnoses via telemedicine. This helps
						bridge the gap between rural populations and healthcare providers,
						making communication fast and efficient, even in remote areas.
					</p>
				</div>
				<div className="solution-image">
					<img src={tele} alt="Telemedicine in Healthcare" />
				</div>
			</div>

			<div className="cta-section">
				<h2>Be Part of the Change!</h2>
				<p>
					Join us in our mission to transform healthcare for rural Ethiopia.
					Your support can help us reach more communities, improve health
					outcomes, and build a sustainable healthcare system for all.
				</p>
				<a href="/contact" className="cta-button">
					Contact Us
				</a>
			</div>
		</div>
	);
};

export default OurSolution;
