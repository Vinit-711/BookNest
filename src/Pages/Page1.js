import React from "react";

export default function Page1() {
  return (
    <>
      <div
        id="page1"
        className="h-[100vh] w-[100%] relative flex items-center justify-center flex-col text-center z-[10]">
      
        <h1 className="text-[110px] font-[800] relative z-10 text-[#f7f0e0] 
        before:content-['WELCOME_TO_BOOKNEST'] before-stroke before:absolute before:top-[-8px] before:left-[-8px] before:z-[-1] before:text-black">
          WELCOME TO BOOKNEST
        </h1>
        <h2 className="text-[30px] font-[800] mt-[10px] mb-[20px] text-[#f7f0e0] uppercase ">
          Your cozy corner for discovering captivating books
        </h2>
        
      </div>
    </>
  );
}
