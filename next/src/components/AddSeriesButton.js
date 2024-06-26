"use client";

import { useState } from "react";
import AddSeriesForm from "@/components/AddSeriesForm";

export default function AddSeriesButton({ createSeries }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <button
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded ml-auto"
        onClick={() => setShowForm(true)}
      >
        Recomendar serie nueva
      </button>
      {showForm && (
        <AddSeriesForm
          closeForm={() => setShowForm(false)}
          createSeries={createSeries}
        />
      )}
    </>
  );
}
