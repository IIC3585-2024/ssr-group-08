"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function StreamingServiceFilter() {
  const services = ["Netflix", "Amazon Prime", "Hulu", "Disney+"];
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleChange(value) {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("service", value);
    } else {
      params.delete("service");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <select
      className="bg-gray-800 text-white rounded-md p-2"
      onChange={(event) => handleChange(event.target.value)}
      value={searchParams.get("service") || ""}
    >
      <option value="">Todos los servicios</option>
      {services.map((service) => (
        <option key={service} value={service}>
          {service}
        </option>
      ))}
    </select>
  );
}
