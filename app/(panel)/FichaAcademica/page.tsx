export default async function Page() {
  const materias = [
    {
      nombre: "Algortimos y Programación",
      condicion: "promocionado",
      nota: "8",
      fecha: "10/10/2021",
    },
    {
      nombre: "Álgebra",
      condicion: "promocionado",
      nota: "8",
      fecha: "10/10/2021",
    },
    {
      nombre: "Cálculo I",
      condicion: "promocionado",
      nota: "9",
      fecha: "10/10/2021",
    },
    {
      nombre: "Arquitectura de Computadoras",
      condicion: "aprobado",
      nota: "8",
      fecha: "10/10/2021",
    },
    {
      nombre: "Comunicación Oral y Escrita",
      condicion: "promocionado",
      nota: "8",
      fecha: "10/10/2021",
    },
    {
      nombre: "Cálculo II",
      condicion: "promocionado",
      nota: "9",
      fecha: "10/10/2021",
    },
    {
      nombre: "Álgebra lineal",
      condicion: "promocionado",
      nota: "7",
      fecha: "10/10/2021",
    },
    {
      nombre: "Organización Empresarial",
      condicion: "aprobado",
      nota: "10",
      fecha: "10/10/2021",
    },
    {
      nombre: "Inglés",
      condicion: "inscripto regular",
    },
    {
      nombre: "Programación I",
      condicion: "inscripto regular",
    },
    {
      nombre: "Teología",
      condicion: "inscripto regular",
    },
    {
      nombre: "Estructuras de Datos",
      condicion: "inscripto regular",
    },
    {
      nombre: "Sistemas de Información",
      condicion: "inscripto regular",
    },
    {
      nombre: "Física I",
      condicion: "inscripto regular",
    },
    {
      nombre: "Filosofía",
      condicion: "inscripto regular",
    },
  ];
  return (
    <>
      <header className="px-8 flex flex-col gap-6">
        <p className="text-3xl font-semibold">Ficha Académica</p>
      </header>
      <div className="grid grid-cols-4 gap-4 px-8">
        {materias.map((materia, x) => (
          <div
            key={x}
            className="border-2 rounded-md border-gray-300 flex flex-col"
          >
            {materia.nota ? (
              <>
                <p>{materia.nombre}</p>
                <p>{materia.condicion}</p>
                <div className="flex justify-between items-end">
                  <p className="text-4xl">{materia.nota}</p>
                  <p>{materia.fecha}</p>
                </div>
              </>
            ) : (
              <>
                <p>{materia.nombre}</p>
                <p>{materia.condicion}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
