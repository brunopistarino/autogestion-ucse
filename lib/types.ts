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
  nota?: number;
  fechaInscripcion?: string;
  fechaCondicion?: string;
  fechaVencimiento?: string;
};

export type Transaccion = {
  id: string;
  tipo: "inscripcion a examen" | "inscripcion a cursar";
  fecha: string;
};
