import React from "react";
import { Link } from "react-router";

const LatestBookCard = ({ book }) => {
  const { title, author, genre, rating, summary, coverImage } = book;

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col h-full border border-gray-100">

      {/* Cover Image */}
      <div className="relative overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="h-40 w-full object-cover transform group-hover:scale-110 transition duration-700 ease-out"
        />

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1 group-hover:text-violet-600 transition">
          {title}
        </h2>

        {/* Author */}
        <p className="text-xs text-gray-500 mb-2">
          by <span className="font-medium text-gray-700">{author}</span>
        </p>

        {/* Genre + Rating */}
        <div className="flex items-center justify-between mb-3">
          <span className="bg-violet-100 text-violet-600 text-[11px] px-2 py-1 rounded-full font-medium">
            {genre}
          </span>

          <span className="flex items-center gap-1 text-yellow-500 font-semibold text-xs">
            ⭐ {rating}/5
          </span>
        </div>

        {/* Summary */}
        <p className="text-gray-600 text-xs leading-relaxed flex-grow line-clamp-2">
          {summary}
        </p>

        {/* Button */}
        <Link
          to={`/book-details/${book._id}`}
          className="mt-4 text-center bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-md active:scale-95"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default LatestBookCard;