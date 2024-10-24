import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="flex mt-5 flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
			<img
				src="https://via.placeholder.com/400x300?text=404+Not+Found"
				alt="404 Not Found"
				className="w-full max-w-md mb-8"
			/>
			<h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
			<p className="text-gray-600 mb-8">
				Sorry, the page you are looking for does not exist.
			</p>
			<Link
				to="/"
				className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors"
			>
				Go Back Home
			</Link>
		</div>
	);
};

export default NotFound;
