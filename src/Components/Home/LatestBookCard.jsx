import React from "react";
import { Link } from "react-router";

const LatestBookCard = ({ book }) => {
  const { title, author, genre, rating, summary, coverImage } = book;

  return (
    <div className="group flex flex-col h-full overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

      {/* Cover Image */}
      <div className="relative overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="h-44 w-full object-cover transform group-hover:scale-110 transition duration-700 ease-out"
        />

        {/* Gradient Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1 line-clamp-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition">
          {title}
        </h2>

        {/* Author */}
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
          by <span className="font-medium text-gray-700 dark:text-gray-300">{author}</span>
        </p>

        {/* Genre + Rating */}
        <div className="flex items-center justify-between mb-3">

          <span className="bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-300 text-[11px] px-3 py-1 rounded-full font-medium tracking-wide">
            {genre}
          </span>

          <span className="flex items-center gap-1 text-yellow-500 font-semibold text-xs">
            ⭐ {rating}/5
          </span>

        </div>

        {/* Summary */}
        <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed flex-grow line-clamp-2">
          {summary}
        </p>

        {/* Button */}
        <Link
          to={`/book-details/${book._id}`}
          className="mt-5 text-center bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
        >
          View Details
        </Link>

      </div>
    </div>
  );
};

export default LatestBookCard;