import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      description: "ARANCEL MENSUAL 5/2023",
      ticket: "CU-0006-0000283616",
      amount: 39400.0,
      discount: 0.0,
      date: "01/05/2023",
      place: "MERCADOPAGO",
      status: "pendiente",
    },
    {
      id: "728ed52a",
      description: " ARANCEL MENSUAL 4/2023",
      ticket: "CU-0006-0000283114",
      amount: 35800.0,
      discount: 0.0,
      date: "11/04/2023",
      place: "UCSE DAR",
      status: "pagado",
    },
    // ...
  ];
}

export default async function Page() {
  const data = await getData();

  return (
    <>
      <header className="pr-8 pl-8 flex flex-col gap-6">
        <div>
          <p className="text-3xl font-semibold">Estado Contable</p>
        </div>
        <div className="flex gap-4">
          <button>Aranceles</button>
          <button>Planes de Pago</button>
          <button>Examen Libre</button>
          <button>Detalle Completo</button>
          <button>Recibos</button>
        </div>
      </header>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
