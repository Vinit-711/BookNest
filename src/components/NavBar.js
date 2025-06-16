import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NavBar() {
  const navRef = useRef(null);

  useEffect(() => {
    let lastState = null;
    const trigger = ScrollTrigger.create({
      start: "top top",
      end: "+=200",
      scrub: 1,
      onUpdate: (self) => {
        const scrolled = self.scroll() > 50;

        if (scrolled !== lastState) {
          lastState = scrolled;
          gsap.to(navRef.current, {
            backgroundColor: scrolled ? "#000" : "rgba(0,0,0,0.0)", // no flicker
            height: scrolled ? "100px" : "135px",
            boxShadow: scrolled
              ? "0 4px 12px rgba(0, 0, 0, 0.1)"
              : "0 0 0 rgba(0,0,0,0)",
            duration: 0.5,
            ease: "power2.out",
          });
        }
      },
    });

    return () => trigger.kill();
  }, []);


  return (
    <>
      <div
        ref={navRef}
        className="navbar flex justify-start gap-[50px] items-center px-[150px] py-[0px] h-[135px] w-full fixed z-[99]"
      >
        <img
          src="./android-chrome-512x512.png"
          alt="plotpix-logo"
          className="h-[70px] rounded-full"
        />
        <Link
          to="/Home.js"
          className="text-2xl font-bold text-[#f7f0e0]  uppercase"
        >
          Home
        </Link>
        <Link to="/" className="text-2xl font-bold text-[#f7f0e0] uppercase">
          About
        </Link>
        <Link to="/" className="text-2xl font-bold text-[#f7f0e0] uppercase">
          Explore Authors
        </Link>
        <Link to="/" className="text-2xl font-bold text-[#f7f0e0] uppercase">
          Explore Books
        </Link>
      </div>
    </>
  );
}
