"use client";

const services = [
  "Disney+",
  "Netflix",
  "Amazon Prime",
  "Paramount+",
  "Star+",
  "HBO",
];

export default function StreamingServiceDropdown({ value, onChange }) {
  return (
    <select
      className="mt-1 p-2 block w-full bg-gray-900 text-white rounded-md"
      onChange={onChange}
      value={value}
      name="streaming_service"
    >
      <option value="">Seleccione un servicio de streaming</option>
      {services.map((service) => (
        <option key={service} value={service}>
          {service}
        </option>
      ))}
    </select>
  );
}
