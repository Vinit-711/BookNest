import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { supabase } from "../supabaseClient";
import logo from "../Assets/logo.png";

gsap.registerPlugin(ScrollTrigger);

export default function NavBar() {
  const navRef = useRef(null);
  const textRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef([]);
  const [isScrolled, setIsScrolled] = useState(false);

  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  // Handle scroll navbar color change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 70);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animations
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
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.2 }
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

  // Get Supabase session
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  // Logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`navbar flex justify-between items-center px-4 h-[7rem] rounded-md w-full z-[99] fixed transition-colors duration-500 ${
          isScrolled ? "bg-[#000]/60 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        {/* Logo + Links */}
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
            {session && (
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            )}
          </div>
        </div>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex gap-4 items-center">
          {!session ? (
            <>
              <Link
                to="/login"
                className="nav-link bg-[#f7f0e0] rounded-md text-[#563a1f] py-2 px-4"
              >
                Login
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="nav-link border border-[#f7f0e0] text-[#f7f0e0] rounded-md py-2 px-4 hover:bg-[#f7f0e0] hover:text-[#563a1f]"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile menu toggle */}
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

      {/* Mobile menu */}
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
          {session && (
            <Link
              className="nav-link"
              to="/dashboard"
              onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </Link>
          )}
          {!session ? (
            <>
              <Link
                to="/login"
                className="nav-link bg-[#f7f0e0] text-[#563a1f] rounded-md py-1 px-4"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="nav-link border border-[#f7f0e0] text-[#f7f0e0] rounded-md py-1 px-4"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </>
  );
}
