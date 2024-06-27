"use client";

import { useState } from "react";
import { createComment, updateSeriesRating } from "@/app/lib/series/actions";

export default function AddCommentForm({
  userId,
  series,
  currentRating,
  currentNumberOfReviews,
}) {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createComment({
        user_id: userId,
        series_id: series.id,
        comment,
      });

      const newNumberOfReviews = currentNumberOfReviews + 1;
      const newRating =
        (currentRating * currentNumberOfReviews + parseFloat(rating)) /
        newNumberOfReviews;

      const roundedRating = newRating.toFixed(1);

      const updatedSeries = {
        ...series,
        rating: roundedRating,
        number_of_reviews: newNumberOfReviews,
      };
      await updateSeriesRating(updatedSeries);

      setComment("");
      setRating("");
    } catch (error) {
      console.error("Error adding comment and rating:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="comment"
          className="block text-sm font-medium text-gray-300"
        >
          Comentario
        </label>
        <textarea
          id="comment"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="mt-1 p-2 block w-full bg-gray-900 text-white rounded-md"
          required
        />
      </div>
      <div>
        <label
          htmlFor="rating"
          className="block text-sm font-medium text-gray-300"
        >
          Calificación
        </label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="mt-1 p-2 block w-full bg-gray-900 text-white rounded-md"
          min="1"
          max="5"
          step="0.1"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
      >
        Agregar
      </button>
    </form>
  );
}
