import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Context/AuthContext';
import { NavLink } from 'react-router';

const MyBooks = () => {
  const { user } = useContext(AuthContext);
  const [myBooks, setMyBooks] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

   fetch(`http://localhost:3000/mybooks?email=${user.email}`, {
  headers: {
    Authorization: `Bearer ${user?.accessToken}`
  }
})
  .then(res => res.json())
  .then(data => setMyBooks(data))
  .catch(err => console.error("Error fetching my books:", err));

  }, [user?.email]);

  return (
    <section className="min-h-screen  py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-10 text-center text-4xl font-bold ">
          My Added Books
        </h1>

        <div className="overflow-x-auto rounded-2xl bg-white shadow-xl">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-violet-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">Title</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {myBooks.length > 0 ? (
                myBooks.map((book) => (
                  <tr key={book._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {book.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {book.genre}
                    </td>
                  
                    <td className="px-6 py-4 text-center text-sm">
                      <div className="flex justify-center gap-3">
                      <NavLink to={`/book-details/${book._id}`}>
                        <button
                          className="rounded bg-violet-600 px-4 py-1 text-white hover:bg-indigo-700"
                        >
                          view Book
                        </button>
                        </NavLink>
                      <NavLink to={`/update-book/${book._id}`}>
                        <button
                          className="rounded bg-indigo-600 px-4 py-1 text-white hover:bg-indigo-700"
                        >
                          Update
                        </button>
                      </NavLink>
                        <button
                          className="rounded bg-red-600 px-4 py-1 text-white hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-500">
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