import Link from "next/link";

export default function SeriesCard({ series }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <img
        src={series.image}
        alt={series.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white">{series.title}</h3>
        <p className="text-gray-400">{series.streaming_service}</p>
        <p className="text-gray-400">{series.category}</p>
        <p className="text-yellow-400">
          {series.rating} ({series.number_of_reviews})
        </p>
        <Link
          href={`/series/${series.id}`}
          className="mt-8 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white font-medium"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
}
