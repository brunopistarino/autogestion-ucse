"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Transaccion } from "@/lib/types";

import SearchIcon from "@icons/search-refraction.svg";
import PrinterIcon from "@icons/printer.svg";

export const columns: ColumnDef<Transaccion>[] = [
  {
    accessorKey: "id",
    header: "Numero Transacción",
  },
  {
    accessorKey: "tipo",
    header: "Tipo Inscripción",
    cell: ({ row }) => {
      const tipo = String(row.getValue("tipo"));
      return tipo.charAt(0).toUpperCase() + tipo.slice(1);
    },
  },
  {
    accessorKey: "fecha",
    header: "Fecha Inscripción",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <span className="flex gap-4">
          <SearchIcon className="cursor-pointer text-blue-700" />
          <PrinterIcon className="cursor-pointer text-blue-700" />
        </span>
      );
    },
  },
];
