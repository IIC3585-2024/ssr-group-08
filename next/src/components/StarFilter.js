"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function StarFilter() {
  const stars = [1, 2, 3, 4, 5];
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleChange(value) {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("stars", value);
    } else {
      params.delete("stars");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <select
      className="bg-gray-800 text-white rounded-md p-2"
      onChange={(event) => handleChange(event.target.value)}
      value={searchParams.get("stars") || ""}
    >
      <option value="">Todas las calificaciones</option>
      {stars.map((star) => (
        <option key={star} value={star}>
          {star} estrellas y más
        </option>
      ))}
    </select>
  );
}
