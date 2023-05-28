import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

import { getExamenes } from "@/lib/utils";

import HeaderTitle from "@components/HeaderTitle";
import HeaderDescription from "@components/HeaderDescription";
import Header from "@components/Header";

export default async function Page() {
  const examenes = await getExamenes();

  return (
    <>
      <Header>
        <HeaderTitle>Cantidad de Inscriptos por Examen</HeaderTitle>
        <HeaderDescription>
          <p>MAYO 2023</p>
          <p>
            Total de Examenes: <strong>{examenes.length}</strong>
          </p>
        </HeaderDescription>
      </Header>
      <div className="container px-0 md:px-8 mx-auto">
        <DataTable columns={columns} data={examenes} />
      </div>
    </>
  );
}
