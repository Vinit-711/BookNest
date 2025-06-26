import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { fetchBooksByAuthor } from "../Data/BooksData";

export default function ExploreBooks() {
  const [searchTerm, setSearchTerm] = useState("Trending Books");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const results = await fetchBooksByAuthor(searchTerm);
        console.log("Fetched books:", results); // 👈 Debug raw data

        // Filter out incomplete books
        const cleanResults = results || [];

        setBooks(cleanResults);
      } catch (err) {
        console.error("Error fetching books:", err);
        setBooks([]);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm.trim()) fetchBooks();
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-[#563a1fbb] pt-36 md:pt-40 px-4 pb-4">
      <h1 className="text-3xl font-bold text-[#f7f0e0] mb-4 text-center">
        Explore Books
      </h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search books..."
          className="w-full px-4 py-2 rounded-xl border border-[#563a1f] text-[#563a1f] focus:outline-none focus:ring-2 focus:ring-[#f7f0e0]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <p className="text-center text-[#f7f0e0]">Loading books...</p>
      ) : Array.isArray(books) && books.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {books.map((book, index) => {
            const title = book.title || "Untitled";
            const image = book.image || "/images/placeholder.jpg";
            // const authors = book.authors?.join(", ") || "Unknown Author";

            return (
              <Link
                to={`/book/${encodeURIComponent(
                  title.toLowerCase().replace(/\s+/g, "-")
                )}`}
                key={index}
                className="bg-[#f7f0e0] rounded-2xl shadow-md overflow-hidden hover:scale-[1.02] transition transform duration-300"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3 text-center">
                  <h2 className="text-lg font-semibold text-[#563a1f] truncate">
                    {book.title}
                  </h2>
                  <p className="text-sm text-[#563a1f]">
                    {book.authors.join(", ")}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-[#f7f0e0]">No books found.</p>
      )}

      <Footer />
    </div>
  );
}
