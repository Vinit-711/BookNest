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
          scrub: 0.3,
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
            duration: 2,
          },
          i * 2
        ).to(
          [feature.title, feature.image],
          {
            opacity: 0,
            y: -100,
            scale: 0.8,
            duration: 2,
          },
          i * 2 + 1
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="h-[100vh] w-full relative overflow-hidden">
      <div ref={containerRef} className="w-full h-full  text-white flex">
        <div className="select-none w-[10%] h-full flex flex-col items-center justify-center text-center px-2">
          <div className="border-l-4 border-white h-[60%]"></div>
          <span className="rotate-[-90deg] mt-[8vh] tracking-widest text-[1.5rem] text-white/50">
            FEATURES
          </span>
        </div>

        <div className="relative w-[80%] h-full flex items-center justify-center">
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
              className="absolute select-none flex items-center justify-center w-full h-full gap-[40px] whitespace-nowrap tracking-[20px]"
            >
              <h1
                ref={(el) => (titles.current[i] = el)}
                className="text-[8vw] font-bold drop-shadow-lg"
              >
                {item.title}
              </h1>
              <img
                ref={(el) => (images.current[i] = el)}
                src={item.image}
                className="h-[50vh] w-[50vh] rounded-full mt-6 object-cover shadow-2xl"
                alt={item.title}
              />
            </div>
          ))}
        </div>

        <div className="w-[10%] select-none h-full flex items-center justify-center px-2">
          <div className="text-[1.5rem] text-white/60 rotate-[90deg] whitespace-nowrap tracking-wider">
            FROM A CAGED WORLD TO BOUNDLESS TALES
          </div>
        </div>
      </div>
    </div>
  );
}
