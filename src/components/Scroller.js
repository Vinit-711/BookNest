import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Scroller() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
    const trigger = sectionRef.current;
    const text = textRef.current;
    gsap.to(text, {
      x: "-60%",
      scrollTrigger: {
        trigger: trigger,
        scroller: "",
        start: "top 30%",
        end: "top -70%",
        scrub: 0.5,
        pin: true,
      },
    });
  });
  return (
    <div
      ref={sectionRef}
      className=" min-h-64 w-full relative flex items-center justify-center "
    >
      <h1
        ref={textRef}
        className="uppercase font-poppins text-7xl md:text-[10rem] mt-10 mb-0 font-[700] translate-x-[50%] whitespace-nowrap tracking-widest"
      >
        Why BookNest ?
      </h1>
    </div>
  );
}
