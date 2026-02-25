// pages/AddBook.jsx
import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { toast } from "react-toastify";

export default function AddBook() {
  const {user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.name.value,
      genre: e.target.category.value,
      summary: e.target.description.value,
      coverImage: e.target.coverImage.value,
      userEmail: user?.email || "Unknown",
      rating : 0,
      author: user?.name || "Unknown"

    };

    fetch('http://localhost:3000/allbooks',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      toast.success("Book added successfully");
    } )
    .catch(error => {
toast.error("Failed to add book: " + error.message);});
  }
  return (
    <section className="min-h-screen  py-20">
      <div className="mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold ">Add a New Book</h1>
          <p className="text-lg">
            Fill in the details below to add a new book to The Book Haven.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-3xl  p-10 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Book Name */}
            <div>
              <label className="mb-2 block text-sm font-medium ">
                Book Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter book name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            {/* Category */}
            <div>
              <label className="mb-2 block text-sm font-medium">Category</label>

              <select
                name="category"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100"
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
              <label className="mb-2 block text-sm font-medium ">
                Description
              </label>
              <input
                type="text"
                name="description"
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
                name="coverImage"
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
