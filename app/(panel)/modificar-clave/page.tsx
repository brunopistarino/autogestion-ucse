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
        <HeaderTitle>Modificar Clave</HeaderTitle>
        <HeaderDescription>
          <p>
            Por favor completá la siguiente información para modificar tu clave:
          </p>
        </HeaderDescription>
      </Header>
      <Container className="gap-4">
        <div className="flex gap-2 sm:items-center flex-col sm:flex-row">
          <Label htmlFor="i1" className="w-full max-w-[220px]">
            Clave Actual:
          </Label>
          <Input id="i1" type="password" />
        </div>
        <div className="flex gap-2 sm:items-center flex-col sm:flex-row">
          <Label htmlFor="i2" className="w-full max-w-[220px]">
            Clave Nueva:
          </Label>
          <Input id="i2" type="password" />
        </div>
        <div className="flex gap-2 sm:items-center flex-col sm:flex-row">
          <Label htmlFor="i3" className="w-full max-w-[220px]">
            Reingresá la Clave Nueva:
          </Label>
          <Input id="i3" type="password" />
        </div>
        <Button className="bg-green-500 mx-4">Aceptar</Button>
      </Container>
    </>
  );
}
