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
        </div>
      </div>
    </>
  );
}
