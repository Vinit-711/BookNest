import React from "react";

export default function AboutUs() {
  return (
    <div
      id="about-us"
      className="h-[80vh] w-full flex justify-around items-center px-0 py-[50px] relative z-[10] border border-b-[2px] border-[#dadada]"
    >
      <img
        src={`${process.env.PUBLIC_URL}/android-chrome-512x512.png`}
        alt="BOOKNEST"
        className="border-[20px] h-[220px] w-[220px] object-cover rounded-2xl"
      ></img>
      <div id="about-us-in" className="w-[40%] text-center">
        <h3 className="text-[80px] font-[600] mb-[40px] uppercase">ABOUT US</h3>
        <p className="text-[20px] leading-8">
          BookNest is a modern and user-friendly web application designed for
          book lovers to explore, discover, and keep track of their favorite
          reads. With a clean and responsive design, BookNest allows users to
          browse a diverse collection of books categorized by genre, author, and
          popularity. Each book is displayed with essential details like cover
          image, title, description, and category, making it easy for users to
          find their next great read. The project is built using React for
          seamless navigation and Tailwind CSS for attractive styling, ensuring
          a smooth and visually engaging experience across devices. Whether
          you're a casual reader or a passionate bibliophile, BookNest offers a
          cozy corner to dive into the world of literature.
        </p>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/android-chrome-512x512.png`}
        alt="BOOKNEST"
        className="border-[20px] h-[220px] w-[220px] object-cover rounded-2xl"
      ></img>
    </div>
  );
}
