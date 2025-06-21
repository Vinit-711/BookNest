import React, { useEffect, useRef } from "react";
import reviewImage from "../Assets/review.jpg";
import connectImage from "../Assets/connect.jpg";
import exploreImage from "../Assets/explore.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import chatroomImage from "../Assets/chatroom.jpg";
gsap.registerPlugin(ScrollTrigger);

export default function Page5() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const titles = useRef([]);
  const images = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000",
          scrub: 2,
          pin: true,
        },
      });

      const features = titles.current.map((_, i) => {
        return {
          title: titles.current[i],
          image: images.current[i],
        };
      });

      features.forEach((feature, i) => {
        tl.fromTo(
          [feature.title, feature.image],
          {
            opacity: 0,
            y: 100,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
          },
          i * 1.6
        ).to(
          [feature.title, feature.image],
          {
            opacity: 0,
            y: -100,
            scale: 0.8,
            duration: 1,
          },
          i * 1.6 + 1
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen w-full relative overflow-hidden"
    >
      <div ref={containerRef} className="w-full h-full  text-white flex">
        <div className="select-none w-[10%] h-full flex flex-col items-center justify-center text-center px-2">
          <div className="border-l-4 border-white h-1/2"></div>
          <span className="rotate-[-90deg] mt-16 tracking-[0.1rem] text-sm md:text-2xl text-white/50 ">
            FEATURES
          </span>
        </div>

        <div className="relative w-[80%] h-full flex flex-col items-center justify-center">
          {[
            {
              title: "Review",
              image: reviewImage,
              desc: "Rate and reflect on books you've read.",
            },
            {
              title: "Connect",
              image: connectImage,
              desc: "Talk and share your reads with others.",
            },
            {
              title: "Explore",
              image: exploreImage,
              desc: "Discover books from every genre.",
            },
            {
              title: "Chatroom",
              image: chatroomImage,
              desc: "Discover books from every genre.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="absolute select-none flex flex-col md:flex-row md:gap-14 items-center justify-center w-full h-full gap-[40px] whitespace-nowrap tracking-[20px]"
            >
              <h1
                ref={(el) => (titles.current[i] = el)}
                className="text-xl md:text-[6rem] font-bold drop-shadow-lg"
              >
                {item.title}
              </h1>
              <img
                ref={(el) => (images.current[i] = el)}
                src={item.image}
                className="h-40 w-40 md:h-72 md:w-72 rounded-full mt-6 object-cover shadow-2xl"
                alt={item.title}
              />
            </div>
          ))}
        </div>

        <div className="w-[10%] select-none h-full md:mt-8 flex items-center justify-center px-2">
          <div className="text-sm text-white/60 md:text-[1.2rem]  rotate-[90deg] whitespace-nowrap tracking-[0.2rem]">
            FROM A CAGED WORLD TO BOUNDLESS TALES
          </div>
        </div>
      </div>
    </div>
  );
}
