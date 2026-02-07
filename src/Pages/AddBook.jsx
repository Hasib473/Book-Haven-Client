// pages/AddBook.jsx
import React from "react";

export default function AddBook() {
  return (
    <section className="min-h-screen  py-20">
      <div className="mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold ">
            Add a New Book
          </h1>
          <p className="text-lg">
            Fill in the details below to add a new book to The Book Haven.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-3xl  p-10 shadow-xl">
          <form className="space-y-6">
            {/* Book Name */}
            <div>
              <label className="mb-2 block text-sm font-medium ">
                Book Name
              </label>
              <input
                type="text"
                placeholder="Enter book name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            {/* Category */}
            <div>
              <label className="mb-2 block text-sm font-medium ">
                Category
              </label>
              <select className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100">
                <option value="">Select a category</option>
                <option>Fiction</option>
                <option>Non-fiction</option>
                <option>Mystery</option>
                <option>Romance</option>
                <option>Fantasy</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block text-sm font-medium ">
                Description
              </label>
              <textarea
                rows="4"
                placeholder="Write a short description about the book"
                className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Photo URL
              </label>
              <input
                type="url"
                placeholder="https://example.com/book-cover.jpg"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full rounded-full bg-violet-500 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-800 hover:shadow-xl"
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
