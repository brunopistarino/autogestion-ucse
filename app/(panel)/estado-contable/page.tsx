import { getPayments } from "@/lib/utils";

import { Payment } from "@/lib/types";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

import Header from "@components/Header";
import HeaderTitle from "@components/HeaderTitle";

async function getData(): Promise<Payment[]> {
  const payments = await getPayments();
  return payments;
}

export default async function Page() {
  const data = await getData();

  return (
    <>
      <Header>
        <HeaderTitle>Estado Contable</HeaderTitle>
        <div className="px-4 md:px-0 flex gap-4 border-b overflow-x-auto mt-2">
          <button className="text-blue-700 font-bold border-b-2 border-blue-700 px-1 pb-2.5 whitespace-nowrap">
            Aranceles
          </button>
          <button className="px-1 pb-3 whitespace-nowrap">
            Planes de Pago
          </button>
          <button className="px-1 pb-3 whitespace-nowrap">Examen Libre</button>
          <button className="px-1 pb-3 whitespace-nowrap">
            Detalle Completo
          </button>
          <button className="px-1 pb-3 whitespace-nowrap">Recibos</button>
        </div>
      </Header>
      <div className="container px-0 md:px-8 mx-auto">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
