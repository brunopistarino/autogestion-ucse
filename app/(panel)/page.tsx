import Link from "next/link";

import FolderIcon from "@icons/folder.svg";
import FileIcon from "@icons/file-05.svg";
import UserIcon from "@icons/user-01.svg";
import RefreshIcon from "@icons/refresh-ccw-01.svg";
import PrinterIcon from "@icons/printer.svg";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
      <header className="px-8 flex flex-col gap-4">
        <p className="text-3xl font-semibold">Accesos Directos</p>
        <div className="flex gap-4">
          {accesos.map((acceso, i) => (
            <Link
              key={i}
              className="flex flex-col w-full py-6 px-4 rounded-md border gap-2 bg-white items-center"
              href={acceso.link}
            >
              {acceso.icon}
              <p className="text-center">{acceso.name}</p>
            </Link>
          ))}
        </div>
      </header>
      <section className="px-8 flex gap-4">
        <Link
          href="https://www.bidi.la"
          target="_blank"
          className="flex flex-col p-2 rounded-md border gap-2 bg-white justify-center items-center w-full"
        >
          <img src="SisBi_UCSE.png" alt="" />
        </Link>
        <Link
          href="https://ebooks.errepar.com"
          target="_blank"
          className="flex flex-col p-2 rounded-md border gap-2 bg-white justify-center items-center w-full"
        >
          <img src="Errepar.png" alt="" />
        </Link>
      </section>
      <section className="px-8">
        <div className="flex flex-col p-6 rounded-md border gap-2 bg-white">
          <p className="text-xl font-semibold">Correo Institucional</p>
          <p>brunopistarino@alumnos.ucse.edu.ar</p>
          <CredentialsDialog>
            clic [aquí para datos de acceso y clave provisoria]
          </CredentialsDialog>
        </div>
      </section>
      <section className="px-8">
        <div className="flex flex-col p-6 rounded-md border gap-2 bg-white">
          <p className="text-xl font-semibold">Necesitas ahorrar tiempo?</p>
          <p>
            Inscribite desde la comodidad de tu hogar. Evita largas colas de
            espera y ahorra tiempo! Recuerda que con cada inscripción que
            realices se genera un comprobante de transacción que tiene igual
            validez que el ticket emitido en nuestras terminales. Te inscribes,
            copias el número de transacción y listo!
          </p>
          <p>
            Si tenés regular tu situación contable, podés{" "}
            <Link href="estado-contable" className="text-blue-700">
              imprimir desde aquí
            </Link>{" "}
            tu cupón de pago.
          </p>
        </div>
      </section>
      <section className="px-8">
        <div className="flex flex-col p-6 rounded-md border gap-2 bg-white">
          <p className="text-xl font-semibold">Recuerda</p>
          <p>
            <span className="underline font-medium">
              Mantén actualizado tus datos personales.
            </span>{" "}
            En caso de encontrar inconsistencias comunícate con el Departamento
            Alumno de tu sede y bríndales la información que necesita ser
            actualizada.
          </p>
          <p>
            <span className="underline font-medium">
              No olvides registrar tu e-mail activo.
            </span>{" "}
            Si cambiaste tu dirección de correo electrónico necesitas
            registrarlo en nuestro sistema para tener acceso a los servicios que
            te podemos brindar.
          </p>
          <p>
            <span className="underline font-medium">
              Las inscripciones tienen restricciones.
            </span>{" "}
            Solo podés efectuarlas en días establecidos por el calendario
            académico.
          </p>
        </div>
      </section>
    </>
  );
}

const CredentialsDialog = ({ children }: { children: React.ReactNode }) => (
  <Dialog>
    <DialogTrigger asChild>
      <p className="text-blue-700 cursor-pointer">{children}</p>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Datos de Acceso Correo Institucional</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <p>
          Acceso:{" "}
          <Link
            href="https://portal.office.com"
            target="_blank"
            className="text-blue-700"
          >
            https://portal.office.com
          </Link>
        </p>
        <p>Clave provisoria: constraseña</p>
      </div>
    </DialogContent>
  </Dialog>
);
