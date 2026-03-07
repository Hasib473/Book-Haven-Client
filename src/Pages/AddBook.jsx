// pages/AddBook.jsx
import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { toast } from "react-toastify";
import { ToastBar } from "react-hot-toast";
import axios from "axios";

export default function AddBook() {
  const { user } = useContext(AuthContext);

  const handleSubmit =async (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.name.value,
      genre: e.target.category.value,
      summary: e.target.description.value,
      coverImage: e.target.coverImage.value,
      userEmail: user?.email || "Unknown",
      rating: 0,
      author: user?.name || "Unknown",
    };


  try {
    await axios.post("http://localhost:3000/allbooks", formData);

    toast.success("Book added successfully");
    e.target.reset();
  } catch (error) {
    toast.error("Failed to add book: " + error.message);
  }
};
  

  return (
    <section className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="mx-auto max-w-3xl p-6 rounded-3xl shadow-xl bg-white dark:bg-gray-800 transition-colors duration-500">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold text-gray-900 dark:text-white">
            Add a New Book
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Fill in the details below to add a new book to The Book Haven.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-3xl p-10 bg-gray-50 dark:bg-gray-700 shadow-md transition-colors duration-500">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Book Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Book Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter book name"
                className="w-full rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-3 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-500 transition"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="mb-2  block text-sm font-medium text-black-700 dark:text-gray-300">
                Category
              </label>
              <select
                name="category"
                required
                className="w-full rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-3 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-500 transition"
              >
                <option value="">Select a category</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-fiction">Non-fiction</option>
                <option value="Mystery">Mystery</option>
                <option value="Romance">Romance</option>
                <option value="Fantasy">Fantasy</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Write a short description about the book"
                className="w-full resize-none rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-3 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-500 transition"
                rows="4"
                required
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Photo URL
              </label>
              <input
                name="coverImage"
                type="url"
                placeholder="https://example.com/book-cover.jpg"
                className="w-full rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-3 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-500 transition"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full rounded-full bg-violet-600 text-white px-8 py-3 text-sm font-semibold shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl active:scale-95"
              >
                Add Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}