import React from "react";
import { books } from "../Data/BooksData";

export default function Scroller() {
  return (
    <div className="h-[100vh] w-full z-[10] flex relative items-center ">
      <h3 className="text-[14vh] font-[800] mx-[5vw] text-wrap">
        Trending Books
      </h3>
      <div
        id="scroller"
        className="w-full whitespace-nowrap overflow-x-hidden overflow-y-hidden px-4 py-10 flex gap-[80px]  "
      >
        {books.map((book, index) => (
          <div
            key={index}
            className="group relative min-w-[200px] h-[40vh] bg-white rounded-xl shadow-md overflow-hidden text-wrap animate-scrollX "
          >
            <img
              src={book.image}
              alt={`book-${index}`}
              className="w-full h-full object-cover rounded-xl transition-opacity duration-500 group-hover:opacity-10 "
            />

            <a href="/">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500  ">
                <h2 className="text-[3vh] font-semibold text-gray-800 mb-1">
                  {book.title}
                </h2>
                <p className="text-[2vh] text-gray-700">{book.description}</p>
                <span className="mt-2 inline-block px-2 py-1 bg-blue-100 text-blue-700 text-[10px] rounded">
                  {book.category}
                </span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
