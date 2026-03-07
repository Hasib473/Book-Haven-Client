import React, { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router";
import { FadeLoader } from "react-spinners";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const AllBooks = () => {
  const bookdata = useLoaderData();
  const [books, setBooks] = useState([]);
  const [sortOrder, setSortOrder] = useState("high");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBooks(bookdata);
      setLoading(false);
    }, 800);
  }, [bookdata]);

  const handleSortByRating = () => {
    const newOrder = sortOrder === "high" ? "low" : "high";

    const sortedBooks = [...books].sort((a, b) => {
      return newOrder === "high" ? b.rating - a.rating : a.rating - b.rating;
    });

    setBooks(sortedBooks);
    setSortOrder(newOrder);
  };

  // Loading Spinner
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <FadeLoader color="#7c3aed" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-center text-4xl font-extrabold mb-8 text-gray-900 dark:text-white">
        All Books
      </h1>

      {/* Sort Button */}
      <div className="flex justify-end mb-5">
        <button
          onClick={handleSortByRating}
          className="bg-violet-600 text-white px-5 py-2 rounded-lg hover:bg-violet-700 transition hover:scale-105"
        >
          Sort by Rating: {sortOrder === "high" ? "High → Low" : "Low → High"}
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <table className="min-w-full text-left">
          <thead className="bg-violet-600 text-white">
            <tr>
              <th className="px-6 py-3">Book Name</th>
              <th className="px-6 py-3">Author</th>
              <th className="px-6 py-3">Genre</th>
              <th className="px-6 py-3">Rating</th>
              <th className="px-6 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody className="text-gray-700 dark:text-gray-200">
            {books.map((book) => (
              <tr
                key={book._id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                <td className="px-6 py-4 font-semibold">{book.title}</td>
                <td className="px-6 py-4">{book.author}</td>
                <td className="px-6 py-4">
                  <span className="bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300 px-3 py-1 rounded-full text-sm">
                    {book.genre}
                  </span>
                </td>
                <td className="px-6 py-4 font-semibold text-yellow-500">
                  ⭐ {book.rating}/5
                </td>
                <td className="px-6 py-4 text-center">
                  {/* View Details with Tooltip */}
                  <Link
                    id={`view-${book._id}`}
                    to={`/book-details/${book._id}`}
                    className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition hover:scale-105"
                  >
                    View Details
                  </Link>
                  <Tooltip
                    anchorId={`view-${book._id}`}
                    content="Click to view book details"
                    place="top"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBooks;