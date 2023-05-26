import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { Payment, Materia } from "@/lib/types";

export function getPayments(): Payment[] {
  return [
    {
      id: "728ed52f",
      description: "ARANCEL MENSUAL 5/2023",
      ticket: "CU-0006-0000283616",
      amount: 39400.0,
      discount: 0.0,
      date: "",
      place: "",
      status: "pendiente",
    },
    {
      id: "728ed52a",
      description: "ARANCEL MENSUAL 4/2023",
      ticket: "CU-0006-0000283114",
      amount: 35800.0,
      discount: 0.0,
      date: "",
      place: "",
      status: "vencido",
    },
    {
      id: "728ed52b",
      description: "MATRICULA ANUAL 2023",
      ticket: "CU-0006-0000282370",
      amount: 36700.0,
      discount: 0.0,
      date: "30/03/2023",
      place: "MERCADOPAGO",
      status: "pagado",
    },
    {
      id: "728ed52c",
      description: "ARANCEL MENSUAL 3/2023",
      ticket: "CU-0006-0000283051",
      amount: 32500.0,
      discount: 0.0,
      date: "03/04/2023",
      place: "PAGO FACIL",
      status: "pagado",
    },
    // ...
  ];
}

export function getMaterias(): Materia[] {
  return [
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
}
