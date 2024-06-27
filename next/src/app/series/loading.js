function SerieCardSkeleton() {
  return (
    <div className="flex flex-col items-center justify-between gap-2 p-2 bg-gray-800 shadow-md rounded-lg h-full animate-pulse">
      <div className="flex flex-col gap-2">
        <div className="w-full h-48 bg-gray-700 rounded-lg"></div>
        <div className="w-32 h-6 bg-gray-700 rounded"></div>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <div className="w-24 h-4 bg-gray-700 rounded"></div>
        <div className="w-28 h-4 bg-gray-700 rounded"></div>
        <div className="w-40 h-4 bg-gray-700 rounded"></div>
        <div className="w-48 h-4 bg-gray-700 rounded"></div>
      </div>
      <div className="flex justify-between w-full mt-2">
        <div className="w-20 h-4 bg-gray-700 rounded"></div>
        <div className="w-16 h-4 bg-gray-700 rounded"></div>
      </div>
    </div>
  );
}

export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {[...Array(12)].map((_, index) => (
        <SerieCardSkeleton key={index} />
      ))}
    </div>
  );
}
