"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function CategoryFilter() {
  const categories = ["Drama", "Comedia", "Acción", "Aventura"];
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleChange(value) {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("category", value);
    } else {
      params.delete("category");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <select
      className="bg-gray-800 text-white rounded-md p-2"
      onChange={(event) => handleChange(event.target.value)}
      value={searchParams.get("category") || ""}
    >
      <option value="">Todas las categorías</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
