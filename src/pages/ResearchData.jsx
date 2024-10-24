import React, { useEffect } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import "aos/dist/aos.css";
import AOS from "aos";
import "./ResearchData.css";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	ArcElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	ArcElement,
	Title,
	Tooltip,
	Legend
);

const ResearchData = () => {
	// Initialize AOS for animations
	useEffect(() => {
		AOS.init();
		return () => {
			AOS.refresh();
		};
	}, []);

	// Healthcare-related data for interactive charts
	const barChartData = {
		labels: [
			"Maternal Health",
			"Vaccinations",
			"Checkups",
			"Telemedicine",
			"Emergency Care",
		],
		datasets: [
			{
				label: "Healthcare Services Provided",
				data: [500, 300, 700, 200, 150],
				backgroundColor: [
					"#007bff",
					"#28a745",
					"#ffc107",
					"#dc3545",
					"#17a2b8",
				],
				hoverBackgroundColor: [
					"#0056b3",
					"#218838",
					"#d39e00",
					"#bd2130",
					"#138496",
				],
				borderWidth: 2,
				borderColor: "#fff",
			},
		],
	};

	const lineChartData = {
		labels: ["January", "February", "March", "April", "May", "June"],
		datasets: [
			{
				label: "Monthly Clinic Visits",
				data: [200, 400, 600, 800, 1000, 1200],
				fill: true,
				backgroundColor: "rgba(40,167,69,0.2)",
				borderColor: "#28a745",
				tension: 0.3,
				borderWidth: 3,
				pointRadius: 5,
				pointBackgroundColor: "#fff",
			},
		],
	};

	const pieChartData = {
		labels: ["Satisfied", "Neutral", "Unsatisfied"],
		datasets: [
			{
				label: "User Satisfaction Survey",
				data: [80, 19.99, 0.01], // Adjusted for healthcare user satisfaction
				backgroundColor: ["#28a745", "#ffc107", "#dc3545"],
				hoverOffset: 10,
				borderColor: "#fff",
				borderWidth: 3,
			},
		],
	};

	// Chart options for better accessibility and interactions
	const barChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: "Overview of Healthcare Services Provided",
			},
		},
	};

	const lineChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			tooltip: {
				mode: "index",
				intersect: false,
			},
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: "Growth of Monthly Clinic Visits",
			},
		},
		scales: {
			x: {
				title: {
					display: true,
					text: "Months",
				},
			},
			y: {
				title: {
					display: true,
					text: "Number of Visits",
				},
			},
		},
	};

	const pieChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: "bottom",
			},
			title: {
				display: true,
				text: "Healthcare User Satisfaction Breakdown",
			},
		},
	};

	return (
		<div className="research-data-page">
			<header className="research-header">
				<h1 data-aos="fade-up" className="page-title">
					Interactive Research Findings
				</h1>
				<p data-aos="fade-up" data-aos-delay="200" className="page-subtitle">
					Explore insights from our healthcare research, visualized through
					dynamic charts showcasing healthcare service distribution and user
					satisfaction in rural Ethiopia.
				</p>
			</header>

			<section className="charts-section">
				<div
					className="chart-container"
					data-aos="zoom-in"
					data-aos-delay="100"
				>
					<h2>Healthcare Services Provided</h2>
					<Bar
						data={barChartData}
						options={barChartOptions}
						aria-label="Bar chart representing healthcare services provided"
					/>
				</div>

				<div
					className="chart-container"
					data-aos="zoom-in"
					data-aos-delay="200"
				>
					<h2>Monthly Clinic Visits</h2>
					<Line
						data={lineChartData}
						options={lineChartOptions}
						aria-label="Line chart showing the growth of monthly clinic visits"
					/>
				</div>

				<div
					className="chart-container"
					data-aos="zoom-in"
					data-aos-delay="300"
				>
					<h2>User Satisfaction</h2>
					<Pie
						data={pieChartData}
						options={pieChartOptions}
						aria-label="Pie chart displaying user satisfaction survey results"
					/>
				</div>
			</section>

			<div className="data-analysis" data-aos="fade-up" data-aos-delay="400">
				<h2>Research Insights & Analysis</h2>
				<p>
					<strong>Maternal Health:</strong> Represents 500 services provided,
					critical for improving maternal and child health in rural areas.
				</p>
				<p>
					<strong>Vaccinations:</strong> 300 vaccinations administered, ensuring
					protection against preventable diseases.
				</p>
				<p>
					<strong>General Checkups:</strong> With 700 checkups, this remains the
					most demanded healthcare service.
				</p>
				<p>
					<strong>Telemedicine:</strong> 200 telemedicine consultations, proving
					technology’s vital role in reaching remote areas.
				</p>
				<p>
					<strong>Emergency Care:</strong> Emergency care accounts for 150
					services, focusing on rapid response and treatment.
				</p>
				<p>
					User satisfaction is at a high level, with only 0.01% expressing
					dissatisfaction, reflecting the success of our healthcare initiative.
				</p>
			</div>
		</div>
	);
};

export default ResearchData;
