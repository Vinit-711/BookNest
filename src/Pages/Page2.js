import React from "react";
import { books } from "../Data/BooksData";
import BookCard from "../components/BookCards";

export default function Page2() {
  return (
    <>
      <div className="h-[30rem] w-full z-[10] mt-48 flex flex-col relative items-center lg:flex-row ">
        <h3 className="text-2xl font-[800] mx-4 text-wrap leading-loose md:text-6xl md:leading-tight">
          Trending{" "}
          <span className="font-dancing text-4xl md:text-6xl">Books</span>
        </h3>

        <div
          id="scroller"
          className="w-full whitespace-nowrap overflow-x-hidden overflow-y-hidden px-4 py-10 flex gap-[80px] "
        >
          {books.map((book, index) => (
            <BookCard key={index} book={book}/>
          ))}
        </div>
      </div>
    </>
  );
}
