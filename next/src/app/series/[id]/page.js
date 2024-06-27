import { Suspense } from "react";
import { getSeries } from "@/app/lib/series/actions";
import { getSessionData } from "@/app/lib/auth/actions";
import Comments from "@/components/Comments";

export default async function SeriesDetail({ params }) {
  const session = await getSessionData();
  const isAuthenticated = !!session;

  const seriesData = await getSeries();
  const series = seriesData.find((s) => s.id === parseInt(params.id, 10));

  if (!series) {
    return <div className="text-white">Serie no encontrada</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white text-center mb-8">
          {series.title}
        </h1>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md overflow-hidden">
          <img
            src={series.image}
            alt={series.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <div className="text-white">
            <p>
              <strong>Servicio de Streaming:</strong> {series.streaming_service}
            </p>
            <p>
              <strong>Número de temporadas:</strong> {series.number_of_seasons}
            </p>
            <p>
              <strong>Episodios por temporada:</strong>{" "}
              {series.episodes_per_season}
            </p>
            <p>
              <strong>Descripción:</strong> {series.description}
            </p>
            <p>
              <strong>Categoría:</strong> {series.category}
            </p>
            <p>
              <strong>Rating:</strong> {series.rating}
            </p>
            <p>
              <strong>Número de reseñas:</strong> {series.number_of_reviews}
            </p>
          </div>
        </div>
        <Suspense
          fallback={<div className="text-white">Cargando comentarios...</div>}
        >
          <Comments seriesId={series.id} />
        </Suspense>
        {isAuthenticated && (
          <div className="bg-gray-800 p-4 rounded-lg shadow-md overflow-hidden mt-4">
            <h2 className="text-2xl font-bold text-white mb-4">
              Agregar Comentario y Calificación
            </h2>
            <p className="text-gray-400">
              Formulario para agregar comentario y calificación próximamente.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
