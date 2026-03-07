import React, { useEffect, useState } from "react";
import Banner from "../Components/Home/Banner";
import { BookOfTheWeek, TopGenres } from "../Components/Home/HomeSection";
import LatestBookCard from "../Components/Home/LatestBookCard";
import axios from "axios";

const Home = () => {
  const [latestBooks, setLatestBooks] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const getLatestBooks = async () => {
    try {
      const res = await axios.get("https://book-haven-server-beige.vercel.app/latest_books");
      setLatestBooks(res.data);
    } catch (err) {
      console.error("Error fetching latest books:", err);
    } finally {
      setLoading(false);
    }
  };

  getLatestBooks();
}, []);

  return (
    <div className="max-w-7xl mx-auto ">
      <Banner />
      <div>
        <div>
          <h1 className="text-3xl text-center font-bold text-gray-800 mt-6 mb-6 dark:text-gray-200">
            Latest <span className="text-violet-600">Books</span> 
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-5">
            {latestBooks.map((book) => (
              <LatestBookCard key={book._id} book={book} />
            ))}
          </div>
        </div>
        <TopGenres />
        <BookOfTheWeek />
      </div>
    </div>
  );
};

export default Home;
