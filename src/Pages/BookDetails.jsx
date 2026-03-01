import { useEffect, useState } from "react";
import { useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/allbooks/${id}`,{
      headers: {
        authorization: "hello"
      }
    })
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Loading Book...
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-3 gap-0">

          {/* Left Side - Cover */}
          <div className="bg-gray-100 flex items-center justify-center p-8">
            <img
              src={book.coverImage}
              alt={book.title}
              className="rounded-2xl shadow-lg w-full max-w-xs object-cover"
            />
          </div>

          {/* Right Side - Details */}
          <div className="md:col-span-2 p-10 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-3">
                {book.title}
              </h1>

              <p className="text-gray-500 text-lg mb-6">
                by <span className="font-medium text-gray-700">{book.author}</span>
              </p>

              {/* Badges */}
              <div className="flex items-center gap-4 mb-8">
                <span className="px-4 py-1 rounded-full bg-indigo-100 text-violet-600 text-sm font-medium">
                  {book.genre}
                </span>

                <span className="px-4 py-1 rounded-full bg-yellow-100 text-yellow-600 text-sm font-medium">
                  ⭐ {book.rating} / 5
                </span>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-6"></div>

              {/* Summary */}
              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-800">
                  About This Book
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  {book.summary}
                </p>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-10 flex gap-4">
              <button className="bg-violet-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition">
                Add to Library
              </button>

              <button className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition">
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