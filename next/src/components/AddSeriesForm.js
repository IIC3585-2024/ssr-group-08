"use client";

import { useState } from "react";
import CategoryDropdown from "@/components/CategoryDropdown";
import StreamingServiceDropdown from "@/components/StreamingServiceDropdown";

export default function AddSeriesForm({ closeForm }) {
  const [formData, setFormData] = useState({
    title: "",
    streaming_service: "",
    number_of_seasons: "",
    episodes_per_season: "",
    description: "",
    category: "",
    image: "",
    rating: "",
    number_of_reviews: 1,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/series", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create series");
      }

      const result = await response.json();
      console.log("Series created:", result);
      closeForm();
    } catch (error) {
      console.error("Error creating series:", error);
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-white mb-4">
          Agregar Serie nueva
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-300"
            >
              Nombre de la serie
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="mt-1 p-2 block w-full bg-gray-900 text-white rounded-md"
              required
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="streaming_service"
              className="block text-sm font-medium text-gray-300"
            >
              Servicio de Streaming
            </label>
            <StreamingServiceDropdown
              value={formData.streaming_service}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="number_of_seasons"
              className="block text-sm font-medium text-gray-300"
            >
              Número de temporadas
            </label>
            <input
              type="number"
              id="number_of_seasons"
              name="number_of_seasons"
              className="mt-1 p-2 block w-full bg-gray-900 text-white rounded-md"
              required
              value={formData.number_of_seasons}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="episodes_per_season"
              className="block text-sm font-medium text-gray-300"
            >
              Episodios por temporada
            </label>
            <input
              type="number"
              id="episodes_per_season"
              name="episodes_per_season"
              className="mt-1 p-2 block w-full bg-gray-900 text-white rounded-md"
              required
              value={formData.episodes_per_season}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-300"
            >
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              className="mt-1 p-2 block w-full bg-gray-900 text-white rounded-md"
              required
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-300"
            >
              Categoría
            </label>
            <CategoryDropdown
              value={formData.category}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-300"
            >
              URL de la imagen
            </label>
            <input
              type="url"
              id="image"
              name="image"
              className="mt-1 p-2 block w-full bg-gray-900 text-white rounded-md"
              required
              value={formData.image}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-gray-300"
            >
              Rating
            </label>
            <input
              type="number"
              step="0.1"
              id="rating"
              name="rating"
              className="mt-1 p-2 block w-full bg-gray-900 text-white rounded-md"
              required
              value={formData.rating}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={closeForm}
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
              Agregar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
