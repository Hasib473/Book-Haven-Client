import React from "react";
import { Link } from "react-router";

const LatestBookCard = ({ book }) => {
  const { title, author, genre, rating, summary, coverImage } = book;

  return (
    <div className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full">

      {/* Cover Image */}
      <div className="overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="h-50 w-full object-cover transform group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-1 line-clamp-1">
          {title}
        </h2>

        {/* Author */}
        <p className="text-sm text-gray-500 mb-3">
          by <span className="font-medium text-gray-700">{author}</span>
        </p>

        {/* Genre + Rating */}
        <div className="flex items-center justify-between mb-4">
          <span className="bg-violet-100 text-violet-600 text-xs px-3 py-1 rounded-full font-medium">
            {genre}
          </span>

          <span className="flex items-center gap-1 text-yellow-500 font-semibold text-sm">
            ⭐ {rating}/5
          </span>
        </div>

        {/* Summary */}
        <p className="text-gray-600 text-sm leading-relaxed flex-grow line-clamp-3">
          {summary}
        </p>

        {/* Button */}
        <Link
          to={`/book-details/${book._id}`}
          className="mt-6 text-center bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 rounded-xl font-medium tracking-wide hover:from-indigo-600 hover:to-violet-600 transition-all duration-300"
        >
          View Details
        </Link>

      </div>
    </div>
  );
};

export default LatestBookCard;