import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-container">
				{/* About Section */}
				<div className="footer-section about">
					<h2 className="footer-title">About Us</h2>
					<p className="footer-text">
						At HealthGrid, we are committed to transforming healthcare access
						for rural Ethiopia. Through mobile health clinics and innovative
						solutions, we ensure that remote communities receive the care they
						need to thrive.
					</p>
				</div>

				{/* Quick Links Section */}
				<div className="footer-section links">
					<h2 className="footer-title">Quick Links</h2>
					<ul className="footer-links">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About Us</Link>
						</li>
						<li>
							<Link to="/services">Our Services</Link>
						</li>
						<li>
							<Link to="/impact">Impact</Link>
						</li>
						<li>
							<Link to="/contact">Contact Us</Link>
						</li>
						<li>
							<Link to="/partners">Our Partners</Link>
						</li>
					</ul>
				</div>

				{/* Social Media Section */}
				<div className="footer-section social">
					<h2 className="footer-title">Follow Us</h2>
					<div className="social-icons">
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-facebook-f"></i>
						</a>
						<a
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-twitter"></i>
						</a>
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-instagram"></i>
						</a>
						<a
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-linkedin-in"></i>
						</a>
					</div>
				</div>

				{/* Newsletter Section */}
				<div className="footer-section newsletter">
					<h2 className="footer-title">Newsletter</h2>
					<p className="footer-text">
						Stay informed about our healthcare initiatives and the impact we are
						making across rural Ethiopia. Subscribe to our newsletter!
					</p>
					<form className="newsletter-form">
						<input
							type="email"
							className="newsletter-input"
							placeholder="Your Email"
						/>
						<button type="submit" className="newsletter-btn">
							Subscribe
						</button>
					</form>
				</div>
			</div>

			{/* Footer Bottom */}
			<div className="footer-bottom">
				<p>
					&copy; {new Date().getFullYear()} MedLink |{" "}
					<Link to="/privacy-policy">Privacy Policy</Link> | All Rights Reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
