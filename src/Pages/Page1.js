import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page1() {
  const textRef = useRef([]);
  const text1Ref = useRef([]);
  const btnRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 767px)",

          isDesktop: "(min-width: 768px)",
        },
        (context) => {
          let { isMobile } = context.conditions;

          const tl = gsap.timeline();

          tl.fromTo(
            textRef.current,
            {
              y: isMobile ? 30 : 60,
              opacity: 0,
              scale: isMobile ? 0.8 : 0.5,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              scrollTrigger: {
                trigger: textRef.current,
                start: isMobile ? "top 40%" : "top 45%",
                end: "top 100%",
                
                scrub: 2,
              },
            }
          );

          tl.fromTo(
            text1Ref.current,
            {
              y: isMobile ? 40 : 60,
              opacity: 0,
              scale: isMobile ? 0.85 : 0.5,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: textRef.current,
                start: isMobile ? "top 39%" : "top 35%",
                end: "top 100%",
                scrub: 2,
              },
            }
          );

          tl.fromTo(
            btnRef.current,
            {
              y: 50,
              opacity: 0,
              scale: isMobile ? 0.7 : 0.3,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: btnRef.current,
                start: isMobile ? "top 80%" : "top 65%",
                end: "top 100%",
                scrub: true,
              },
            }
          );
        }
      );

      return () => ctx.revert();
    });
  }, []);

  return (
    <>
      <div
        id="page1"
        className="h-screen w-full relative flex items-center justify-center flex-col text-center z-[10] leading-tight px-4 md:px-20"
      >
        <h1
          ref={textRef}
          className="text-xl my-0 md:text-[3rem] lg:text-[5rem] font-bold relative z-10 text-[#f7f0e0] 
            before:content-['WELCOME_TO_BOOKNEST'] font-edu before-stroke before:absolute before:top-[-0.5rem] before:left-[-0.5rem] before:z-[-1] before:text-black  md:leading-loose"
        >
          WELCOME TO BOOKNEST
        </h1>
        <h2
          ref={text1Ref}
          className="text-xs md:text-xl font-extrabold mt-4 mb-4 text-[#f7f0e0] uppercase tracking-wider md:text-[2.8rem] md:tracking-loose"
        >
          Your cozy corner for discovering captivating books
        </h2>
      </div>

      <div className="w-full flex justify-center md:justify-end px-4 md:px-16 mt-[-40px] md:mt-[-80px]">
        <button
          ref={btnRef}
          onClick={() => {}}
          className="group px-6 py-2 md:px-8 md:py-3 border-2 rounded-xl text-sm md:text-lg z-40 transform transition-transform duration-200 hover:bg-[#f7f0e0] hover:text-black text-[#f7f0e0] inset-0 bg-black bg-opacity-90 bg-transparent items-center justify-center "
        >
          Explore{" "}
          <i className="ri-arrow-right-line text-white group-hover:text-black transition-colors duration-300"></i>
        </button>
      </div>
    </>
  );
}
