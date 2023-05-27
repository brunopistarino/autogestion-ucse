import Link from "next/link";

import { Materia } from "@/lib/types";
import { columns } from "./columns";
import { DataTable } from "./data-table";

import { getMaterias } from "@/lib/utils";

import ClipboardIcon from "@icons/clipboard.svg";

import Header from "@components/Header";
import HeaderTitle from "@components/HeaderTitle";
import HeaderDescription from "@components/HeaderTitle";
import CTooltip from "@components/Tooltip";

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
      <Header>
        <HeaderTitle>Ficha Académica</HeaderTitle>
        <div className="flex px-4 md:px-0 gap-2 md:gap-6 flex-col sm:flex-row">
          <div className="flex flex-col w-full p-6 rounded-md border gap-2 bg-white">
            <p>Promedio</p>
            <p className="text-4xl font-semibold">{promedioFinal}</p>
          </div>
          <div className="flex flex-col w-full p-6 rounded-md border gap-2 bg-white">
            <p>Aprobadas</p>
            <p className="text-4xl font-semibold">{cantidadMaterias}</p>
            {/* <p>
              <span className="text-4xl font-semibold">{cantidadMaterias}</span>
              /48
            </p> */}
          </div>
          <div className="flex flex-col relative w-full p-6 rounded-md border gap-2 bg-white">
            <p>Materias restantes</p>
            <p className="text-4xl font-semibold">{48 - cantidadMaterias}</p>
            <Link
              className="absolute top-4 right-4 p-1 pb-0 text-gray-500 hover:bg-gray-200 rounded-md transition-colors duration-2"
              href="/RPTCorrelatividadesInforme_2022.pdf"
              target="_blank"
            >
              <CTooltip text="Correlativas">
                <ClipboardIcon />
              </CTooltip>
            </Link>
          </div>
        </div>
      </Header>
      <div className="container px-0 md:px-8 mx-auto">
        <DataTable columns={columns} data={materias} />
      </div>
    </>
  );
}
