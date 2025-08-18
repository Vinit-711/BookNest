import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function Dashboard() {
  const [userEmail, setUserEmail] = useState(null);
  const [books, setBooks] = useState({ tbr: [], reading: [], completed: [] });
  const navigate = useNavigate();

  useEffect(() => {
    const getUserAndBooks = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        navigate("/login");
        return;
      }

      const user = data.user;
      setUserEmail(user.email);

      const { data: booksData, error: booksError } = await supabase
        .from("user_books")
        .select("*")
        .eq("user_id", user.id);

      if (booksError) {
        console.error("Error fetching books:", booksError.message);
      } else {
        const categorized = { tbr: [], reading: [], completed: [] };

        booksData.forEach((book) => {
          if (book.status === "tbr") categorized.tbr.push(book);
          else if (book.status === "reading") categorized.reading.push(book);
          else if (book.status === "completed") categorized.completed.push(book);
        });

        setBooks(categorized);
      }
    };

    getUserAndBooks();
  }, [navigate]);

  if (!userEmail) return null;

  // ⭐ New: handle moving from TBR → Reading
  const handleStartReading = async (book) => {
    const { error } = await supabase
      .from("user_books")
      .update({ status: "reading" })
      .eq("id", book.id);

    if (error) {
      console.error("Failed to update status:", error.message);
      alert("Could not start reading.");
      return;
    }

    setBooks((prevBooks) => ({
      ...prevBooks,
      tbr: prevBooks.tbr.filter((b) => b.id !== book.id),
      reading: [...prevBooks.reading, { ...book, status: "reading" }],
    }));
  };

  // existing: Reading → Completed
  const handleMarkAsCompleted = async (book) => {
    const { error } = await supabase
      .from("user_books")
      .update({ status: "completed" })
      .eq("id", book.id);

    if (error) {
      console.error("Failed to update status:", error.message);
      alert("Could not mark as completed.");
      return;
    }

    setBooks((prevBooks) => ({
      ...prevBooks,
      reading: prevBooks.reading.filter((b) => b.id !== book.id),
      completed: [...prevBooks.completed, { ...book, status: "completed" }],
    }));
  };

  // Updated renderBookList to handle both cases
  const renderBookList = (bookArray, listType) =>
    bookArray.length > 0 ? (
      <ul className="space-y-3">
        {bookArray.map((book) => (
          <li
            className="text-[#563a1f] text-lg flex justify-between items-center"
            key={book.id}
          >
            <span className="text-[#563a1f]">• {book.title}</span>

            {/* Show different button depending on list */}
            {listType === "tbr" && (
              <button
                onClick={() => handleStartReading(book)}
                className="ml-4 px-2 py-1 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded transition"
              >
                Start Reading
              </button>
            )}

            {listType === "reading" && (
              <button
                onClick={() => handleMarkAsCompleted(book)}
                className="ml-4 px-2 py-1 text-sm bg-green-600 hover:bg-green-700 text-white rounded transition"
              >
                Mark as Completed
              </button>
            )}
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-lg text-[#563a1f] italic">No books yet.</p>
    );

  return (
    <div className="min-h-screen pt-32 px-6 pb-10 bg-[#563a1fbb] text-[#f7f0e0]">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Welcome, {userEmail} 👋</h1>
      </div>

      <div className="text-[#563a1f] grid md:grid-cols-3 gap-6">
        {/* TBR */}
        <div className="bg-[#f7f0e0] text-[#563a1f] rounded-xl shadow-md p-4">
          <h2 className="text-[#563a1f] text-xl font-semibold mb-2">
            📚 To Be Read
          </h2>
          {renderBookList(books.tbr, "tbr")}
        </div>

        {/* Currently Reading */}
        <div className="bg-[#f7f0e0] text-[#563a1f] rounded-xl shadow-md p-4">
          <h2 className="text-[#563a1f] text-xl font-semibold mb-2">
            📖 Reading Now
          </h2>
          {renderBookList(books.reading, "reading")}
        </div>

        {/* Completed */}
        <div className="bg-[#f7f0e0] rounded-xl shadow-md p-4">
          <h2 className="text-[#563a1f] text-xl font-semibold mb-2">
            ✅ Completed
          </h2>
          {renderBookList(books.completed, "completed")}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-10 bg-[#f7f0e0] rounded-xl shadow-md p-6">
        <h2 className="text-xl text-[#563a1f] font-semibold mb-4">
          Recent Activity
        </h2>
        <ul className="text-sm space-y-2">
          {books.tbr.slice(-2).map((b) => (
            <li className="text-[#563a1f]" key={b.id}>
              ➤ Added "{b.title}" to TBR
            </li>
          ))}
          {books.reading.slice(-2).map((b) => (
            <li className="text-[#563a1f]" key={b.id}>
              ➤ Added "{b.title}" to Current Read
            </li>
          ))}
          {books.completed.slice(-2).map((b) => (
            <li className="text-[#563a1f]" key={b.id}>
              ➤ Marked "{b.title}" as Read
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
