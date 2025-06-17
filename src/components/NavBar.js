import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NavBar() {
  const navRef = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
    var tl = gsap.timeline();
    tl.fromTo(
      navRef.current,
      {
        y: -80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.4,
      }
    );
    tl.fromTo(
      ".nav-link",
      {
        y: -80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger:0.2,
      }
    );
  });

  return (
    <>
      <nav
        ref={navRef}
        className="navbar flex justify-start gap-[50px] items-center px-[150px] py-[0px] h-[135px] w-full  z-[99] "
      >
        <div id="logo" ref={navRef} className="h-[90px] w-full">
          <img
            src="./android-chrome-512x512.png"
            alt="BookNest Logo"
            className="h-[70px] rounded-full"
          ></img>
        </div>
        <div
          ref={textRef}
          id="right-side"
          className="flex gap-[50px] text-[1.6vw] whitespace-nowrap font-[600]"
        >
          <Link className="nav-link " to="/Home.js">Home</Link>
          <Link className="nav-link " to="/AboutUs">About</Link>
          <Link className="nav-link " to="/ExploreAuthors">Explore Authors</Link>
          <Link className="nav-link " to="/ExploreBooks">Explore Books</Link>
        </div>
      </nav>
    </>
  );
}
