import { Link } from "react-router-dom";
import authors from "../Data/AuthorsData";

export default function Authors() {
  return (
    <section className="text-gray-600 body-font pt-32 px-4 bg-[#4f6d6a]">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {authors.map((author) => (
            <div className="p-4 lg:w-1/3">
              <div className="h-full flex flex-col justify-between bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg  text-center ">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  {author.name}
                </h1>
                <p className="leading-relaxed mb-3 line-clamp-3">{author.desc}</p>
                <Link
                  to="/AboutAuthors"
                  state={author}
                  className="text-yellow-500 inline-flex items-center"
                //   key={author.id}
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
