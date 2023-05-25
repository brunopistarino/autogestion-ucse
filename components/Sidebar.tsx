"use client";

import { useState } from "react";
import Link from "next/link";

import LogoIcon from "@icons/logom.svg";

import HomeIcon from "@icons/home-line.svg";
import PencilIcon from "@icons/pencil-01.svg";
import SearchIcon from "@icons/search-refraction.svg";
import BookIcon from "@icons/book-closed.svg";
import RefreshIcon from "@icons/refresh-ccw-01.svg";
import ClipboardIcon from "@icons/clipboard.svg";
import EditIcon from "@icons/edit-05.svg";
import UserIcon from "@icons/user-01.svg";
import ChevronDown from "@icons/chevron-down.svg";
import ChevronUp from "@icons/chevron-up.svg";

export default function Sidebar() {
  const [open, setOpen] = useState<String>("");

  const handleOpen = (name: String) => {
    if (open === name) {
      setOpen("");
    } else {
      setOpen(name);
    }
  };

  console.log(open);
  const navItems = [
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
          link: "/",
        },
        {
          name: "Inscriptos por examen",
          link: "/",
        },
        {
          name: "Calendario académico",
          link: "/",
        },
      ],
    },
    {
      name: "Transacciones",
      icon: <RefreshIcon />,
      subItems: [
        {
          name: "Historial",
          link: "/",
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
          link: "/",
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
  return (
    <nav className="bg-slate-900 w-80 shrink-0 text-white flex-col justify-between hidden md:flex overflow-y-auto">
      <div className="flex flex-col gap-6 pt-8">
        <div className="flex items-center gap-4 pr-5 pl-6">
          {/* <img src="logo.png" className="max-h-12" alt="" /> */}
          <LogoIcon className="h-12 w-9" />
          <p className="text-2xl font-bold">Autogestión</p>
        </div>
        <div className="px-6">
          <input
            type="text"
            className="w-full border rounded-lg p-2 bg-slate-800 border-slate-600 "
            placeholder="Buscar"
          />
        </div>
        <div className="flex flex-col gap-1 px-4 ">
          {navItems.map((item, x) => (
            <div key={x} className="flex flex-col gap-2">
              {item.subItems ? (
                <div
                  className="flex gap-3 pt-2 pr-3 pb-2 pl-3 hover:bg-slate-800 rounded-md"
                  onClick={() => item.subItems && handleOpen(item.name)}
                >
                  {item.icon}
                  <p className="font-semibold">{item.name}</p>
                  <div className="ml-auto">
                    {open === item.name ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.link}
                  className="flex gap-3 pt-2 pr-3 pb-2 pl-3 hover:bg-slate-800 rounded-md"
                >
                  {item.icon}
                  <p className="font-semibold">{item.name}</p>
                </Link>
              )}
              {item.subItems && open === item.name && (
                <div className="flex flex-col gap-1 pb-1">
                  {item.subItems.map((subItem, y) => (
                    <Link
                      key={y}
                      href={subItem.link}
                      className="pt-2 pr-3 pb-2 pl-11 hover:bg-slate-800 rounded-md"
                    >
                      <p>{subItem.name}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex pr-4 pb-8 pl-4 gap-3 items-center">
        <div className="bg-slate-700 w-10 h-10 rounded-full flex place-content-center items-center">
          <UserIcon />
        </div>
        <div className="flex flex-col">
          <p>Bruno Pistarino</p>
          <p className="text-sm">brunopistarino@gmail.com</p>
        </div>
      </div>
    </nav>
  );
}
