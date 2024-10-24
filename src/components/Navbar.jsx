import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="navbar navbar-expand-md fixed-top bg-primary-custom">
			<div className="container">
				<Link className="navbar-brand" to="/">
					MedLink
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					onClick={() => setIsOpen(!isOpen)}
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/about">
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/solution">
								Our Solution
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/research-data">
								Research Data
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/impact">
								Impact
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/contact">
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./nav.css";

// const Navbar = () => {
// 	const [isOpen, setIsOpen] = useState(false);

// 	return (
// 		<nav className="navbar navbar-expand-md fixed-top bg-primary-custom">
// 			<div className="container">
// 				<Link className="navbar-brand" to="/">
// 					VetLink
// 				</Link>
// 				<button
// 					className="navbar-toggler"
// 					type="button"
// 					onClick={() => setIsOpen(!isOpen)}
// 				>
// 					{/* Toggle button icon change based on state */}
// 					<span className="navbar-toggler-icon">
// 						{isOpen ? "✕" : "☰"}
// 					</span>
// 				</button>
// 				<div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
// 					<ul className="navbar-nav ms-auto">
// 						<li className="nav-item">
// 							<Link className="nav-link" to="/">
// 								Home
// 							</Link>
// 						</li>
// 						<li className="nav-item dropdown">
// 							<Link className="nav-link dropdown-toggle" to="/solution" role="button" data-bs-toggle="dropdown" aria-expanded="false">
// 								Our Solution
// 							</Link>
// 							<ul className="dropdown-menu">
// 								<li>
// 									<Link className="dropdown-item" to="/solution-overview">
// 										Solution Overview
// 									</Link>
// 								</li>
// 								<li>
// 									<Link className="dropdown-item" to="/success-stories">
// 										Success Stories
// 									</Link>
// 								</li>
// 							</ul>
// 						</li>
// 						<li className="nav-item">
// 							<Link className="nav-link" to="/research-data">
// 								Research Data
// 							</Link>
// 						</li>
// 						<li className="nav-item">
// 							<Link className="nav-link" to="/impact">
// 								Impact
// 							</Link>
// 						</li>
// 						<li className="nav-item">
// 							<Link className="nav-link" to="/contact">
// 								Contact
// 							</Link>
// 						</li>
// 						{/* Login/Sign-up Button */}
// 						<li className="nav-item">
// 							<Link className="nav-link btn btn-outline-light" to="/login">
// 								Login / Sign-up
// 							</Link>
// 						</li>
// 					</ul>
// 				</div>
// 			</div>
// 		</nav>
// 	);
// };

// export default Navbar;
