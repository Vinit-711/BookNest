import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page4() {
  const colon1Ref = useRef(null);
  const colon2Ref = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      colon1Ref.current,
      {
        x: -70,
        y: -70,
        duration: 5,
      },
      {
        y: 0,
        x: 0,
        duration: 5,
        scrollTrigger: {
          trigger: colon1Ref.current,

          start: "top 15%",
          end: "top 45%",
          scrub: 3,
        },
      }
    );
    gsap.fromTo(
      colon2Ref.current,
      {
        x: 70,
        y: 70,
        duration: 5,
      },
      {
        y: 0,
        x: 0,
        duration: 5,
        scrollTrigger: {
          trigger: colon2Ref.current,

          start: "top 90%",
          end: "top 80%",
          scrub: 3,
        },
      }
    );
  });

  return (
    <>
      <div
        id="quotes"
        className="h-[100vh] w-[100%] flex items-center justify-center relative"
      >
        <img
          id="colon1"
          ref={colon1Ref}
          className="absolute h-[60px] left-[15%] top-[20%]"
          src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg"
          alt="double quotes"
        />
        <p className="text-[8vh] font-[800] w-[50%] leading-[20 px] text-center">
          Freedom is the freedom to say that two plus two make four. If that is
          granted, all else follows.
        </p>
        <img
          id="colon2"
          ref={colon2Ref}
          className="absolute h-[60px] bottom-[20%] right-[15%]"
          src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg"
          alt="double quotes"
        />
      </div>
    </>
  );
}
