import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SearchForm from "./SearchForm";
import logo from "../Assets/logo.png";
gsap.registerPlugin(ScrollTrigger);

export default function NavBar() {
  const navRef = useRef(null);
  const textRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef([]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
    tl.fromTo(
      ".nav-link",
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1 }
    );
  }, []);

  useEffect(() => {
    if (menuOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    }
  }, [menuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={`navbar flex justify-between items-center px-4 h-[7rem] rounded-md w-full z-[99] fixed transition-colors duration-500 ${
          isScrolled ? "bg-[#000]/60 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-6 md:gap-8">
          <div className="w-[3rem] md:w-[5rem] md:h-[5rem]">
            <img
              src={logo}
              alt="BookNest Logo"
              className="h-[3rem] rounded-full md:w-[5rem] md:h-[5rem]"
            />
          </div>

          <div
            ref={textRef}
            id="nav-links"
            className="hidden md:flex gap-6 md:gap-5 lg:gap-8 text-[1rem] md:text-[1rem] lg:text-[1.2rem] font-semibold"
          >
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/About">
              About
            </Link>
            <Link className="nav-link" to="/explore-authors">
              Explore Authors
            </Link>
            <Link className="nav-link" to="/explore-books">
              Explore Books
            </Link>
            <Link
              to="/Login"
              className="nav-link bg-[#f7f0e0] rounded-md text-[#563a1f] py-1 px-3"
            >
              Log-in
            </Link>
          </div>
        </div>

        <div className=" hidden md:block">
          <SearchForm />
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
        </div>
      </nav>

      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden flex flex-col gap-4 px-9 py-[10rem] text-[1.2rem] font-semibold fixed inset-0 bg-black bg-opacity-90 items-center justify-center text-white z-[50]"
        >
          <Link className="nav-link" to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link
            className="nav-link"
            to="/About"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            className="nav-link"
            to="/explore-authors"
            onClick={() => setMenuOpen(false)}
          >
            Explore Authors
          </Link>
          <Link
            className="nav-link"
            to="/explore-books"
            onClick={() => setMenuOpen(false)}
          >
            Explore Books
          </Link>
          <Link
            to="/Login"
            className="nav-link bg-[#f7f0e0] rounded-md text-[#563a1f] py-1 px-3"
            onClick={() => setMenuOpen(false)}
          >
            Log-in
          </Link>
          <div className="w-full mt-6">
            <SearchForm />
          </div>
        </div>
      )}
    </>
  );
}
