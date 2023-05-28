import Header from "@components/Header";
import HeaderTitle from "@components/HeaderTitle";
import Container from "@/components/Container";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default async function Page() {
  return (
    <>
      <Header>
        <HeaderTitle>Modificar Correo Electrónico</HeaderTitle>
      </Header>
      <Container className="gap-4">
        <div className="flex gap-2 sm:items-center flex-col sm:flex-row">
          <Label htmlFor="i1" className="w-full max-w-[220px]">
            Seleccione el tipo de Solicitud:
          </Label>
          <Input id="i1" disabled value="Solicitud de Título" />
          <Button className="bg-green-500 mx-4 w-full">
            Generar Solicitud
          </Button>
        </div>
      </Container>

      <Container className="text-center bg-blue-200 text-blue-900">
        <p>No hay ninguna solicitud en curso.</p>
        <p>
          Seleccione el tipo de solicitud y haga click en el botón &quot;Generar
          Solicitud&quot;.
        </p>
      </Container>
    </>
  );
}
