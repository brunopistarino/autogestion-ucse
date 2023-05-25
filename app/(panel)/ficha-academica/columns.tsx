"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Materia } from "@/lib/types";

export const columns: ColumnDef<Materia>[] = [
  {
    accessorKey: "nombre",
    header: "Materia",
  },
  {
    accessorKey: "fechaInscripcion",
    header: "F. Inscripción",
  },
  {
    accessorKey: "fechaCondicion",
    header: "F. Condición",
  },
  {
    accessorKey: "fechaVencimiento",
    header: "F. Vencimiento",
  },
  {
    accessorKey: "nota",
    header: "Nota",
  },
  {
    accessorKey: "condicion",
    header: "Condición",
    cell: ({ row }) => {
      const condicion = String(row.getValue("condicion"));

      return (
        <span
          className={`inline-block px-2 py-1 rounded-full text-xs font-semibold capitalize ${
            condicion === "promocionado"
              ? "bg-yellow-200 text-yellow-800 border border-yellow-500"
              : condicion === "aprobado"
              ? "bg-green-200 text-green-800 border border-green-500"
              : condicion === "regular"
              ? "bg-red-200 text-red-800 border border-red-500"
              : condicion === "inscripto regular"
              ? "bg-gray-200 text-gray-800 border border-gray-500"
              : condicion === "baja"
              ? "bg-red-200 text-red-800 border border-red-500"
              : condicion === "no regular"
              ? "bg-blue-200 text-blue-800 border border-blue-500"
              : "bg-red-200 text-red-800 border border-red-500"
          }`}
        >
          {condicion}
        </span>
      );
    },
  },
];
