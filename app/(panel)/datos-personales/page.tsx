import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default async function Page() {
  return (
    <>
      <header className="px-8">
        <p className="text-3xl font-semibold">Datos Personales</p>
      </header>
      <section className="px-8">
        <div className="flex gap-4">
          <div className="max-w-xs w-full">
            <p className="font-semibold">Personal</p>
            <p className="text-gray-500 font-light">
              Actualiza tu informacion personal.
            </p>
          </div>
          <div className="flex flex-col w-full p-6 rounded-md border gap-6 bg-white">
            <div className="flex gap-4">
              <div className="flex flex-col w-full gap-[6px]">
                <Label>Nombre</Label>
                <Input value="Bruno Pistarino" disabled />
              </div>
              <div className="flex flex-col w-full gap-[6px]">
                <Label>DNI</Label>
                <Input value="44994594" disabled />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col w-full gap-[6px]">
                <Label>Fecha de Nacimiento</Label>
                <Input value="24/06/2003" disabled />
              </div>
              <div className="flex flex-col w-full gap-[6px]">
                <Label>Nacionalidad</Label>
                <Input value="Argentino" disabled />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col w-full gap-[6px]">
                <Label>Estado civil</Label>
                <Input value="Soltero" disabled />
              </div>
              <div className="flex flex-col w-full gap-[6px]">
                <Label>Sexo</Label>
                <Input value="Masculino" disabled />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="flex gap-4">
          <div className="max-w-xs w-full">
            <p className="font-semibold">Dirección</p>
            <p className="text-gray-500 font-light">
              Actualiza tu informacion de residencia.
            </p>
          </div>
          <div className="flex flex-col w-full p-6 rounded-md border gap-6 bg-white">
            <div className="flex gap-4">
              <div className="flex flex-col w-full gap-[6px]">
                <Label>Barrio</Label>
                <Input value="Pizzurno" disabled />
              </div>
              <div className="flex flex-col w-full gap-[6px]">
                <Label>Calle</Label>
                <Input value="Marchini" disabled />
              </div>
              <div className="flex flex-col w-full gap-[6px]">
                <Label>Número</Label>
                <Input value="31" disabled />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col w-full gap-[6px]">
                <Label>Departamento</Label>
                <Input value="[No registrado]" disabled />
              </div>
              <div className="flex flex-col w-full gap-[6px]">
                <Label>Piso</Label>
                <Input value="[No registrado]" disabled />
              </div>
              <div className="flex flex-col w-full gap-[6px]">
                <Label>Código postal</Label>
                <Input value="2300" disabled />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="flex gap-4">
          <div className="max-w-xs w-full">
            <p className="font-semibold">Contacto</p>
            <p className="text-gray-500 font-light">
              Actualiza tu informacion de contacto.
            </p>
          </div>
          <div className="flex flex-col w-full p-6 rounded-md border gap-6 bg-white">
            <div className="flex gap-4">
              <div className="flex flex-col w-full gap-[6px]">
                <Label>Teléfono</Label>
                <Input value="444" disabled />
              </div>
              <div className="flex flex-col w-full gap-[6px]">
                <Label>Celular</Label>
                <Input value="3492208328" disabled />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col w-full gap-[6px]">
                <Label>E-mail</Label>
                <Input value="brunopistarino@gmail.com" disabled />
              </div>
              <div className="flex flex-col w-full gap-[6px]">
                <Label>E-mail Institucional</Label>
                <Input value="brunopistarino@alumnos.ucse.edu.ar" disabled />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
