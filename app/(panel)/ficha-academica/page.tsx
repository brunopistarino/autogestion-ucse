import { Materia } from "@/lib/types";
import { columns } from "./columns";
import { DataTable } from "./data-table";

import { getMaterias } from "@/lib/utils";

export default async function Page() {
  const materias = await getMaterias();

  const promedio = materias.reduce((acc, materia) => {
    if (materia.nota) {
      return acc + materia.nota;
    } else {
      return acc;
    }
  }, 0);
  const cantidadMaterias = materias.filter((materia) => materia.nota).length;
  const promedioFinal = promedio / cantidadMaterias;

  return (
    <>
      <header className="px-8 flex flex-col gap-4">
        <p className="text-3xl font-semibold">Ficha Académica</p>
        <div className="flex gap-6">
          <div className="flex flex-col w-full p-6 rounded-md border gap-2 bg-white">
            <p>Promedio</p>
            <p className="text-4xl font-semibold">{promedioFinal}</p>
          </div>
          <div className="flex flex-col w-full p-6 rounded-md border gap-2 bg-white">
            <p>Aprobadas</p>
            <p className="text-4xl font-semibold">{cantidadMaterias}</p>
          </div>
          <div className="flex flex-col w-full p-6 rounded-md border gap-2 bg-white">
            <p>Materias restantes</p>
            <p className="text-4xl font-semibold">{48 - cantidadMaterias}</p>
          </div>
        </div>
      </header>
      <div className="container px-0 md:px-8 mx-auto">
        <DataTable columns={columns} data={materias} />
      </div>
    </>
  );
}
