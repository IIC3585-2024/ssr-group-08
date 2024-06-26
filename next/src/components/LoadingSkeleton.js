export default function LoadingSkeleton() {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="w-full h-48 bg-gray-700"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-700 mb-2"></div>
        <div className="h-4 bg-gray-700 mb-2"></div>
        <div className="h-4 bg-gray-700 mb-2"></div>
        <div className="h-4 bg-gray-700 mb-4"></div>
        <div className="h-10 bg-gray-700"></div>
      </div>
    </div>
  );
}
