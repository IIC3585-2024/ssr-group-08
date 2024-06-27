"use server";

export async function getSeries() {
  const res = await fetch("http://localhost:3001/series");
  return res.json();
}

export async function getComments(seriesId) {
  const res = await fetch(
    `http://localhost:3001/comments?series_id=${seriesId}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch comments");
  }
  return res.json();
}

export async function createComment(comment) {
  const res = await fetch("http://localhost:3001/comments", {
    method: "POST",
    body: JSON.stringify({
      ...comment,
      user_id: parseInt(comment.user_id, 10),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to create comment");
  }
  return res.json();
}

export async function updateSeriesRating(series) {
  const res = await fetch(`http://localhost:3001/series/${series.id}`, {
    method: "PUT",
    body: JSON.stringify(series),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to update series rating");
  }
  return res.json();
}
