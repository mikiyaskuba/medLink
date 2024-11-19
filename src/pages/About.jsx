import React from "react";
import "./About.css";

const About = () => {
	return (
		<div className="about-container">
			<div className="about-header">
				<h1>About Us</h1>
				<p>
					Welcome to MedLink, an innovative healthcare initiative bringing
					essential medical services to rural Ethiopia.
				</p>
			</div>

			<section className="about-content">
				<div className="about-section">
					<h2>Who We Are</h2>
					<p>
						MedLink is a dedicated team of healthcare professionals and
						innovators committed to improving access to healthcare in Ethiopia's
						remote areas. We recognize the challenges rural communities face in
						reaching hospitals and clinics, and we aim to bridge this gap
						through mobile health units and digital health solutions.
					</p>
				</div>

				<div className="about-section">
					<h2>What We Do</h2>
					<p>
						We connect rural communities to healthcare professionals through a
						network of mobile clinics and telemedicine services. MedLink
						delivers both virtual consultations and on-site medical care,
						ensuring that even the most underserved populations receive timely,
						life-saving care. We also focus on preventive care and health
						education to foster long-term well-being.
					</p>
				</div>

				<div className="about-section">
					<h2>Why It Matters</h2>
					<p>
						In rural Ethiopia, access to healthcare is often limited by
						distance, infrastructure, and resources. By bringing healthcare
						directly to these areas, MedLink helps reduce preventable
						diseases, improves maternal and child health, and strengthens local
						communities. We believe that every individual deserves quality
						healthcare, no matter where they live.
					</p>
				</div>
			</section>
		</div>
	);
};

export default About;
