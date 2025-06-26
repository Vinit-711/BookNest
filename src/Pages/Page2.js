import React, { useEffect, useRef, useState } from "react";
import { fetchBooksByAuthor } from "../Data/BooksData";
import BookCards from "../components/BookCards";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page2() {
  const headingRef = useRef(null);
  const scrollerRef = useRef(null);
  const [books, setBooks] = useState([]);

  // Fetch books on mount
  useEffect(() => {
    async function getBooks() {
      const data = await fetchBooksByAuthor("Trending Books");
      setBooks(data);
    }
    getBooks();
  }, []);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 767px)",
          isDesktop: "(min-width: 768px)",
        },
        (context) => {
          const { isMobile } = context.conditions;

          gsap.fromTo(
            headingRef.current,
            { y: isMobile ? 40 : 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: headingRef.current,
                start: isMobile ? "top 80%" : "top 70%",
                end: "top 40%",
                scrub: 1.5,
              },
            }
          );

          gsap.fromTo(
            scrollerRef.current,
            { y: isMobile ? 30 : 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: scrollerRef.current,
                start: isMobile ? "top 85%" : "top 70%",
                end: "top 40%",
                scrub: 1.5,
              },
            }
          );
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="h-[30rem] md:h-[20rem] w-full z-[10] mt-48 flex flex-col relative items-center lg:flex-row">
      <h3
        ref={headingRef}
        className="text-2xl font-[800] md:mx-10 text-wrap leading-loose md:text-6xl md:leading-tight tracking-widest text-[#f7f0e0]"
      >
        Trending{" "}
        <span className="font-dancing text-4xl md:text-6xl text-[#f7f0e0]">
          Books
        </span>
      </h3>

      <div
        ref={scrollerRef}
        id="scroller"
        className="w-full whitespace-nowrap overflow-x-hidden overflow-y-hidden px-4 py-10 flex gap-[80px]"
      >
        {books.length > 0 ? (
          books.map((book, index) => (
            <BookCards key={index} book={book} />
          ))
        ) : (
          <p className="text-[#f7f0e0] text-center">Loading...</p>
        )}
      </div>
    </div>
  );
}
