"use client";

import { logout } from "@/app/lib/auth/actions";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault();
    logout();
    router.push("/auth/login");
  };

  return (
    <button
      className="text-white ml-4"
      href="/auth/login"
      onClick={handleClick}
    >
      Cerrar Sesión
    </button>
  );
}
