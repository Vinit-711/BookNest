import React, { useEffect, useRef } from "react";
import Page1 from "../Pages/Page1";
import Page2 from "../Pages/Page2";
import Page3 from "../Pages/Page3";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Page4 from "../Pages/Page4";
import NavBar from "./NavBar";
import Page5 from "../Pages/Page5";
import Page6 from "../Pages/Page6";

gsap.registerPlugin(ScrollTrigger);

export default function Main() {
  const mainRef = useRef(null);

  useEffect(() => {
    gsap.to(mainRef.current, {
      backgroundColor: "rgba(0, 0, 0, 1)",
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: "+=500",
        scrub: true,
      },
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div
      id="main"
      ref={mainRef}
      className="h-full w-full overflow-x-hidden relative bg-[rgba(0,0,0,0.4)] transition-colors duration-100"
    >
      <NavBar />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
    </div>
  );
}
