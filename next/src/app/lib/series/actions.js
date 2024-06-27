"use server";

import { redirect } from "next/navigation";

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
