"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
import { Payment } from "@/lib/types";

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "description",
    header: "Descripción",
  },
  {
    accessorKey: "ticket",
    header: "Cupón",
  },
  {
    accessorKey: "amount",
    header: "Importe",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formattedAmount = new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
      }).format(amount);

      return formattedAmount;
    },
  },
  {
    accessorKey: "discount",
    header: "Descuento",
  },
  {
    accessorKey: "date",
    header: "Fecha Pago",
  },
  {
    accessorKey: "place",
    header: "Lugar Pago",
  },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => {
      const status = String(row.getValue("status"));

      return (
        <span
          className={`inline-block px-2 py-1 rounded-full text-xs font-semibold capitalize ${
            status === "pagado"
              ? "bg-green-200 text-green-800 border border-green-500"
              : status === "pendiente"
              ? "bg-gray-200 text-gray-800 border border-gray-500"
              : "bg-red-200 text-red-800 border border-red-500"
          }`}
        >
          {status}
        </span>
      );
    },
  },
];
