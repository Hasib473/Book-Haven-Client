import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import AuthContext from "../Context/AuthContext";
import { FadeLoader } from "react-spinners";

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  const { id } = useParams();

  useEffect(() => {

    fetch(`http://localhost:3000/allbooks/${id}`, {
      headers: {
        authorization: `Bearer ${user?.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setBook(data);
          setLoading(false);
        }, 800); 
      });
  }, [id, user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <FadeLoader color="#7c3aed" />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">

        <div className="grid md:grid-cols-3">

          {/* Cover */}
          <div className="bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-8">
            <img
              src={book.coverImage}
              alt={book.title}
              className="rounded-2xl shadow-lg w-full max-w-xs object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Details */}
          <div className="md:col-span-2 p-10 flex flex-col justify-between">

            <div>
              {/* Title */}
              <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                {book.title}
              </h1>

              {/* Author */}
              <p className="text-gray-500 dark:text-gray-400 text-lg mb-6">
                by{" "}
                <span className="font-medium text-gray-700 dark:text-gray-200">
                  {book.author}
                </span>
              </p>

              {/* Badges */}
              <div className="flex items-center gap-4 mb-8">

                <span className="px-4 py-1 rounded-full bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-300 text-sm font-medium">
                  {book.genre}
                </span>

                <span className="px-4 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 text-sm font-medium">
                  ⭐ {book.rating} / 5
                </span>

              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>

              {/* Summary */}
              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
                  About This Book
                </h2>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {book.summary}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex gap-4">

              <button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:scale-105 hover:shadow-lg transition duration-300">
                Add to Library
              </button>

              <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                Share
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;