import React, { useEffect } from "react";
import CallToAction from "../components/CallToAction";
import "./Home.css";
import HeroTwo from "../assets/HeroTwo.webp";
import AltOne from "../assets/AltOne.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
	// Initialize AOS for animations inside the component
	useEffect(() => {
		AOS.init({ duration: 1500 });
	}, []);

	return (
		<div className="home-container">
			<header className="header-section" data-aos="fade-down">
				<h1 className="main-title">
					<span className="highlight">Revolutionizing</span> Healthcare in Rural
					Ethiopia
				</h1>
				<p className="subtitle">
					We bring critical healthcare services to the most remote areas of
					Ethiopia. Our innovative HealthGrid Ecosystem ensures that even the
					most underserved communities have access to life-saving medical care.
				</p>
				<a href="#mission" className="cta-button main-cta">
					Discover Our Mission
				</a>
			</header>

			<section className="hero-section" data-aos="zoom-in">
				<div className="hero-image">
					<img src={AltOne} alt="Mobile healthcare services in action" />
				</div>
				<div className="hero-text-content" data-aos="fade-left">
					<h2 className="hero-text">
						Bringing healthcare to the doorsteps of remote communities in real
						time.
					</h2>
					<p>
						We provide reliable, on-the-spot healthcare, reducing mortality
						rates and empowering communities to live healthier lives.
					</p>
				</div>
			</section>

			<section className="mission-section" id="mission">
				<div className="mission-text-content" data-aos="fade-right">
					<h2 className="section-title">Our Mission</h2>
					<p className="mission-text">
						Our mission is to ensure that every person in rural Ethiopia
						receives the care they need, when they need it most. Through our
						mobile healthcare solutions, we aim to transform health outcomes and
						foster sustainable development in these communities.
					</p>
				</div>
				<div className="mission-image" data-aos="fade-left">
					<img src={HeroTwo} alt="Healthcare mission in rural Ethiopia" />
				</div>
			</section>

			<section className="stats-section" data-aos="flip-up">
				<h2 className="stats-title">Impact in Numbers</h2>
				<div className="stats-grid">
					<div className="stat-item">
						<h3 className="stat-value">100,000+</h3>
						<p className="stat-label">Patients Reached</p>
					</div>
					<div className="stat-item">
						<h3 className="stat-value">85%</h3>
						<p className="stat-label">Reduced Mortality Rate</p>
					</div>
					<div className="stat-item">
						<h3 className="stat-value">98%</h3>
						<p className="stat-label">Satisfied Communities</p>
					</div>
					<div className="stat-item">
						<h3 className="stat-value">200+</h3>
						<p className="stat-label">Mobile Health Units Deployed</p>
					</div>
				</div>
			</section>

			<CallToAction />

			<section className="cta-section" data-aos="zoom-in">
				<h2 className="cta-title">Join Us in Transforming Rural Healthcare!</h2>
				<p className="cta-text">
					We invite NGOs, stakeholders, and compassionate individuals to
					collaborate with us in providing essential healthcare services to
					rural Ethiopia. Together, we can save lives and build healthier, more
					resilient communities.
				</p>
				<a href="/contact" className="cta-button">
					Partner with Us
				</a>
			</section>
		</div>
	);
};

export default Home;