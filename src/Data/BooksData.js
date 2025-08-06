// src/Data/BooksData.js
export async function fetchBooksByAuthor(authorName) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
        authorName
      )}&maxResults=30&langRestrict=en`
    );

    const data = await response.json();

    if (!data.items) return [];

    return data.items.map((item) => {
      const info = item.volumeInfo;
      return {
        title: info.title || "Untitled",
        authors: info.authors || ["Unknown Author"],
        image: info.imageLinks?.thumbnail || "/images/placeholder.jpg",
        description: info.description || "No description.",
        category: info.categories?.[0] || "General",
        averageRating: info.averageRating || null,
        ratingsCount: info.ratingsCount || null,
      };
    });
  } catch (error) {
    console.error("Error fetching books by author:", error);
    return [];
  }
}
