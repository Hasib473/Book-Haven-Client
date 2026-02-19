// components/HomeSections.jsx
import React from "react";
import frictionimg from '../../assets/1_rEITYNiAIBMp2i26kKUpig.webp'
import mysteriimg from '../../assets/mysteri.webp'
import romanceimg from '../../assets/romance.webp'
import fantacyimg from '../../assets/Fantacy.webp'

// =============================
// Top Genres Component
// =============================
export function TopGenres() {
  const genres = [
    { name: "Fiction", img: frictionimg },
    { name: "Mystery", img: mysteriimg },
    { name: "Romance", img: romanceimg },
    { name: "Fantasy", img: fantacyimg },
  ];

  return (
    <section className=" py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-center text-3xl font-bold">Top <span className="text-violet-600">Genres</span></h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {genres.map((genre) => (
            <div
              key={genre.name}
              className="group relative h-48 overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={genre.img}
                alt={genre.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40" />
              <h3 className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-white">
                {genre.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================
// Book of the Week Component
// =============================
export function BookOfTheWeek() {
  return (
    <section className="relative py-24 ">

      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Book of <span className="text-violet-600">the Week</span></h2>
      </div>
  <div className="mx-auto grid max-w-6xl items-center gap-14  md:grid-cols-2">
    
  {/* Image */}
<div className="relative mx-auto w-full max-w-sm">
  <div className="absolute -inset-4 rounded-3xl " />

  <div className="relative z-10 aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
    <img
      src="https://i.ibb.co.com/khHN7Pk/9780143454212.jpg"
      alt="Book of the Week"
      className="h-full w-full object-cover"
    />
  </div>
</div>


    {/* Content */}
    <div>
      <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700">
        ⭐ Book of the Week
      </span>

      <h2 className="mb-4 text-4xl font-bold leading-tight">
        The Great Gatsby: A Timeless Classic of the Jazz Age
      </h2>

      <p className="mb-8 max-w-xl text-lg leading-relaxed ">
        A beautifully written story exploring mystery, friendship, and the
        quiet power of knowledge hidden inside forgotten books.
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <button className="rounded-full bg-indigo-700 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-800 hover:shadow-xl">
          View Book
        </button>

        <button className="rounded-full border border-indigo-200 px-8 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-100">
          Read Preview
        </button>
      </div>
    </div>
  </div>
</section>

  );
}


