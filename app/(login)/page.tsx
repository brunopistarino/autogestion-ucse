import Link from "next/link";

import MailIcon from "@icons/mail-01.svg";
import LogoIcon from "@icons/logob.svg";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default async function Page() {
  return (
    <div className="md:grid grid-cols-2 h-[100dvh]">
      <div className="w-full flex flex-col justify-between p-4 md:p-8 min-h-full">
        <div className="flex gap-4">
          {/* <img src="logo.png" className="max-h-12" alt="" /> */}
          <LogoIcon className="w-9 h-14" />
          <div>
            <p className="text-xl font-semibold">
              Universidad Católica de Santiago del Estero
            </p>
            <p>Sistema autogestión alumnos</p>
          </div>
        </div>
        <div className="flex flex-col mx-auto w-full max-w-sm gap-8">
          <div>
            <p className="text-4xl font-semibold">Ingresar</p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-[6px]">
              <Label htmlFor="documento" className="mb-1">
                Documento
              </Label>
              <Input
                type="text"
                id="documento"
                placeholder="Ingrese su documento"
              />
            </div>
            <div className="flex flex-col gap-[6px]">
              <Label htmlFor="password" className="mb-1">
                Contraseña
              </Label>
              <Input
                type="password"
                id="password"
                placeholder="Ingrese su contraseña"
              />
            </div>
            <Link href="/inicio" className="w-full">
              <Button className="w-full bg-blue-700">Ingresar</Button>
            </Link>
          </div>
          <div>
            <p className="text-center md:text-left">
              Olvidaste tu contaseña?{" "}
              <span className="text-blue-700 hover:underline font-semibold">
                Recuperala
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-between text-slate-600">
          <p>© UCSE 2023</p>
          <div className="flex gap-2 items-center">
            <MailIcon className="w-4 h-4" />
            <p>soporteautogestion@ucse.edu.ar</p>
          </div>
        </div>
      </div>
      <div className="hidden md:block h-screen w-full py-4 pr-4 max-h-screen">
        <div className="h-full w-full rounded-2xl grid grid-rows-4 truncate">
          <div className="h-full bg-cover bg-center bg-[url('/rafaela.png')] grid place-content-center">
            <p className="text-2xl text-white font-semibold">Sede Rafaela</p>
          </div>
          <div className="h-full bg-cover bg-center bg-[url('/baires.png')] grid place-content-center">
            <p className="text-2xl text-white font-semibold">
              Sede Buenos Aires
            </p>
          </div>
          <div className="h-full bg-cover bg-center bg-[url('/santiago.png')] grid place-content-center">
            <p className="text-2xl text-white font-semibold">
              Sede Santiago del Estero
            </p>
          </div>
          <div className="h-full bg-cover bg-center bg-[url('/jujuy.png')] grid place-content-center">
            <p className="text-2xl text-white font-semibold">
              Sede San Salvador de Jujuy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
