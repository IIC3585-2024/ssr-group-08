"use client";

import { signup } from "@/app/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(signup, undefined);

  return (
    <form className="mt-8 space-y-6" action={dispatch}>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="first-name" className="sr-only">
            Primer nombre
          </label>
          <input
            type="text"
            name="email"
            placeholder="First name address"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="last-name" className="sr-only">
            Primer apellido
          </label>
          <input
            type="text"
            name="email"
            placeholder="Last name"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email-address" className="sr-only">
            Correo electrónico
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
        </div>
        <div>{errorMessage && <p>{errorMessage}</p>}</div>
      </div>
      <div>
        <SignupButton />
      </div>
    </form>
  );
}

function SignupButton() {
  const router = useRouter();
  const { pending } = useFormStatus(signup);

  const handleClick = (event) => {
    if (pending) {
      event.preventDefault();
      router.push("/auth/login");
    }
  };

  return (
    <button
      aria-disabled={pending}
      type="submit"
      onClick={handleClick}
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Crear cuenta
    </button>
  );
}
