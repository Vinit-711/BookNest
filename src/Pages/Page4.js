

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Page3() {
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
        start: "top 0%",
        end: "top -70%",
        scrub: 0.5,
        pin: true,
      },
    });
  });
  return (
    <div
      ref={sectionRef}
      className=" h-[100vh] w-[100vw]  relative flex items-center justify-center "
    >
      <h1
        ref={textRef}
        className="uppercase text-[35vw] font-[700] translate-x-[50%] tracking-[40px]"
      >
        features
      </h1>
    </div>
  );
}
