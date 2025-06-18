import React, { useEffect, useRef } from "react";
import romanceImg from "../Assets/romance.jpg";
import thrillerImg from "../Assets/thriller.jpg";
import fantasyImg from "../Assets/fantasy.jpg";
import scifiImg from "../Assets/sci-fi.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Page6() {
  const headRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      headRef.current,
      {
        y: 80,
        opacity:0,
        duration: 0.25,
        scrollTrigger: {
          trigger: headRef.current,
          start: "top 75%",
          end: "top 99%",
          scrub: 3,
          
        },
      },
      {
        y: -80,
        opacity:1,
        duration: 0.25,
        scrollTrigger: {
          trigger: headRef.current,
          start: "top 75%",
          end: "top 99%",
          scrub: 3,
          
        },
      }
    );
  });

  const genres = [
    { genre: "Romance", image: romanceImg },
    { genre: "Fantasy", image: fantasyImg },
    { genre: "Thrill", image: thrillerImg },
    { genre: "Sci-Fi", image: scifiImg },
    { genre: "Many More", image: scifiImg },
  ];

  return (
    <div className=" w-full flex flex-col items-center justify-center gap-4 relative  px-4">
      <h1 ref={headRef} className="text-[1.3rem] font-[800] absolute top-4 text-transparent z-10 whitespace-nowrap" style={{WebkitTextStroke:"1px #f7f0e0"}}>
        WHAT ARE YOU WAITING FOR?
      </h1>

      {genres.map((item, i) => (
        <div
          key={i}
          className="elem group h-[5rem] w-[15rem] overflow-hidden rounded-[20px] relative transition-all duration-300 z-50"
        >
          <h2 className="absolute z-[10] h-full w-full flex items-center justify-center text-3xl font-extrabold text-[#563a1f] uppercase bg-[#f7f0e0] bg-opacity-90 transition-all duration-300 group-hover:text-[#f7f0e0] group-hover:bg-transparent">
            {item.genre}
          </h2>
          <img
            src={item.image}
            alt={item.genre}
            className="object-cover scale-[1.1] transition-transform duration-300 group-hover:scale-100"
          />
        </div>
      ))}
    </div>
  );
}
