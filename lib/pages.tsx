import HomeIcon from "@icons/home-line.svg";
import PencilIcon from "@icons/pencil-01.svg";
import SearchIcon from "@icons/search-refraction.svg";
import BookIcon from "@icons/book-closed.svg";
import RefreshIcon from "@icons/refresh-ccw-01.svg";
import ClipboardIcon from "@icons/clipboard.svg";
import EditIcon from "@icons/edit-05.svg";

export function getPages() {
  return [
    {
      name: "Inicio",
      icon: <HomeIcon />,
      link: "/inicio",
    },
    {
      name: "Inscripciones",
      icon: <PencilIcon />,
      subItems: [
        {
          name: "Inscripción a cursar",
          // link: "/inicio",
        },
        {
          name: "Inscripción a examen regular",
          // link: "/inicio",
        },
        {
          name: "Pre-Inscripción a examen libre",
          // link: "/inicio",
        },
        {
          name: "Generar boleta examen libre",
          // link: "/inicio",
        },
        {
          name: "Inscripción a examen libre",
          // link: "/inicio",
        },
      ],
    },
    {
      name: "Consultas",
      icon: <SearchIcon />,
      subItems: [
        {
          name: "Ficha académica",
          link: "/ficha-academica",
        },
        {
          name: "Estado contable",
          link: "/estado-contable",
        },
        {
          name: "Datos personales",
          link: "/datos-personales",
        },
        {
          name: "Inscriptos por examen",
          link: "/inscriptos-examen",
        },
        {
          name: "Calendario académico",
          link: "/calendario-academico",
        },
      ],
    },
    {
      name: "Transacciones",
      icon: <RefreshIcon />,
      subItems: [
        {
          name: "Historial",
          link: "/historial-transacciones",
        },
      ],
    },
    {
      name: "Actualizar datos",
      icon: <EditIcon />,
      subItems: [
        {
          name: "Cambiar correo",
          link: "/modificar-correo",
        },
        {
          name: "Cambiar clave",
          link: "/modificar-clave",
        },
        {
          name: "Cambiar celular",
          link: "/modificar-celular",
        },
      ],
    },
    {
      name: "Certificaciones",
      icon: <BookIcon />,
      subItems: [
        {
          name: "Certificado de alumno regular",
          link: "/certificado-alumno-regular",
        },
      ],
    },
    {
      name: "Solicitudes",
      icon: <ClipboardIcon />,
      subItems: [
        {
          name: "Título",
          link: "/solicitud-titulo",
        },
        {
          name: "Solicitudes admisión",
          // link: "/inicio",
        },
        {
          name: "Solicitudes becas",
          // link: "/inicio",
        },
      ],
    },
  ];
}
