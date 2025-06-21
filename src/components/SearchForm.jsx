import React from "react";

export default function SearchForm() {
  return (
    <form className="flex items-center space-x-2  " role="search">
      <input
        type="search"
        placeholder="Search"
        aria-label="Search"
        className=" flex-grow w-28 md:w-48 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#563a1f] "
      />
      <button
        type="submit"
        className="px-4 py-2 border border-[#f7f0e0] text-[#f7f0e0] rounded-md hover:bg-[#f7f0e0] hover:border-[#563a1f] hover:text-[#563a1f] transition"
      >
        Search
      </button>
    </form>
  );
}
