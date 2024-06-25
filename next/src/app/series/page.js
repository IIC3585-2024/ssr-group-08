import { getSeries } from "@/app/lib/series/actions";
import SeriesCard from "@/components/SeriesCard";

export default async function Page() {
  const seriesData = await getSeries();
  console.log(seriesData);
  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white text-center mb-8">
          Series
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {seriesData.map((series) => (
            <SeriesCard key={series.id} series={series} />
          ))}
        </div>
      </div>
    </div>
  );
}
