export type Payment = {
  id: string;
  description: string;
  ticket: string;
  amount: number;
  discount: number;
  date: string;
  place: string;
  status: "pagado" | "pendiente" | "vencido";
};
