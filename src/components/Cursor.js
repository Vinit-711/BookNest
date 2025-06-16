import { useEffect } from "react";
import React, { useRef } from "react";

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

    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);
  return (
    <>
      <div ref={blurRef} id="curosr-blur" className="fixed h-[400px] w-[400px] rounded-full bg-[#f7f0e0] opacity-40 pointer-events-none z-0 blur-[40px]"></div>
      <div
        ref={cursorRef}
        id="cursor"
        className="fixed h-[20px] w-[20px] bg-[#563a1f] rounded-full pointer-events-none z-50"
      ></div>
    </>
  );
}
