import { getSeries } from "@/app/lib/series/actions";
import SeriesCard from "@/components/SeriesCard";
import Search from "@/components/Search";

export default async function Page({ searchParams }) {
  const query = searchParams?.query || "";
  const seriesData = await getSeries();

  const filteredSeries = seriesData.filter((series) =>
    series.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white text-center mb-8">
          Series
        </h1>
        <Search placeholder="Buscar series..." />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {filteredSeries.map((series) => (
            <SeriesCard key={series.id} series={series} />
          ))}
        </div>
      </div>
    </div>
  );
}
