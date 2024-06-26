import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { getSessionData } from "./lib/auth/actions";
import { getUser } from "./lib/auth/actions";
import LogoutButton from "@/components/LogoutButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getSessionData();
  const isAuthenticated = !!session;

  let user = null;
  if (isAuthenticated) {
    user = await getUser(session);
  }

  return (
    <html lang="es">
      <body className={inter.className}>
        <nav className="bg-gray-800 p-4">
          <div className="max-w-7xl mx-auto flex justify-between">
            <div className="flex space-x-4">
              <Link className="text-white" href="/">
                Inicio
              </Link>
              <Link className="text-white" href="/series">
                Series
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <span className="text-white">
                    {user
                      ? `${user.first_name} ${user.last_name}`
                      : "Cargando..."}
                  </span>
                  <LogoutButton />
                </>
              ) : (
                <>
                  <Link className="text-white ml-4" href="/auth/login">
                    Inicio de Sesión
                  </Link>
                  <Link className="text-white ml-4" href="/auth/signup">
                    Registrarse
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
        <main className="min-h-screen bg-gray-900">{children}</main>
      </body>
    </html>
  );
}
