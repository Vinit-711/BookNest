import React, { useState } from "react";
import Footer from "./Footer";


const booksData = [
  {
    title: "The Night Circus",
    author: "Erin Morgenstern",
    genre: "Fantasy",
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Thriller",
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Norwegian Wood",
    author: "Haruki Murakami",
    genre: "Literary Fiction",
    image:
      "https://images.unsplash.com/photo-1535909339361-9f4e09d9e1b6?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Verity",
    author: "Colleen Hoover",
    genre: "Romance",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "It",
    author: "Stephen King",
    genre: "Horror",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
  },
];

export default function ExploreBooks() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = booksData.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#563a1f] pt-36 md:pt-40 px-4 pb-4">
      <h1 className="text-3xl font-bold text-[#f7f0e0] mb-4 text-center">
        Explore Books
      </h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search books..."
          className="w-full px-4 py-2 rounded-xl border border-[#563a1f] text-[#563a1f]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {filteredBooks.length ? (
          filteredBooks.map((book, index) => (
            <div
              key={index}
              className="bg-[#f7f0e0] rounded-2xl shadow-md overflow-hidden"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-3 text-center">
                <h2 className="text-lg font-semibold text-[#563a1f]">
                  {book.title}
                </h2>
                <p className="text-sm text-[#563a1f]">{book.author}</p>
                <p className="text-xs text-[#563a1fb7]">{book.genre}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-[#f7f0e0]">
            No books found.
          </p>
        )}
      </div>
      
      <Footer/>
    </div>
  );
}
