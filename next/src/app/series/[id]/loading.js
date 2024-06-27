export default function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-gray-900 p-4 flex justify-center items-center">
      <div className="max-w-5xl w-full p-8 bg-gray-800 shadow-md rounded-lg animate-pulse">
        <div className="h-8 bg-gray-700 rounded mb-4 w-3/4"></div>
        <div className="flex flex-col sm:flex-row items-center sm:items-start">
          <div className="flex flex-col sm:mr-6">
            <div className="bg-gray-700 rounded-lg w-48 h-64"></div>
            <div className="mt-4">
              <div className="h-6 bg-gray-700 rounded mb-2 w-40"></div>
              <div className="h-6 bg-gray-700 rounded mb-2 w-32"></div>
              <div className="h-6 bg-gray-700 rounded mb-2 w-36"></div>
            </div>
          </div>
          <div className="flex flex-col mt-4 sm:mt-0 flex-1">
            <div className="h-4 bg-gray-700 rounded mb-4 w-full"></div>
            <div className="h-4 bg-gray-700 rounded mb-4 w-3/4"></div>
            <div className="h-4 bg-gray-700 rounded mb-4 w-1/2"></div>
            <div className="flex flex-wrap mb-4">
              <div className="h-8 bg-gray-700 rounded mb-2 w-20 mr-2"></div>
              <div className="h-8 bg-gray-700 rounded mb-2 w-24 mr-2"></div>
              <div className="h-8 bg-gray-700 rounded mb-2 w-16 mr-2"></div>
            </div>
            <div className="h-4 bg-gray-700 rounded mb-4 w-1/3"></div>
            <div className="h-4 bg-gray-700 rounded mb-4 w-2/3"></div>
          </div>
        </div>
        <div className="h-8 bg-gray-700 rounded mb-4 w-1/2"></div>
        <div className="h-6 bg-gray-700 rounded mb-2 w-full"></div>
        <div className="h-6 bg-gray-700 rounded mb-2 w-full"></div>
        <div className="h-6 bg-gray-700 rounded mb-2 w-full"></div>
      </div>
    </div>
  );
}
