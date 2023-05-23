"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  description: string;
  ticket: string;
  amount: number;
  discount: number;
  date: string;
  place: string;
  status: "pagado" | "pendiente" | "vencido";
};

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
  },
];
