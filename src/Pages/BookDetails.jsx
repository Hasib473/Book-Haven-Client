import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import AuthContext from "../Context/AuthContext";
import { FadeLoader } from "react-spinners";
import axios from "axios";

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [loading, setLoading] = useState(true);

  const { user } = useContext(AuthContext);
  const { id } = useParams();

  // Load Book
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/allbooks/${id}`, {
          headers: {
            authorization: `Bearer ${user?.accessToken}`,
          },
        });

        setTimeout(() => {
          setBook(res.data);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    if (user) {
      getBook();
    }
  }, [id, user]);

  // Load Comments
  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/comments/${id}`);
        setComments(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getComments();
  }, [id]);

  // Add Comment
  const handleComment = async (e) => {
    e.preventDefault();

    const newComment = {
      bookId: id,
      name: user?.displayName,
      photo: user?.photoURL,
      comment: commentText,
    };

    try {
      const res = await axios.post("http://localhost:3000/comments", newComment);

      // Real-time UI update
      setComments((prev) => [...prev, res.data]);
      setCommentText("");
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <FadeLoader color="#7c3aed" />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">

        {/* Book Section */}
        <div className="grid md:grid-cols-3">

          <div className="bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-8">
            <img
              src={book.coverImage}
              alt={book.title}
              className="rounded-2xl shadow-lg w-full max-w-xs object-cover"
            />
          </div>

          <div className="md:col-span-2 p-10">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3">
              {book.title}
            </h1>

            <p className="text-gray-500 dark:text-gray-400 text-lg mb-6">
              by <span className="font-medium">{book.author}</span>
            </p>

            <div className="flex gap-4 mb-8">
              <span className="px-4 py-1 rounded-full bg-violet-100 dark:bg-violet-900 text-violet-600 text-sm">
                {book.genre}
              </span>

              <span className="px-4 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-600 text-sm">
                ⭐ {book.rating} / 5
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {book.summary}
            </p>
          </div>
        </div>

        {/* Comment Section */}
        <div className="p-10 border-t border-gray-200 dark:border-gray-700">

          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            Comments
          </h2>

          {/* Comment Form */}
          {user && (
            <form onSubmit={handleComment} className="flex gap-4 mb-8">

              <input
                type="text"
                placeholder="Write a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="flex-1 border rounded-lg px-4 py-2 dark:bg-gray-700"
                required
              />

              <button
                type="submit"
                className="bg-violet-600 text-white px-5 py-2 rounded-lg hover:bg-violet-700"
              >
                Post
              </button>

            </form>
          )}

          {/* Comment List */}
          <div className="space-y-5">
            {comments.map((c, index) => (
              <div
                key={index}
                className="flex gap-3 items-start bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
              >
                <img
                  src={c.photo}
                  className="w-10 h-10 rounded-full"
                  alt=""
                />

                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">
                    {c.name}
                  </p>

                  <p className="text-gray-600 dark:text-gray-300">
                    {c.comment}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookDetails;