import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

import { Transaccion } from "@/lib/types";

import HeaderTitle from "@components/HeaderTitle";

export default async function Page() {
  const data: Transaccion[] = [
    {
      id: "906743",
      tipo: "inscripcion a examen",
      fecha: "04/05/2023",
    },
    {
      id: "902473",
      tipo: "inscripcion a cursar",
      fecha: "31/03/2023",
    },
    {
      id: "902472",
      tipo: "inscripcion a cursar",
      fecha: "31/03/2023",
    },
  ];
  return (
    <>
      <header className="px-8">
        <HeaderTitle>Historial de Transacciones</HeaderTitle>
      </header>
      <div className="container px-0 md:px-8 mx-auto">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
