import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NavBar() {
  const navRef = useRef(null);
  const textRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef([]);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.4 }
    );
    tl.fromTo(
      ".nav-link",
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.2 }
    );
  }, []);

  useEffect(() => {
    const tll = gsap.timeline();
    tll.from(menuRef.current, {
      opacity: 0,
      y: -40,
      duration: 1.2,
    });
  });

  return (
    <>
      <nav
        ref={navRef}
        className="navbar flex justify-between items-center px-[0.5rem] h-[7rem] w-full z-[99] fixed md:px"
      >
        <div className=" w-[3rem] md:w-[5rem] md:h-[5rem] ">
          <img
            src="./android-chrome-512x512.png"
            alt="BookNest Logo"
            className="h-[3rem] rounded-full md:w-[5rem] md:h-[5rem]"
          />
        </div>

        <div className="md:hidden z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-8 h-8 text-[#563a1f]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 2h16M13 12h7M4 18h16"
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
        </div>

        <div
          ref={textRef}
          id="right-side"
          className="hidden md:flex gap-[50px] text-[1.6vw] whitespace-nowrap font-[600]"
        >
          <Link className="nav-link" to="/Home.js">
            Home
          </Link>
          <Link className="nav-link" to="/AboutUs">
            About
          </Link>
          <Link className="nav-link" to="/ExploreAuthors">
            Explore Authors
          </Link>
          <Link className="nav-link" to="/ExploreBooks">
            Explore Books
          </Link>
          <button className="nav-link bg-[#f7f0e0] rounded-md text-[#563a1f] py-1 px-1 mt-[-6px]">
            Log-in
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden flex flex-col gap-4 px-9 py-[10rem] text-[1.2rem] font-[600] fixed inset-0 bg-black bg-opacity-90 bg-transparent items-center justify-center text-white whitespace-nowrap z-[50]"
        >
          <Link
            className="nav-link"
            to="/Home.js"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className="nav-link"
            to="/AboutUs"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            className="nav-link"
            to="/ExploreAuthors"
            onClick={() => setMenuOpen(false)}
          >
            Explore Authors
          </Link>
          <Link
            className="nav-link"
            to="/ExploreBooks"
            onClick={() => setMenuOpen(false)}
          >
            Explore Books
          </Link>
          <button
            className="nav-link bg-[#f7f0e0] rounded-md text-[#563a1f] py-1 px-1 w-[6rem]  whitespace-nowrap "
            onClick={() => setMenuOpen(false)}
          >
            Log-in
          </button>
        </div>
      )}
    </>
  );
}
