import React, { useEffect, useRef } from "react";
import romanceImg from "../Assets/romance.jpg";
import thrillerImg from "../Assets/thriller.jpg";
import fantasyImg from "../Assets/fantasy.jpg";
import scifiImg from "../Assets/sci-fi.jpg";
import manymoreImg from "../Assets/manymore.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page6() {
  const headRef = useRef(null);

  useEffect(() => {
    const anim = gsap.fromTo(
      headRef.current,
      { y: 90, opacity: 0 },
      {
        y: -30,
        opacity: 1,
        duration: 1,
        delay:1,
        scrollTrigger: {
          trigger: headRef.current,
          start: "top 75%",
          end: "top 99%",
          scrub: 2,
        },
      }
    );

    return () => {
      if (anim.scrollTrigger) anim.scrollTrigger.kill();
      anim.kill();
    };
  }, []);

  const genres = [
    { genre: "Romance", image: romanceImg },
    { genre: "Fantasy", image: fantasyImg },
    { genre: "Thrill", image: thrillerImg },
    { genre: "Sci-Fi", image: scifiImg },
    { genre: "Many More", image: manymoreImg },
  ];

  return (
    <div className="w-full min-h-screen px-4 py-16 flex flex-col items-center relative">
      <h1
        ref={headRef}
        className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent whitespace-nowrap mb-12 text-center"
        style={{ WebkitTextStroke: "1px #f7f0e0" }}
      >
        WHAT ARE YOU WAITING FOR?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px] justify-items-center">
        {genres.map((item, i) => (
          <div
            key={i}
            className="group h-[14rem] w-[18rem] sm:h-[20rem] sm:w-[22rem] lg:h-[22rem] lg:w-[22rem] overflow-hidden rounded-[20px] relative transition-all duration-300"
          >
            <h2 className="absolute z-10 h-full w-full flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-extrabold text-[#563a1f] uppercase bg-[#f7f0e0] bg-opacity-90 transition-all duration-300 group-hover:text-[#f7f0e0] group-hover:bg-transparent">
              {item.genre}
            </h2>
            <img
              src={item.image}
              alt={item.genre}
              className="object-cover w-full h-full scale-[1.1] transition-transform duration-300 group-hover:scale-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
