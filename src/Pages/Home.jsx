import React, { useEffect, useState } from "react";
import Banner from "../Components/Home/Banner";
import { BookOfTheWeek, TopGenres } from "../Components/Home/HomeSection";
import LatestBookCard from "../Components/Home/LatestBookCard";

const Home = () => {
  const [latestBooks, setLatestBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/latest_books")
      .then((res) => res.json())
      .then((data) => {
        setLatestBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching latest books:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto ">
      <Banner />
      <div>
        <div>
          <h1 className="text-3xl text-center font-bold text-gray-800 mt-6 mb-6">
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
