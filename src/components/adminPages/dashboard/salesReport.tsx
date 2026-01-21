"use client";

import { useState } from "react";
import { reportData } from "@/data/dataReport";
import { Bar } from "./bar";

export default function SalesReport() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const maxCurrent = Math.max(...reportData.map(r => r.current));
  const maxPrevious = Math.max(...reportData.map(r => r.previous));

  const toggleCategory = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  let currentParent: string | null = null;

  return (
    <div className="w-full max-w-5xl rounded-lg border bg-white p-6 shadow">
      <div className="grid grid-cols-[2fr_1fr_1fr] border-b pb-3 font-semibold text-gray-700">
        <div>Categoria</div>
        <div className="text-right">Ano Atual</div>
        <div className="text-right">Ano Anterior</div>
      </div>

      <div className="divide-y">
        {reportData.map(row => {
          if (row.level === 0) currentParent = row.id;

          const isChildHidden =
            row.level === 1 && !expanded[currentParent ?? ""];

          if (isChildHidden) return null;

          return (
            <div
              key={row.id}
              className={`grid grid-cols-[2fr_1fr_1fr] items-center py-3 ${
                row.highlight ? "font-semibold" : ""
              }`}
            >
              {/* Categoria */}
              <div
                className={`flex items-center gap-2 ${
                  row.level === 1 ? "pl-6 text-gray-600" : "cursor-pointer"
                }`}
                onClick={() => row.level === 0 && toggleCategory(row.id)}
              >
                {row.level === 0 ? (expanded[row.id] ? "▾" : "▸") : "•"}
                {row.label}
              </div>

              {/* Ano Atual */}
              <Bar
                value={row.current}
                max={maxCurrent}
                color="bg-blue-500"
                bg="bg-blue-100"
              />

              {/* Ano Anterior */}
              <Bar
                value={row.previous}
                max={maxPrevious}
                color="bg-gray-400"
                bg="bg-gray-200"
                small
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
