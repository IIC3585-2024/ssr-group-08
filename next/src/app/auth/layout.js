import Link from "next/link";

export default function Page({ children }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <div className="max-w-md w-full space-y-8 p-10 bg-gray-800 rounded-xl shadow-lg">
        <nav className="flex justify-between mb-4">
          <Link className="text-white" href="/auth/login">
            Login
          </Link>
          <Link className="text-white" href="/auth/signup">
            Signup{" "}
          </Link>
        </nav>
        {children}
      </div>
    </div>
  );
}
