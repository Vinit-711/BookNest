import React, { useState } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <ul className="hidden md:flex space-x-6">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      {isOpen && (
        <ul className="md:hidden mt-4 space-y-2">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      )}
    </nav>
  );
}
