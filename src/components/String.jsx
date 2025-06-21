import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function String() {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
//   const finalPath = "M 10 96 Q 64 96 118 96";

  useEffect(() => {
    const container = containerRef.current;
    const path = pathRef.current;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Adjust the path so it stretches with full screen (based on width of SVG)
      const newPath = `M 50 96 Q ${x} ${y} ${rect.width - 50} 96`;

      gsap.to(path, {
        attr: { d: newPath },
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(path, {
        attr: { d: `M 10 96 Q ${container.offsetWidth / 2} 96 ${container.offsetWidth - 10} 96` },
        duration: 2,
        ease: "elastic.out(1, 0.1)",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-32 mb-3 mt-0 md:mb-20 z-[66] md:z-[90] bg-[#563a1f] overflow-hidden">
      <svg height="128" width="100%" preserveAspectRatio="none">
        <path
          ref={pathRef}
          d="M 20 96 Q 64 96 108 96"
          stroke="white"
          fill="transparent"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
