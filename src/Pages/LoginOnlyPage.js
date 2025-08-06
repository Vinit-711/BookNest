import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import Footer from "../components/Footer";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function LoginOnlyPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Email/password login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      if (error.message.includes("Invalid login credentials")) {
        alert(
          "Login failed: Either your email/password is incorrect, or your email is not confirmed."
        );
      } else {
        alert("Login failed: " + error.message);
      }
    }
  };

  // OAuth login
  const handleOAuthLogin = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({ provider });
    if (error) {
      alert("OAuth login failed: " + error.message);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[rgba(0,0,0,0.7)] text-[#f7f0e0] px-4">
        <div className="w-full max-w-md p-8 rounded-2xl bg-white shadow-2xl border border-[#ecdcc4] transform transition-all duration-300 hover:scale-[1.02]">
          <h1 className="text-3xl font-extrabold text-center text-[#3e2a15] mb-6">
            Login to <span className="text-[#a46c41] font-dancing">BookNest</span>
          </h1>
          <h3 className="text-[#563a1f] mb-4 text-center align-center">It is preferred to login using google or github beacuse its a beta version and i am working on it.</h3>
          <form onSubmit={handleLogin} className="space-y-5">
            <input
              type="email"
              placeholder="Email"
              required
              className="pl-4 pr-4 py-3 w-full border border-[#ecdcc4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#a46c41] text-[#3e2a15] transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              required
              className="pl-4 pr-4 py-3 w-full border border-[#ecdcc4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#a46c41] text-[#3e2a15] transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-md text-white font-semibold text-lg transition duration-300 ${
                loading
                  ? "bg-[#a46c41]/70 cursor-not-allowed"
                  : "bg-[#a46c41] hover:bg-[#8c5732]"
              }`}
            >
              {loading ? "Logging in..." : "Login with Email"}
            </button>
          </form>

          <div className="mt-6 space-y-2">
            <button
              onClick={() => handleOAuthLogin("google")}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              <FaGoogle /> Continue with Google
            </button>
            <button
              onClick={() => handleOAuthLogin("github")}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
            >
              <FaGithub /> Continue with GitHub
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-[#5a3925]">
            Don't have an account?{" "}
            <a href="/signup" className="text-[#a46c41] hover:underline">
              Sign up here
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
