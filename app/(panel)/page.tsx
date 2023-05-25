import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="flex flex-col bg-slate-100">
        <p className="text-3xl font-semibold">Accesos Directos</p>
        <div className="flex">
          <Link href="">
            <p>Ficha Académica</p>
          </Link>
          <Link href="">
            <p>Estado Contable</p>
          </Link>
          <Link href="">
            <p>Datos Personales</p>
          </Link>
          <Link href="">
            <p>Historial Transacciones</p>
          </Link>
          <Link href="">
            <p>Cert. Alum. Reg</p>
          </Link>
        </div>
      </div>
    </>
  );
}
