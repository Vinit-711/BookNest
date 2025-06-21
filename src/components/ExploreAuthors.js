import React, { useState } from "react";
import Footer from "./Footer";

const authorsData = [
  {
    name: "J.K. Rowling",
    genre: "Fantasy",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "George R.R. Martin",
    genre: "Fantasy",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Agatha Christie",
    genre: "Mystery",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Haruki Murakami",
    genre: "Literary Fiction",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Colleen Hoover",
    genre: "Romance",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Stephen King",
    genre: "Horror",
    image: "https://i.pravatar.cc/150?img=6",
  },
];

export default function ExploreAuthors() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAuthors = authorsData.filter((author) =>
    author.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#563a1fbb] pt-36 md:pt-40 px-4 pb-4">
      <h1 className="text-3xl font-bold text-[#f7f0e0] mb-4 text-center">
        Explore Authors
      </h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search authors..."
          className="w-full px-4 py-2 rounded-xl border border-[#563a1f] focus:outline-none focus:ring-2 text-[#563a1f]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {filteredAuthors.length ? (
          filteredAuthors.map((author, index) => (
            <div
              key={index}
              className="bg-[#f7f0e0] rounded-2xl shadow-md p-3 text-center"
            >
              <img
                src={author.image}
                alt={author.name}
                className="w-20 h-20 mx-auto rounded-full mb-2 object-cover"
              />
              <h2 className="text-lg font-semibold text-[#563a1f]">
                {author.name}
              </h2>
              <p className="text-sm text-[#563a1fb7]">{author.genre}</p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-[#f7f0e0]">
            No authors found.
          </p>
        )}
      </div>
      <Footer/>
    </div>
  );
}
