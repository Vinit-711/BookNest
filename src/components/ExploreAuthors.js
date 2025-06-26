import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { fetchAuthorsBySearch } from "../Data/AuthorsData";

const trendingAuthors = [
  "Stephen King",
  "Colleen Hoover",
  "J.K. Rowling",
  "Agatha Christie",
  "George R.R. Martin",
  "Rick Riordan",
  "Haruki Murakami",
];

export default function ExploreAuthors() {
  const [searchTerm, setSearchTerm] = useState("Trending Authors");
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAuthors = async (term) => {
    try {
      setLoading(true);
      const data = await fetchAuthorsBySearch(term);
      setAuthors(data);
    } catch (error) {
      console.error("Error fetching authors:", error);
      setAuthors([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm.trim()) {
      fetchAuthors(searchTerm);
    }
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-[#563a1fbb] pt-36 md:pt-40 px-4 pb-4">
      <h1 className="text-3xl font-bold text-[#f7f0e0] mb-6 text-center">
        Explore Authors
      </h1>

      {/* Trending Authors Horizontal Buttons */}
      <div className="mb-6 overflow-x-auto whitespace-nowrap space-x-3 px-1 flex scrollbar-hide">
        {trendingAuthors.map((author, idx) => (
          <button
            key={idx}
            onClick={() => setSearchTerm(author)}
            className="px-4 py-2 bg-[#f7f0e0] text-[#563a1f] rounded-full shadow hover:shadow-md transition whitespace-nowrap"
          >
            {author}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search authors..."
          className="w-full px-4 py-2 rounded-xl border border-[#563a1f] text-[#563a1f] focus:outline-none focus:ring-2 focus:ring-[#f7f0e0]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Author Grid or Message */}
      {loading ? (
        <p className="text-center text-[#f7f0e0]">Loading authors...</p>
      ) : authors.length ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {authors.map((author) => (
            <Link
              to={`/author/${encodeURIComponent(author.id)}`}
              key={author.id}
              className="bg-[#f7f0e0] rounded-2xl shadow-md p-3 text-center hover:scale-105 transition"
            >
              <img
                src={author.image}
                alt={author.name}
                onError={(e) => (e.target.src = "/images/placeholder.jpg")}
                className="w-20 h-20 mx-auto rounded-full mb-2 object-cover"
              />
              <h2 className="text-lg font-semibold text-[#563a1f]">
                {author.name}
              </h2>
              <p className="text-sm text-[#563a1fb7] truncate">
                {author.genre || author.desc}
              </p>
            </Link>
          ))}
        </div>
      ) : (
        searchTerm && (
          <p className="text-center col-span-full text-[#f7f0e0]">
            No authors found.
          </p>
        )
      )}

      <Footer />
    </div>
  );
}
