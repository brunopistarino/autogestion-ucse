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

export type Materia = {
  id: string;
  nombre: string;
  condicion:
    | "promocionado"
    | "aprobado"
    | "regular"
    | "inscripto regular"
    | "baja"
    | "no regular";
  // condicion: string;
  nota: number;
  fechaInscripcion: string;
  fechaCondicion: string;
  fechaVencimiento: string;
};
