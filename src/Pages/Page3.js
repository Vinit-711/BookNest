import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page4() {
  const colon1Ref = useRef(null);
  const colon2Ref = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 767px)",
          isDesktop: "(min-width: 768px)",
        },
        (context) => {
          const { isMobile } = context.conditions;

          gsap.fromTo(
            colon1Ref.current,
            {
              x: isMobile ? -50 : -40,
              y: isMobile ? -20 : -40,
            },
            {
              x: isMobile ? -5 : -40,
              y: isMobile ? -10 : -40,

              duration: 2,
              scrollTrigger: {
                trigger: colon1Ref.current,
                start: isMobile ? "top 85%" : "top 10%",
                end: isMobile ? "top 60%" : "top 70%",

                scrub: 2,
              },
            }
          );

          gsap.fromTo(
            textRef.current,
            {
              y: isMobile ? 30 : 50,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: textRef.current,
                start: isMobile ? "top 80%" : "top 70%",
                end: "top 40%",
                scrub: 2,
              },
            }
          );

          gsap.fromTo(
            colon2Ref.current,
            {
              x: isMobile ? 50 : 60,
              y: isMobile ? 20 : 60,
            },
            {
              x: isMobile ? 5 : 40,
              y: isMobile ? 10 : 40,
              duration: 1.5,
              scrollTrigger: {
                trigger: colon2Ref.current,
                start: isMobile ? "top 90%" : "top 10%",
                end: isMobile ? "top 60%" : "top 90%",

                scrub: 2,
              },
            }
          );
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="quotes"
      className="relative flex flex-col items-center justify-center px-4 py-20 md:my-40 md:py-40"
    >
      <div className="relative max-w-[90%] sm:max-w-[70%] text-center">
        <img
          ref={colon1Ref}
          className="absolute h-6 sm:h-8 left-[-1.5rem] top-[-1.5rem]"
          src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg"
          alt="opening quote"
        />

        <p
          ref={textRef}
          className="text-lg sm:text-xl md:text-3xl md:text-wrap md:whitespace-nowrap font-bold leading-relaxed text-[#f7f0e0]"
        >
          If you don’t like to read, you haven’t found the right book
        </p>

        {/* Closing Quote Positioned Relative to Text */}
        <img
          ref={colon2Ref}
          className="absolute h-6 sm:h-8 right-[-1.5rem] bottom-[-1.5rem]"
          src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg"
          alt="closing quote"
        />
      </div>
    </div>
  );
}
