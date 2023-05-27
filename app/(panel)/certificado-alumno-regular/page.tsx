import { Button } from "@/components/ui/button";

import Header from "@components/Header";
import HeaderTitle from "@components/HeaderTitle";
import HeaderDescription from "@components/HeaderDescription";
import Container from "@components/Container";

export default async function Page() {
  return (
    <>
      <Header>
        <HeaderTitle>Certificado de Alumno Regular</HeaderTitle>
        <HeaderDescription>
          Podés generar hasta <strong>2 (dos)</strong> certificados vigentes por
          carrera
        </HeaderDescription>
      </Header>
      <Container className="text-center bg-blue-200 text-blue-900">
        <p> No tienes generado ningún certificado.</p>
        <p>Haz click en el botón &quot;Nuevo&quot; para generarlo.</p>
      </Container>
      <Button className="bg-green-500 mx-4 md:mx-8">Nuevo</Button>
    </>
  );
}
