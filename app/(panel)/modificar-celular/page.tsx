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
        <HeaderTitle>Modificar Celular</HeaderTitle>
        <HeaderDescription>
          <p>
            Por favor completá la siguiente información para modificar tu número
            de celular:
          </p>
        </HeaderDescription>
      </Header>
      <Container className="gap-4">
        <div className="flex gap-2 sm:items-center flex-col sm:flex-row">
          <Label htmlFor="i1" className="w-full max-w-[220px]">
            Celular actual:
          </Label>
          <Input id="i1" type="tel" disabled value="3492208328" />
        </div>
        <div className="flex gap-2 sm:items-center flex-col sm:flex-row">
          <Label htmlFor="i2" className="w-full max-w-[220px]">
            Celular nuevo:
          </Label>
          <Input
            id="i2"
            type="number"
            placeholder="Código de área"
            className="max-w-[150px]"
          />
          <Input type="number" placeholder="Número" />
        </div>
        <Button className="bg-green-500 mx-4">Aceptar</Button>
      </Container>
    </>
  );
}
