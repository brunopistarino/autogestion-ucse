import Link from "next/link";

export default function Page() {
  const materias = [
    {
      nombre: "Matemática I",
      estado: "Aprobada",
      nota: "10",
      fecha: "10/10/2021",
    },
    {
      nombre: "Matemática II",
      estado: "Aprobada",
      nota: "10",
      fecha: "10/10/2021",
    },
    {
      nombre: "Matemática III",
      estado: "Aprobada",
      nota: "10",
      fecha: "10/10/2021",
    },
    {
      nombre: "Matemática IV",
      estado: "Aprobada",
      nota: "10",
      fecha: "10/10/2021",
    },
    {
      nombre: "Matemática V",
      estado: "Aprobada",
      nota: "10",
      fecha: "10/10/2021",
    },
    {
      nombre: "Matemática VI",
      estado: "Aprobada",
      nota: "10",
      fecha: "10/10/2021",
    },
  ];
  return (
    <>
      <div className="flex flex-col bg-slate-100">
        <p className="text-3xl font-semibold	">Accesos Directos</p>
        <div className="flex">
          <Link href="">
            <p>Ficha Académica</p>
          </Link>
        </div>
      </div>
    </>
  );
}
