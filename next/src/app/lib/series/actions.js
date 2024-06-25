"use server";

export async function getSeries() {
  const res = await fetch("http://localhost:3001/series");
  return res.json();
}
