// src/Data/AuthorsData.js
import { fetchBooksByAuthor } from "./BooksData";

export async function fetchAuthorsBySearch(searchTerm) {
  try {
    // Fetch books that match the search term (title or author)
    const books = await fetchBooksByAuthor(searchTerm);

    const uniqueAuthors = [];
    const seen = new Set();

    for (const book of books) {
      const name = book.authors?.[0];
      const image = book.image;
      if (name && !seen.has(name)) {
        seen.add(name);
        uniqueAuthors.push({
          id: name,
          name,
          image: image || "/images/placeholder.jpg",
          desc: book.title || "No notable title found",
          genre: book.category || "General",
        });
      }
    }

    return uniqueAuthors;
  } catch (err) {
    console.error("Error fetching authors:", err);
    return [];
  }
}
