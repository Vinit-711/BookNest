import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function Dashboard() {
  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check auth status on page load
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        setUserEmail(data.user.email);
      } else {
        navigate("/login");
      }
    };
    getUser();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  if (!userEmail) return null; // Can show a spinner here

  return (
    <div className="min-h-screen pt-32 px-6 pb-10 bg-[#563a1fbb] text-[#f7f0e0]">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Welcome, {userEmail} 👋</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-[#f7f0e0] text-[#563a1f] rounded-md shadow hover:bg-[#e6dbc6]"
        >
          Logout
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* TBR */}
        <div className="bg-[#f7f0e0] text-[#563a1f] rounded-xl shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">📚 To Be Read</h2>
          <ul className="text-sm space-y-1">
            <li>• Atomic Habits</li>
            <li>• Sapiens</li>
            <li>• The Alchemist</li>
          </ul>
        </div>

        {/* Currently Reading */}
        <div className="bg-[#f7f0e0] text-[#563a1f] rounded-xl shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">📖 Reading Now</h2>
          <ul className="text-sm space-y-1">
            <li>• Rich Dad Poor Dad</li>
          </ul>
        </div>

        {/* Read Books */}
        <div className="bg-[#f7f0e0] text-[#563a1f] rounded-xl shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">✅ Completed</h2>
          <ul className="text-sm space-y-1">
            <li>• 1984</li>
            <li>• Animal Farm</li>
          </ul>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-10 bg-[#f7f0e0] text-[#563a1f] rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <ul className="text-sm space-y-2">
          <li>➤ Rated "1984" 5⭐</li>
          <li>➤ Added "Sapiens" to TBR</li>
          <li>➤ Marked "Animal Farm" as Read</li>
        </ul>
      </div>
    </div>
  );
}
