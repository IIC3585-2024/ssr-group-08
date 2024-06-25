// /layouts/MainLayout.js
import Link from "next/link";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <div className="max-w-md w-full space-y-8 p-10 bg-gray-800 rounded-xl shadow-lg">
        <nav className="flex justify-between mb-4">
          <Link href="/auth/login">
            <a className="text-white">Login</a>
          </Link>
          <Link href="/auth/signup">
            <a className="text-white">Signup</a>
          </Link>
        </nav>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
