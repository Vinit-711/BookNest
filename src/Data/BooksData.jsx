// src/Data/BooksData.js

// Helper to clean book descriptions
function cleanDescription(desc) {
  if (!desc) return "No description.";

  const junkKeywords = [
    "conversation starter",
    "summary",
    "study guide",
    "disclaimer",
    "download your copy",
    "supplement",
    "limited time offer"
  ];

  let cleaned = desc;

  // Remove junk sentences containing keywords
  junkKeywords.forEach((word) => {
    const regex = new RegExp(`[^.]*${word}[^.]*\\.`, "gi");
    cleaned = cleaned.replace(regex, "");
  });

  cleaned = cleaned.trim();
  return cleaned || "No description available.";
}

// Helper to upgrade Google Books image quality
function upgradeGoogleImage(url) {
  if (!url) return "/images/placeholder.jpg";

  let newUrl = url.replace("zoom=1", "zoom=3");

  if (!newUrl.includes("edge=curl")) {
    newUrl += "&edge=curl";
  }

  return newUrl;
}

export async function fetchBooksByAuthor(authorName) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
        authorName
      )}&maxResults=30&langRestrict=en`
    );

    const data = await response.json();
    if (!data.items) return [];

    return data.items
      // Skip junk editions like summaries/study guides
      .filter((item) => {
        const title = item.volumeInfo?.title?.toLowerCase() || "";
        return !(
          title.includes("summary") ||
          title.includes("conversation starter") ||
          title.includes("study guide")
        );
      })
      .map((item) => {
        const info = item.volumeInfo;

        return {
          title: info.title || "Untitled",
          authors: info.authors || ["Unknown Author"],
          image: upgradeGoogleImage(info.imageLinks?.thumbnail),
          description: cleanDescription(info.description),
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
