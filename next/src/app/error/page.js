import BackButton from "@/components/BackButton";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full space-y-8 p-10 bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-center text-3xl font-extrabold text-white">
          Error
        </h2>
        <p className="text-center text-white">Ups, algo salió mal.</p>
        <p className="text-center text-white">
          Como es un framework SSR no te puedo mostrar el error en el formulario
          a menos que lo cambie a CSR.
        </p>
        <p className="text-center text-white">
          Asi que por favor apreta el siguiente botón para volver a la página
          anterior
        </p>
        <BackButton />
      </div>
    </div>
  );
}
