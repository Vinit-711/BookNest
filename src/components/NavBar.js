import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-[#2c4c49] text-white px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 fixed top-0 left-0 w-full">
      <div className="text-2xl font-bold text-[#d09232]">Plot-Pix</div>

      <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
        <li>
          <Link to="/" className="hover:text-[#d09232]">
            Home
          </Link>
        </li>
        <li>
          <Link to="/About" className="hover:text-[#d09232]">
            About
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="hover:text-[#d09232]">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/Authors" className="hover:text-[#d09232]">
            Authors
          </Link>
        </li>
      </ul>

      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 rounded-md bg-white text-[#2c4c49] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d09232]"
        />
        <button className="px-4 py-1 rounded-md bg-[#d09232] text-white hover:bg-yellow-500">
          Search
        </button>
      </div>
    </nav>
  );
}
