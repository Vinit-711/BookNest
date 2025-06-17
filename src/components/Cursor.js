import React, { useRef, useEffect } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  const blurRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      if (cursorRef.current && blurRef.current) {
        cursorRef.current.style.left = `${x}px`;
        cursorRef.current.style.top = `${y}px`;
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

      <div
        ref={cursorRef}
        id="custom-cursor"
        className="fixed h-[18px] w-[18px] bg-[#3d3a2a] 
                   rounded-full pointer-events-none z-[99]"
      ></div>
    </>
  );
}
