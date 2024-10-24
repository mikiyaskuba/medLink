import React from "react";
import "./Contact.css";

const Contact = () => {
	return (
		<div className="contact-container">
			<div className="contact-header">
				<h1 className="contact-title">Get in Touch with Us</h1>
				<p className="contact-subtitle">
					We’d love to hear from you! Whether you have a question about our
					services, need assistance, or just want to provide feedback, feel free
					to reach out.
				</p>
			</div>

			<div className="contact-content">
				<div className="contact-form">
					<h2 className="form-title">Send Us a Message</h2>
					<form>
						<div className="form-group">
							<label htmlFor="name">Your Name</label>
							<input type="text" id="name" placeholder="Enter your name" />
						</div>
						<div className="form-group">
							<label htmlFor="email">Your Email</label>
							<input type="email" id="email" placeholder="Enter your email" />
						</div>
						<div className="form-group">
							<label htmlFor="message">Your Message</label>
							<textarea
								id="message"
								rows="4"
								placeholder="Enter your message"
							></textarea>
						</div>
						<button type="submit" className="submit-btn">
							Send Message
						</button>
					</form>
				</div>

				<div className="contact-details">
					<h2 className="details-title">Our Contact Information</h2>
					<ul className="details-list">
						<li>
							<strong>Phone:</strong> +251933773934
						</li>
						<li>
							<strong>Email:</strong> info@Medlink.com
						</li>
						<li>
							<strong>Address:</strong> Addis Ababa, Ethiopia
						</li>
					</ul>

					<div className="map-container">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27988991976!2d-74.25986332665478!3d40.69767006436366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDM3JzUwLjMiTiA3NMKwMTUnMTIuOCJX!5e0!3m2!1sen!2sus!4v1615157304578!5m2!1sen!2sus"
							width="100%"
							height="300"
							style={{ border: "0" }}
							allowFullScreen=""
							aria-hidden="false"
							tabIndex="0"
							title="Location Map"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
