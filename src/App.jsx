import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import OurSolution from "./pages/OurSolution";
import Impact from "./pages/Impact";
import Contact from "./pages/Contact";
import ResearchData from "./pages/ResearchData"; 
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/solution" element={<OurSolution />} />
				<Route path="/impact" element={<Impact />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/research-data" element={<ResearchData/>} />
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
