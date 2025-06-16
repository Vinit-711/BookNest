import React from "react";
import { books } from "../Data/BooksData";

export default function Scroller() {
  return (
    <div id="page2" className="h-[50vh] w-full z-[1000] flex items-center">
      <div
        id="scroller"
        className="w-full whitespace-nowrap overflow-x-hidden overflow-y-hidden px-4 py-10 flex gap-[80px]"
      >
        {books.map((Book, index) => (
          <div
            key={index}
            className="min-w-[200px] h-[200px] bg-white rounded-xl shadow-md flex animate-scrollX items-center justify-center"
          >
            <img
              src={Book.image}
              alt={`book-${index}`}
              className="w-full h-full object-cover rounded-xl border-red-700 border-[2px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
