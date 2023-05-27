import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

import { Transaccion } from "@/lib/types";

import HeaderTitle from "@components/HeaderTitle";
import Header from "@components/Header";

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
      <Header>
        <HeaderTitle>Historial de Transacciones</HeaderTitle>
        <div>
          <p>Listado de transacciones efectuadas en los últimos 6 meses</p>
          <p>
            Total de transacciones: <strong>{data.length}</strong>
          </p>
        </div>
      </Header>
      <div className="container px-0 md:px-8 mx-auto">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
