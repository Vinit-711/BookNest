import { books } from "../Data/BooksData";

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-fon bg-[#4f6d6a]">
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-wrap -m-4 ">
            {books.map((book, index) => (
              <div className="p-4 md:w-1/3 " key={index}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-gray-300">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={book.image}
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {book.category}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3 ">
                      {book.title}
                    </h1>
                    <p className="leading-relaxed mb-3">{book.description}</p>
                    <div className="flex items-center flex-wrap ">
                      <button className="bg-[#4f6d6a] hover:bg-[#769f9b] text-white font-bold py-2 px-5 mr-12 border-b-4 border-yellow-500 hover:border-yellow-300 rounded">
                        Watch Now
                      </button>
                      <a
                        className="text-l text-yellow-700 inline-flex items-center md:mb-2 lg:mb-0"
                        href="/"
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
                      </a>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
