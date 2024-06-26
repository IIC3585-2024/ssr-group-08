"use server";

import { redirect } from "next/navigation";

export async function getSeries() {
  const res = await fetch("http://localhost:3001/series");
  return res.json();
}

// Este era
export async function createSeries(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  console.log("event", event);
  console.log("event.currentTarget", event.currentTarget);
  console.log("formData", formData);
  // const body = {
  //   title: formData.get("title"),
  //   streaming_service: formData.get("streaming-service"),
  //   number_of_seasons: formData.get("number-of-seasons"),
  //   episodes_per_season: formData.get("episodes-per-season"),
  //   description: formData.get("description"),
  //   category: formData.get("category"),
  //   image: formData.get("image"),
  //   rating: formData.get("rating"),
  //   number_of_reviews: 1,
  // };
  // const res = await fetch("http://localhost:3001/series", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(body),
  // });

  // if (!res.ok) {
  //   throw new Error("Failed to create series");
  // } else {
  //   redirect("/series");
  // }

  // return await res.json();
}
