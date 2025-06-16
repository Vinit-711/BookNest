// import { Link } from "react-router-dom";
import authors from "../Data/AuthorsData";

export default function Authors() {
  return (
    <>
      <section className="text-gray-600 body-font pt-32 px-4 bg-[#4f6d6a]">
        <div className="flex   justify-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white items-center">
            Top BestSeller Authors
          </h1>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {authors.map((author) => (
              <div className="p-4 lg:w-1/3 transform transition duration-300 hover:-translate-y-2  hover:[box-shadow:0_10px_15px_rgba(208,146,50,0.6)] rounded-2xl cursor-pointer">
                <div className="h-full flex flex-col justify-between bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg  text-center ">
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    {author.name}
                  </h1>
                  <p className="leading-relaxed mb-3 line-clamp-3">
                    {author.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
