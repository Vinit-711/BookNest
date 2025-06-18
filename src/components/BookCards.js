
import React from "react";

export default function BookCard({ book }) {
  return (
    <div className="group h-full relative min-w-40 gap-1 md:min-w-[20rem] bg-white rounded-xl shadow-md overflow-hidden text-wrap animate-scrollX">
      <img
        src={book.image}
        alt={book.title}
        className="h-[15rem] md:h-full object-cover rounded-xl transition-opacity duration-500 group-hover:opacity-10 md:w-[40rem]"
      />
      <a href="/">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <h2 className="text-md font-semibold text-gray-800 mb-1">{book.title}</h2>
          <p className="text-sm text-gray-700">{book.description}</p>
          <span className="text-md mt-2 inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded">
            {book.category}
          </span>
        </div>
      </a>
    </div>
  );
}
