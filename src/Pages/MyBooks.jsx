import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { NavLink } from "react-router";
import { toast } from "react-toastify";
import { FadeLoader } from "react-spinners";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import axios from "axios";

const MyBooks = () => {
  const { user } = useContext(AuthContext);
  const [myBooks, setMyBooks] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  if (!user?.email) return;

  const getMyBooks = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/mybooks?email=${user.email}`,
        {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`,
          },
        }
      );

      setTimeout(() => {
        setMyBooks(res.data);
        setLoading(false);
      }, 800);
    } catch (err) {
      console.error("Error fetching my books:", err);
      setLoading(false);
    }
  };

  getMyBooks();
}, [user?.email]);

  const handleDelete = (id) => {
  axios
  .delete(`http://localhost:3000/allbooks/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(() => {
    toast.success("Book deleted successfully");
    setMyBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
  })
  .catch((error) => console.error("Error deleting book:", error));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <FadeLoader color="#7c3aed" />
      </div>
    );
  }

  return (
    <section className="min-h-screen py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-10 text-center text-4xl font-bold text-gray-800 dark:text-white">
          My Added Books
        </h1>

        <div className="overflow-x-auto rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-violet-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">Title</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 text-gray-700 dark:text-gray-200">
              {myBooks.length > 0 ? (
                myBooks.map((book) => (
                  <tr key={book._id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                    <td className="px-6 py-4 text-sm font-medium">{book.title}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300 px-3 py-1 rounded-full text-xs">
                        {book.genre}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-center text-sm">
                      <div className="flex justify-center gap-3">
                        {/* View Button */}
                        <NavLink to={`/book-details/${book._id}`}>
                          <button
                            id={`view-${book._id}`}
                            className="rounded bg-violet-600 px-4 py-1 text-white hover:bg-indigo-700 transition hover:scale-105"
                          >
                            View
                          </button>
                          <Tooltip anchorId={`view-${book._id}`} content="View Book Details" place="top" />
                        </NavLink>

                        {/* Update Button */}
                        <NavLink to={`/update-book/${book._id}`}>
                          <button
                            id={`update-${book._id}`}
                            className="rounded bg-indigo-600 px-4 py-1 text-white hover:bg-indigo-700 transition hover:scale-105"
                          >
                            Update
                          </button>
                          <Tooltip anchorId={`update-${book._id}`} content="Update Book" place="top" />
                        </NavLink>

                        {/* Delete Button */}
                        <button
                          id={`delete-${book._id}`}
                          onClick={() => handleDelete(book._id)}
                          className="rounded bg-red-600 px-4 py-1 text-white hover:bg-red-700 transition hover:scale-105"
                        >
                          Delete
                        </button>
                        <Tooltip anchorId={`delete-${book._id}`} content="Delete Book" place="top" />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center py-8 text-gray-500 dark:text-gray-400">
                    No books added yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyBooks;