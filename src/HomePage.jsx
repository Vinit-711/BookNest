import { useEffect, useRef } from "react";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import String from "./components/String";
import Page6 from "./Pages/Page6";
import Footer from "./components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const mainRef = useRef(null);

  useEffect(() => {
    gsap.to(mainRef.current, {
      backgroundColor: "#563a1f",
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
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <String />
      <Page6 />
      <Footer />
    </div>
  );
}
