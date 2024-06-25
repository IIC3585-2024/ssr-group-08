import SignupForm from "@/components/SignupForm";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full space-y-8 p-10 bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-center text-3xl font-extrabold text-white">
          Crea tu cuenta
        </h2>
        <SignupForm />
      </div>
    </div>
  );
}
