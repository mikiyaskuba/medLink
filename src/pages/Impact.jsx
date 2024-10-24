import React from "react";
import "./Impact.css";

const Impact = () => {
	return (
		<div className="impact-page">
			{/* Hero Section */}
			<section className="impact-hero">
				<div className="hero-content">
					<h1 className="hero-title">Transforming Healthcare Access</h1>
					<p className="hero-text">
						Our mission is to improve the lives of rural communities through
						accessible, affordable, and innovative healthcare solutions.
					</p>
				</div>
			</section>

			{/* Impact Metrics */}
			<section className="impact-metrics">
				<h2>Impact by the Numbers</h2>
				<div className="metrics-container">
					<div className="metric">
						<h3>100K+</h3>
						<p>Patients Treated</p>
					</div>
					<div className="metric">
						<h3>40%</h3>
						<p>Improvement in Healthcare Access</p>
					</div>
					<div className="metric">
						<h3>1,200+</h3>
						<p>Community Health Workers Trained</p>
					</div>
					<div className="metric">
						<h3>25+</h3>
						<p>Mobile Health Clinics</p>
					</div>
				</div>
			</section>

			{/* Stories of Change */}
			<section className="impact-stories">
				<h2>Stories of Change</h2>
				<div className="story-cards">
					<div className="story-card">
						<h3>Empowering Rural Communities</h3>
						<p>
							"Since the mobile clinics arrived in our village, I’ve been able
							to access the care I need. I no longer have to travel miles to see
							a doctor."
						</p>
						<p>- Amina, Community Member</p>
					</div>
					<div className="story-card">
						<h3>Healthier Families, Brighter Futures</h3>
						<p>
							"The health services provided to us have drastically improved my
							children's health. They now receive regular checkups and
							vaccinations."
						</p>
						<p>- Tesfaye, Father of Three</p>
					</div>
				</div>
			</section>

			{/* Environmental Sustainability */}
			<section className="impact-sustainability">
				<h2>Promoting Health and Sustainability</h2>
				<p>
					Our healthcare initiatives not only improve access to medical services
					but also promote sustainable practices, such as reducing the need for
					long-distance travel to health centers and encouraging community-led
					preventative care.
				</p>
			</section>

			{/* Call to Action */}
			<section className="impact-cta">
				<h2>Join Us in Making an Impact</h2>
				<p>
					Partner with us to extend our healthcare services to more rural
					communities. Together, we can improve health outcomes and build a
					healthier future for all.
				</p>
				<button className="cta-button">Support Us</button>
			</section>
		</div>
	);
};

export default Impact;
