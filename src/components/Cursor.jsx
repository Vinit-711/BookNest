import React, { useRef, useEffect } from "react";

export default function Cursor() {
  const blurRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      if (blurRef.current) {
        blurRef.current.style.left = `${x - 200}px`;
        blurRef.current.style.top = `${y - 200}px`;
      }
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div
        ref={blurRef}
        id="cursor-blur"
        className="fixed h-[300px] w-[300px] rounded-full 
                   bg-[#c8c4b0] opacity-15 pointer-events-none z-[9] blur-[60px]"
      ></div>
    </>
  );
}
