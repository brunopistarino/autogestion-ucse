import Header from "@components/Header";
import HeaderTitle from "@components/HeaderTitle";
import HeaderDescription from "@/components/HeaderDescription";
import Container from "@/components/Container";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default async function Page() {
  return (
    <>
      <Header>
        <HeaderTitle>Modificar Correo Electrónico</HeaderTitle>
        <HeaderDescription>
          <p>
            Por favor completá la siguiente información para modificar tu correo
            electrónico:
          </p>
        </HeaderDescription>
      </Header>
      <Container className="gap-4">
        <div className="flex gap-2 sm:items-center flex-col sm:flex-row">
          <Label htmlFor="i1" className="w-full max-w-[220px]">
            Correo Electrónico Actual:
          </Label>
          <Input
            id="i1"
            disabled
            type="email"
            value="brunopistarino@gmail.com"
          />
        </div>
        <div className="flex gap-2 sm:items-center flex-col sm:flex-row">
          <Label htmlFor="i2" className="w-full max-w-[220px]">
            Correo Electrónico Nuevo:
          </Label>
          <Input id="i2" type="email" />
        </div>
        <div className="flex gap-2 sm:items-center flex-col sm:flex-row">
          <Label htmlFor="i3" className="w-full max-w-[220px]">
            Reingresá Correo Electrónico:
          </Label>
          <Input id="i3" type="email" />
        </div>
        <Button className="bg-green-500 mx-4">Aceptar</Button>
      </Container>

      <Container className="bg-blue-200 text-blue-900">
        <p>
          <strong>Aviso:</strong> Se enviará un correo electrónico hacia tu
          cuenta para verificar que la dirección ingresada sea válida. Dispones
          de 24hs para validar tu dirección, caso contrario deberás efectuar
          nuevamente esta operación.
        </p>
      </Container>
    </>
  );
}
