"use client";

const categories = ["Drama", "Comedia", "Acción", "Aventura"];

export default function CategoryDropdown({ value, onChange }) {
  return (
    <select
      className="mt-1 p-2 block w-full bg-gray-900 text-white rounded-md"
      onChange={onChange}
      value={value}
      name="category"
    >
      <option value="">Seleccione una categoría</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
