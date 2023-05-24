import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { Payment } from "@/lib/types";

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
