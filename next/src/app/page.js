import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-10">
      <div className="max-w-2xl w-full space-y-8 p-10 bg-gray-800 rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-extrabold">
          Bienvenido al Proyecto de Recomendaciones de Series
        </h1>
        <p className="text-lg">
          Puedes ir a ver las series a través del siguiente botón.
        </p>
        <Link href="/series">
          <button className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white font-medium">
            Ver Series
          </button>
        </Link>
      </div>
    </div>
  );
}
