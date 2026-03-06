import { Link } from "react-router";

export default function Banner() {
  return (
    <section
      className="relative flex min-h-[80vh] items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-800/80 to-indigo-700/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
          Discover Your Next Favorite Book
        </h1>
        <p className="mb-8 text-lg text-white/90">
          Explore a curated library or create your own book.
        </p>

        <div className="flex justify-center gap-4">
          <Link to="/all-books" className="rounded-full bg-white px-8 py-3 text-indigo-700 font-semibold cursor-pointer">
            All Books
          </Link>
          <Link to="/add-books" className="rounded-full border border-white px-8 py-3 font-semibold cursor-pointer ">
            Create Book
          </Link>
        </div>
      </div>
    </section>
  );
}
