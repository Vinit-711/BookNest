import React, { useState } from "react";
import { supabase } from "../supabaseClient";
// import { useNavigate } from "react-router-dom";

export default function LoginOnlyPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-[rgba(0,0,0,0.7)] text-[#f7f0e0]">
      <div className="max-w-md w-full space-y-6 p-6 rounded-xl bg-[#f7f0e0] text-[#563a1f] shadow-lg">
        <h1 className="text-2xl font-bold text-black text-center">
          Login to BookNest
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full py-2 bg-[#563a1f] text-white rounded hover:bg-[#3e2a15]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
