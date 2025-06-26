import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchBooksByAuthor } from "../Data/BooksData";
import gsap from "gsap";

export default function BookDetailPage() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const buttonRef = useRef(null);

  // Animate Back button using GSAP
  useLayoutEffect(() => {
    const el = buttonRef.current;
    if (!el || typeof el.addEventListener !== "function") return;

    const handleEnter = () => gsap.to(el, { scale: 1.05, duration: 0.3 });
    const handleLeave = () => gsap.to(el, { scale: 1, duration: 0.3 });

    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  // Fetch book details
  useEffect(() => {
    async function getBook() {
      setLoading(true);
      try {
        const query = bookId.replace(/-/g, " ");
        const results = await fetchBooksByAuthor(query);

        const normalizedId = bookId.toLowerCase().replace(/[^a-z0-9]/gi, "");
        let matched = results.find((b) => {
          const normTitle = b.title?.toLowerCase().replace(/[^a-z0-9]/gi, "");
          return normTitle === normalizedId;
        });

        if (!matched) {
          matched = results.find((b) => {
            const normTitle = b.title?.toLowerCase().replace(/[^a-z0-9]/gi, "");
            return normTitle.includes(normalizedId);
          });
        }

        setBook(matched || results[0] || null);
      } catch (error) {
        console.error("Error fetching book:", error);
        setBook(null);
      } finally {
        setLoading(false);
      }
    }

    getBook();
  }, [bookId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#563a1fbb] text-[#f7f0e0]">
        <p>Loading book details...</p>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#563a1fbb] text-[#f7f0e0]">
        <p>Book not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#563a1fbb] text-[#f7f0e0] p-6 pt-32">
      <button
        ref={buttonRef}
        onClick={() => navigate(-1)}
        className="mb-8 px-5 py-2 rounded-full bg-[#f7f0e0] text-[#563a1f] shadow-lg hover:shadow-xl transition font-semibold tracking-wide"
      >
        ← Back
      </button>

      <div className="max-w-4xl mx-auto bg-[#f7f0e0] text-[#563a1f] rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
        <img
          src={book.image || "/images/placeholder.jpg"}
          alt={book.title}
          onError={(e) => (e.target.src = "/images/placeholder.jpg")}
          className="w-full md:w-60 h-auto rounded-lg object-cover"
        />
        <div className="flex-1">
          <div>

          <h1 className="text-3xl text-[#563a1f] font-bold mb-2">
            {book.title}
          </h1>
          <h2 className="text-xl text-[#563a1fb7] mb-2">
            {book.category || "General"}
          </h2>
          <p className="text-sm text-[#563a1f] mb-3">
            {book.description || "No description available."}
          </p>
          </div>

          {book.averageRating ? (
            <div className="text-sm text-[#563a1f] mb-2">
              ⭐ <strong className="text-[#563a1f] ">{book.averageRating}</strong> / 5 from{" "}
              {book.ratingsCount || "a few"} readers (Google)
            </div>
          ) : (
            <div className="text-sm text-[#563a1f] mb-2">
              ⭐ Rating not available
            </div>
          )}

          <div className="text-sm text-[#563a1f] mb-4 space-x-4">
            <a
              href={`https://www.goodreads.com/search?q=${encodeURIComponent(
                book.title
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-700"
            >
              View on Goodreads
            </a>
            <a
              href={`https://www.amazon.in/s?k=${encodeURIComponent(
                book.title
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-orange-700"
            >
              View on Amazon
            </a>
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            <button className="bg-[#563a1f] text-white px-4 py-2 rounded-lg hover:bg-[#563a1f6f] hover:text-[#563a1f] transition">
              Add to Bookshelf
            </button>
            <button className="border border-[#563a1f] text-[#563a1f] px-4 py-2 rounded-lg hover:bg-[#af886389] transition">
              Add to TBR
            </button>
            <button className="bg-[#563a1f6f] text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
              Mark as Read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
