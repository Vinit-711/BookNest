import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { fetchBooksByAuthor } from "../Data/BooksData";
import gsap from "gsap";
import LoadingPage from "../components/LoadingPage";

export default function AuthorDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const buttonRef = useRef(null);

  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false); // 🆕 Toggle state

  // GSAP animation for Back button
  useEffect(() => {
    const el = buttonRef.current;
    if (!el) return;

    const handleEnter = () => gsap.to(el, { scale: 1.05, duration: 0.3 });
    const handleLeave = () => gsap.to(el, { scale: 1, duration: 0.3 });

    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  // Fetch author data dynamically
  useEffect(() => {
    async function fetchAuthor() {
      setLoading(true);
      try {
        const books = await fetchBooksByAuthor(id);
        if (!books.length) {
          setAuthor(null);
          return;
        }

        const mainAuthor = books[0].authors?.[0] || id;

        const authorData = {
          id,
          name: mainAuthor,
          image: books[0].image || "/images/placeholder.jpg",
          desc: `Top works by ${mainAuthor}`,
          bio: books[0].description || "No bio available.",
          bestsellers: books, // show all, slice later
        };

        setAuthor(authorData);
      } catch (error) {
        console.error("Error fetching author:", error);
        setAuthor(null);
      } finally {
        setLoading(false);
      }
    }

    fetchAuthor();
  }, [id]);

  if (loading) {
    return <LoadingPage />;
  }

  if (!author) {
    return (
      <div className="min-h-screen flex justify-center items-center text-white bg-[#563a1fbb]">
        <p>Author not found</p>
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

      <div className="max-w-7xl mx-auto bg-[#f7f0e0] text-[#563a1f] rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
        <div className="flex md:flex-col">
          <img
            src={author.image}
            alt={author.name}
            className="w-full md:w-60 h-auto max-h-80 rounded-lg object-contain bg-[#563a1f] py-4 my-4"
            onError={(e) => (e.target.src = "/images/placeholder.jpg")}
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl text-[#563a1f] font-bold mb-2">
            {author.name}
          </h1>
          <p className="text-[#563a1fb7] mb-4">{author.desc}</p>
          <p className="mb-6 text-[#563a1f] text-sm">{author.bio}</p>

          <h2 className="text-xl font-semibold mb-3">Bestsellers</h2>
          <div className="grid grid-cols-2 gap-4">
            {(showAll
              ? author.bestsellers
              : author.bestsellers.slice(0, 6)
            ).map((book, idx) => (
              <Link
                to={`/book/${encodeURIComponent(
                  book.title.toLowerCase().replace(/\s+/g, "-")
                )}`}
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-[#563a1f] hover:shadow-2xl hover:scale-105 transition duration-300"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-48 object-contain bg-white p-2"
                  onError={(e) => (e.target.src = "/images/placeholder.jpg")}
                />
                <div className="p-2 text-center text-sm font-medium text-[#563a1f]">
                  {book.title}
                </div>
              </Link>
            ))}
          </div>

          {author.bestsellers.length > 6 && (
            <div className="text-center mt-4">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-block px-6 py-2 rounded-full bg-[#f7f0e0] text-[#563a1f] border border-[#563a1f88] shadow hover:bg-[#e6dcc4] hover:shadow-lg transition font-medium"
              >
                {showAll ? "View Less" : "View All Books"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
