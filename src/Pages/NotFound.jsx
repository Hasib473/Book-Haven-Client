import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-center px-4">
      
      <h1 className="text-7xl font-bold text-violet-600">404</h1>

      <h2 className="text-3xl font-semibold mt-4 text-gray-800 dark:text-white">
        Page Not Found
      </h2>

      <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-md">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition"
      >
        Go Back Home
      </Link>

    </div>
  );
};

export default NotFound;