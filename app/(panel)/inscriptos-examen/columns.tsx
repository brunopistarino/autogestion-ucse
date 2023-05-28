"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Examen } from "@/lib/types";

export const columns: ColumnDef<Examen>[] = [
  {
    accessorKey: "id",
    header: "Código Examen",
  },
  {
    accessorKey: "materia",
    header: "Materia",
  },
  {
    accessorKey: "fecha",
    header: "Fecha",
  },
  {
    accessorKey: "catedra",
    header: "Cátedra",
  },
  {
    accessorKey: "inscriptos",
    header: "Inscriptos",
  },
];
