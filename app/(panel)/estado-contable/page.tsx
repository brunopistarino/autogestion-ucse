import { getPayments } from "@/lib/utils";

import { Payment } from "@/lib/types";
import { columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  const payments = await getPayments();
  return payments;
}

export default async function Page() {
  const data = await getData();

  return (
    <>
      <header className="px-0 md:px-8 flex flex-col gap-6">
        <div>
          <p className="px-4 md:px-0 text-3xl font-semibold">Estado Contable</p>
        </div>
        <div className="px-4 md:px-0 flex gap-4 border-b overflow-x-auto">
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
      </header>
      <div className="container px-0 md:px-8 mx-auto">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
