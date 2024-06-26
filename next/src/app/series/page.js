import { getSeries } from "@/app/lib/series/actions";
import SeriesCard from "@/components/SeriesCard";
import Search from "@/components/Search";
import CategoryFilter from "@/components/CategoryFilter";
import StreamingServiceFilter from "@/components/StreamingServiceFilter";
import StarFilter from "@/components/StarFilter";

export default async function Page({ searchParams }) {
  const query = searchParams?.query || "";
  const category = searchParams?.category || "";
  const service = searchParams?.service || "";
  const stars = parseFloat(searchParams?.stars || 0);

  const seriesData = await getSeries();

  const filteredSeries = seriesData.filter((series) => {
    const matchesQuery = series.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesCategory = category ? series.category === category : true;
    const matchesService = service
      ? series.streaming_service === service
      : true;
    const matchesStars = stars ? series.rating >= stars : true;
    return matchesQuery && matchesCategory && matchesService && matchesStars;
  });

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white text-center mb-8">
          Series Recomendadas
        </h1>
        <Search placeholder="Buscar series..." />
        <div className="flex justify-center gap-4 my-4">
          <CategoryFilter />
          <StreamingServiceFilter />
          <StarFilter />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {filteredSeries.map((series) => (
            <SeriesCard key={series.id} series={series} />
          ))}
        </div>
      </div>
    </div>
  );
}
