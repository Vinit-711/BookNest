import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { supabase } from "../supabaseClient"; // ✅ Import Supabase client
import Footer from "../components/Footer";

const LoginPage = () => {
  const loginRef = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    gsap.fromTo(
      loginRef.current,
      { x: 60, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5 }
    );
  }, []);

  // 🧩 Email/password sign up
  const handleSignup = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      alert("Error signing up: " + error.message);
    } else {
      alert("Check your email to confirm your signup.");
    }
    
  };

  // 🌐 Sign in with Google
  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({ provider: "google" });
  };

  // 🌐 Sign in with GitHub
  const signInWithGitHub = async () => {
    await supabase.auth.signInWithOAuth({ provider: "github" });
  };

  return (
    <>
      <div className="min-h-screen overflow-x-hidden flex items-center justify-center bg-[rgba(0,0,0,0.7)] p-4">
        <div ref={loginRef} className="w-full max-w-md space-y-6 ">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#f7f0e0]">Welcome</h1>
          </div>

          <div className="space-y-3">
            <button onClick={signInWithGoogle} className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-[#f7f0e0]  text-sm font-medium text-gray-700 hover:bg-gray-50">
              <div className="bg-white p-2 rounded-full">
                <svg className="w-4" viewBox="0 0 533.5 544.3">
                  <path
                    d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                    fill="#4285f4"
                  />
                  <path
                    d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                    fill="#34a853"
                  />
                  <path
                    d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                    fill="#fbbc04"
                  />
                  <path
                    d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                    fill="#ea4335"
                  />
                </svg>
              </div>
              Sign Up with Google
            </button>
            <button onClick={signInWithGitHub} className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-[#f7f0e0] text-sm font-medium text-black hover:bg-gray-50">
              <svg className="w-6" viewBox="0 0 32 32">
                <path
                  fillRule="evenodd"
                  d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                />
              </svg>
              <span className="text-gray-700">Sign Up with GitHub</span>
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#f7f0e0] text-gray-700 rounded-md">
                Or sign up with e-mail
              </span>
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSignup}>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={(e)=>setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-[#563a1f]"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                onChange={(e)=>setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-[#563a1f]"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              
              className="w-full flex justify-center py-2 px-4 border border-[#f7f0e0] rounded-md shadow-sm text-sm font-medium text-white  hover:bg-[#f7f0e0] hover:text-[#563a1f]"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
