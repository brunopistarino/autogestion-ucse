import Link from "next/link";

import FolderIcon from "@icons/folder.svg";
import FileIcon from "@icons/file-05.svg";
import UserIcon from "@icons/user-01.svg";
import RefreshIcon from "@icons/refresh-ccw-01.svg";
import PrinterIcon from "@icons/printer.svg";

export default function Page() {
  const accesos = [
    {
      name: "Ficha Académica",
      icon: <FolderIcon />,
      link: "/ficha-academica",
    },
    {
      name: "Estado Contable",
      icon: <FileIcon />,
      link: "/estado-contable",
    },
    {
      name: "Datos Personales",
      icon: <UserIcon />,
      link: "/datos-personales",
    },
    {
      name: "Historial Transacciones",
      icon: <RefreshIcon />,
      link: "",
    },
    {
      name: "Cert. Alum. Reg",
      icon: <PrinterIcon />,
      link: "",
    },
  ];

  return (
    <>
      <header className="px-8 flex flex-col gap-8">
        <p className="text-3xl font-semibold">Accesos Directos</p>
        <div className="flex gap-6">
          {accesos.map((acceso, i) => (
            <Link
              key={i}
              className="flex flex-col w-full py-6 px-4 rounded-md border gap-2 bg-white items-center"
              href={acceso.link}
            >
              {acceso.icon}
              <p>{acceso.name}</p>
            </Link>
          ))}
        </div>
      </header>
    </>
  );
}
