"use client";

import { login } from "@/app/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";

const initialState = {
  message: "",
};

export default function LoginForm() {
  const [state, formAction] = useFormState(login, initialState);

  return (
    <form className="mt-8 space-y-6" action={formAction}>
      <div className="rounded-md shadow-sm -space-y-px">
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
        <p aria-live="polite" className="sr-only">
          {state?.message}
        </p>
      </div>
      <LoginButton />
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus(login);

  const handleClick = (event) => {
    if (pending) {
      event.preventDefault();
    }
  };

  return (
    <button
      disabled={pending}
      type="submit"
      onClick={handleClick}
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Inicia Sesión
    </button>
  );
}
