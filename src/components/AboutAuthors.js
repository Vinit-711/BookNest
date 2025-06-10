import { useLocation } from "react-router-dom";
// import authors from "../Data/AuthorsData";
export default function Author() {
  const location = useLocation();
  const author = location.state;

  if (!author) {
    return (
      <div className="pt-32 text-center text-white">
        <h2 className="text-2xl">No author Data Found.</h2>
      </div>
    );
  }
  return (
    <>
      <section className="text-gray-600 body-font bg-[#4f6d6a]">
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                {author.name}
              </h1>
              <div className="h-1 w-20 bg-yellow-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-white">
              {author.bio}
            </p>
          </div>
          <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">
            Bestsellers
          </h2>
          <div className="flex flex-wrap -m-4">
            {author.bestsellers.map((book, index) => (
              <div className="xl:w-1/4 md:w-1/2 p-4" key={index}>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={book.image}
                    alt={book.title}
                  />

                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    {book.title}
                  </h2>
                  <button className="bg-[#4f6d6a] hover:bg-[#769f9b] text-white font-bold py-2 px-4 border-b-4 border-yellow-500 hover:border-yellow-300 rounded">
                    Watch Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
