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
      link: "/",
    },
    {
      name: "Inscripciones",
      icon: <PencilIcon />,
      link: "/",
      subItems: [
        {
          name: "Inscripción a cursar",
          link: "/",
        },
        {
          name: "Inscripción a examen regular",
          link: "/",
        },
        {
          name: "Pre-Inscripción a examen libre",
          link: "/",
        },
        {
          name: "Generar boleta examen libre",
          link: "/",
        },
        {
          name: "Inscripción a examen libre",
          link: "/",
        },
      ],
    },
    {
      name: "Consultas",
      icon: <SearchIcon />,
      link: "/",
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
          link: "/",
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
          link: "/",
        },
        {
          name: "Cambia clave",
          link: "/",
        },
        {
          name: "Cambiar celular",
          link: "/",
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
          link: "/",
        },
        {
          name: "Solicitudes admisión",
          link: "/",
        },
        {
          name: "Solicitudes becas",
          link: "/",
        },
      ],
    },
  ];
}
