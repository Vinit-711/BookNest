import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page1() {
  const textRef = useRef(null);
  const text1Ref = useRef(null);
  const btnRef = useRef(null);
  useEffect(() => {
    var tl = gsap.timeline();
    tl.fromTo(
      textRef.current,
      {
        y: 40,
        opacity: 0,
        scale: 0.5,
        ease: "power1.out",
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 45%",
          end: "top 100%",
          scrub: 2,
        },
      }
    );
    tl.fromTo(
      text1Ref.current,
      {
        y: 60,
        opacity: 0,
        scale: 0.5,
        ease: "power1.out",
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        delay: 4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 40%",
          end: "top 100%",
          scrub: 2,
        },
      }
    );
    tl.fromTo(
      btnRef.current,
      {
        y: 60,
        opacity: 0,
        scale: 0.3,
        ease: "power1.out",
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration:2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: btnRef.current,
          start: "top 99%",
          end: "top 100%",
          scrub: 2,
        },
      }
    );
  }, []);
  return (
    <>
      <div
        id="page1"
        className="h-[100vh] w-[100%] relative flex items-center justify-center flex-col text-center z-[10] py-[20px] leading-[20vh]"
      >
        <h1
          ref={textRef}
          className="text-[6vw] font-[800] relative z-10 text-[#f7f0e0] 
        before:content-['WELCOME_TO_BOOKNEST'] font-edu before-stroke before:absolute before:top-[-8px] before:left-[-8px] before:z-[-1] before:text-black"
        >
          WELCOME TO BOOKNEST
        </h1>
        <h2
          ref={text1Ref}
          className="text-[30px] font-[800]  mt-[10px] mb-[20px] text-[#f7f0e0] uppercase tracking-[4px]"
        >
          Your cozy corner for discovering captivating books
        </h2>
      </div>
      <button
        ref={btnRef}
        className="group h-[8vh] w-[12vw]  border-[2px] rounded-[14px] translate-x-[76vw] text-[2vw] translate-y-[-80px] z-40 transform transition-transform duration-300 hover:bg-[#f7f0e0]  hover:text-[#000] "
      >
        Explore <i class="ri-arrow-right-line text-white group-hover:text-black  transition-colors  duration-300"></i>
      </button>
    </>
  );
}
