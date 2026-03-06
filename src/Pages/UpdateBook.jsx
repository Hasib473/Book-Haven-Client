import React, {  useContext, useEffect, useState } from 'react';
import AuthContext from '../Context/AuthContext';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
export default function UpdateBook() {
    const [book, setBook] = useState([]);
    const { user } = useContext(AuthContext);
    console.log(book);
    

    const {id} = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/allbooks/${id}`,{
      headers: {
        authorization: `Bearer ${user?.accessToken}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
        console.log(data);
      });
  }, [id]);

//   update book 

 const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.name.value,
      genre: e.target.category.value,
      summary: e.target.description.value,
      coverImage: e.target.coverImage.value,
      

    };

    fetch(`http://localhost:3000/allbooks/${id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      toast.success("Book updated successfully");
    } )
    .catch(error => {
toast.error("Failed to update book: " + error.message);});
  }

  return (
    <section className="min-h-screen  py-20">
      <div className="mx-auto max-w-3xl p-6  rounded-3xl shadow-xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold ">Update Your Book</h1>
          <p className="text-lg">
            Fill in the details below to update your book in The Book Haven.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-3xl  p-10 shadow-3xl">
          <form onSubmit={handleSubmit}  className="space-y-6">
            {/* Book Name */}
            <div>
              <label className="mb-2 block text-sm font-medium ">
                Book Name
              </label>
              <input
                type="text"
                defaultValue={book.title}
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
                defaultValue={book.genre}
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
                defaultValue={book.summary}
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
                defaultValue={book.coverImage}
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
