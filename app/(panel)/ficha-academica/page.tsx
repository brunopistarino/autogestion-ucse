import { Materia } from "@/lib/types";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function Page() {
  const materias: Materia[] = [
    {
      id: "1",
      nombre: "Filosofía",
      condicion: "inscripto regular",
      fechaInscripcion: "31/03/2023",
      fechaCondicion: "31/03/2023",
      fechaVencimiento: "31/01/2024",
    },
    {
      id: "2",
      nombre: "Algortimos y Programación",
      condicion: "promocionado",
      nota: 8,
      fechaInscripcion: "18/03/2022",
      fechaCondicion: "17/11/2022",
    },
    {
      id: "3",
      nombre: "Álgebra",
      condicion: "promocionado",
      nota: 8,
      fechaInscripcion: "18/03/2022",
      fechaCondicion: "29/06/2022",
    },
    {
      id: "4",
      nombre: "Cálculo I",
      condicion: "promocionado",
      nota: 9,
      fechaInscripcion: "18/03/2022",
      fechaCondicion: "27/06/2022",
    },
    {
      id: "5",
      nombre: "Arquitectura de Computadoras",
      condicion: "aprobado",
      nota: 8,
      fechaInscripcion: "18/03/2022",
      fechaCondicion: "11/07/2022",
    },
    {
      id: "6",
      nombre: "Comunicación Oral y Escrita",
      condicion: "promocionado",
      nota: 8,
      fechaInscripcion: "18/03/2022",
      fechaCondicion: "27/06/2022",
    },
    {
      id: "7",
      nombre: "Cálculo II",
      condicion: "promocionado",
      nota: 9,
      fechaInscripcion: "04/07/2022",
      fechaCondicion: "10/11/2022",
    },
    {
      id: "8",
      nombre: "Álgebra lineal",
      condicion: "promocionado",
      nota: 7,
      fechaInscripcion: "04/07/2022",
      fechaCondicion: "14/11/2022",
    },
    {
      id: "9",
      nombre: "Organización Empresarial",
      condicion: "aprobado",
      nota: 10,
      fechaInscripcion: "06/07/2022",
      fechaCondicion: "11/05/2023",
    },
    {
      id: "10",
      nombre: "Inglés",
      condicion: "inscripto regular",
      fechaInscripcion: "31/03/2023",
      fechaCondicion: "31/03/2023",
      fechaVencimiento: "31/01/2024",
    },
    {
      id: "11",
      nombre: "Programación I",
      condicion: "inscripto regular",
      fechaInscripcion: "31/03/2023",
      fechaCondicion: "31/03/2023",
      fechaVencimiento: "31/01/2024",
    },
    {
      id: "12",
      nombre: "Teología",
      condicion: "inscripto regular",
      fechaInscripcion: "31/03/2023",
      fechaCondicion: "31/03/2023",
      fechaVencimiento: "31/01/2024",
    },
    {
      id: "13",
      nombre: "Estructuras de Datos",
      condicion: "inscripto regular",
      fechaInscripcion: "31/03/2023",
      fechaCondicion: "31/03/2023",
      fechaVencimiento: "31/01/2024",
    },
    {
      id: "14",
      nombre: "Sistemas de Información",
      condicion: "inscripto regular",
      fechaInscripcion: "31/03/2023",
      fechaCondicion: "31/03/2023",
      fechaVencimiento: "31/01/2024",
    },
    {
      id: "15",
      nombre: "Física I",
      condicion: "inscripto regular",
      fechaInscripcion: "31/03/2023",
      fechaCondicion: "31/03/2023",
      fechaVencimiento: "31/01/2024",
    },
  ];

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
