import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import logo from "../Assets/logo.png"; // Use your uploaded logo path
import String from "../components/String";
import Footer from "../components/Footer";
export default function AboutUs() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const signRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });
    tl.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1 })
      .fromTo(
        imageRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      )
      .fromTo(
        textRef.current,
        { x: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      signRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 3.4,

        ease: "bounce.out",
      }
    );
  }, []);
  return (
    <>
      <div
        ref={containerRef}
        className="min-h-screen bg-[#563a1f] flex flex-col md:flex-row md:gap-14 items-center justify-center p-8 pt-36"
      >
        <div ref={imageRef} className="mb-6 md:mb-0 md:mr-10">
          <img
            src={logo}
            alt="BookNest Logo"
            className="w-32 h-32 md:w-40 md:h-40 rounded-md"
          />
        </div>

        <div
          ref={textRef}
          className="max-w-xl text-center flex flex-col items-center pl-20 justify-center "
        >
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#f7f0e0]">
              About <span className="font-dancing leading-10">BookNest</span>
            </h1>
            <String />
          </div>
          <div>
            <p className="text-[#f7f0e0] text-lg leading-relaxed">
              BookNest is a cozy corner on the internet built for book lovers.
              Whether you're into thrillers, romance, sci-fi, or poetry — our
              nest is your space to explore, discuss, and fall in love with
              stories again.
            </p>
          </div>
          <div>
            <p className="text-[#f7f0e0] text-md mt-4">
              Discover trending reads, connect with fellow bibliophiles, and
              keep your passion for reading alive — one page at a time.
            </p>
          </div>
        </div>
      <Footer />
      </div>
    </>
  );
}
