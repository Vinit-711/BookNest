import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page4() {
  const colon1Ref = useRef(null);
  const colon2Ref = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      colon1Ref.current,
      { x: -40, y: -40 },
      {
        x: 0,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: colon1Ref.current,
          start: "top 40%",
          end: "top 20%",
          scrub: 3,
        },
      }
    );
    gsap.from(textRef.current,{
      y:40,opacity:0,
    })
    gsap.fromTo(
      colon2Ref.current,
      { x: 40, y: 40 },
      {
        x: 0,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: colon2Ref.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 3,
        },
      }
    );
  }, []);

  return (
    <div
      id="quotes"
      className="relative flex flex-col items-center justify-center px-4 py-20"
    >
      <img
        id="colon1"
        ref={colon1Ref}
        className="absolute h-6 sm:h-8 left-6 top-0"
        src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg"
        alt="opening quote"
      />

      <p ref={textRef} className="text-lg sm:text-xl font-bold leading-relaxed text-center max-w-[90%] sm:max-w-[60%]">
        Freedom is the freedom to say that two plus two make four. If that is
        granted, all else follows.
      </p>

      <img
        id="colon2"
        ref={colon2Ref}
        className="absolute h-6 sm:h-8 right-6 bottom-0"
        src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg"
        alt="closing quote"
      />
    </div>
  );
}
