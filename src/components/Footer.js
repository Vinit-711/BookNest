// Footer.jsx
import { Link } from "react-router-dom";

// import reviewImage from "../Assets/review.jpg";
// import connectImage from "../Assets/connect.jpg";
// import exploreImage from "../Assets/explore.jpg";
// import chatroomImage from "../Assets/chatroom.jpg";

export default function Footer() {
  return (
    <footer className="bg-[#f5f0e6] text-[#4e3d32] pt-10 pb-6 px-6 md:px-16 mt-12 rounded-t-3xl shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-widest text-[#6b4f3b]">BookNest</h2>
          <p className="text-sm text-[#6f5e53] leading-relaxed">
            Where book lovers gather. Discover, discuss, and share your favorite reads in a cozy digital corner.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg text-[#6b4f3b] font-semibold text-center md:pb-6">Quick Links</h3>
          <h3 className="text-lg text-[#6b4f3b] font-extrabold text-center md:pb-6">This is just a beta version i will add this featurs later. </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-[#6b4f3b] transition">Home</Link></li>
            <li><Link to="/genres" className="text-[#6b4f3b] transition">Genres</Link></li>
            <li><Link to="/reviews" className="text-[#6b4f3b] transition">Reviews</Link></li>
            <li><Link to="/community" className="text-[#6b4f3b] transition">Community</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm text-[#6b4f3b] font-semibold mb-3">Subscribe</h3>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 text-[#6b4f3b] py-2 rounded-lg border border-[#d6c7b7] focus:outline-none focus:ring-2 focus:ring-[#6b4f3b]"
            />
            <button
              type="submit"
              className="w-full bg-[#6b4f3b] text-white py-2 rounded-lg hover:bg-[#5a3f2c] transition"
            >
              Join Newsletter
            </button>
          </form>
        </div>

        {/* Socials */}
        {/* <div>
          <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
          <div className="flex gap-4 text-[#6b4f3b] text-xl">
            <a href="/" className="hover:text-[#3b2d23] transition"><img src={reviewImage} alt="social"></img></a>
            <a href="/" className="hover:text-[#3b2d23] transition"><img src={chatroomImage} alt="social"></img></a>
            <a href="/" className="hover:text-[#3b2d23] transition"><img src={connectImage} alt="social"></img></a>
            <a href="mailto:hello@booknest.com" className="hover:text-[#3b2d23] transition"><img src={exploreImage} alt="social"></img></a>
          </div>
        </div> */}

      </div>

      <div className="mt-10 border-t border-[#d6c7b7] pt-4 text-center text-sm text-[#7a685c]">
        © {new Date().getFullYear()} BookNest. All rights reserved.
      </div>
    </footer>
  );
}
