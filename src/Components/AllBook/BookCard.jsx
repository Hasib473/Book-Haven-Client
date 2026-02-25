import React from "react";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  const { title, author, genre, rating, summary, coverImage } = book;

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 ">
      
      {/* Cover Image */}
      <img
        src={coverImage}
        alt={title}
        className="h-50 w-full object-cover"
      />

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-gray-800 mb-1">
          {title}
        </h2>

        <p className="text-sm text-gray-500 mb-2">
          by {author}
        </p>

        <div className="flex items-center justify-between mb-3">
          <span className="bg-blue-100 text-violet-600 text-xs px-3 py-1 rounded-full">
            {genre}
          </span>

          <span className="text-yellow-500 font-semibold">
            ⭐ {rating}/5
          </span>
        </div>

        <p className="text-gray-600 text-sm flex-grow">
          {summary?.length > 100
            ? summary.slice(0, 100) + "..."
            : summary}
        </p>

        <Link to={`/book-details/${book._id}`} className="mt-4 text-center bg-violet-600 cursor-pointer text-white py-2 rounded-lg hover:bg-blue-700 transition">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BookCard;