import Header from "@components/Header";
import HeaderTitle from "@components/HeaderTitle";

export default async function Page() {
  return (
    <Header>
      <HeaderTitle>Certificado de Alumno Regular</HeaderTitle>
      <p>
        Podés generar hasta <strong>2 (dos)</strong> certificados vigentes por
        carrera
      </p>
    </Header>
  );
}
