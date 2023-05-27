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
import MenuIcon from "@icons/menu-01.svg";
import CloseIcon from "@icons/x-close.svg";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [open, setOpen] = useState<String>("");

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = (name: String) => {
    if (open === name) {
      setOpen("");
    } else {
      setOpen(name);
    }
  };

  // if (typeof window !== "undefined") {
  //   window.addEventListener("scroll", () => {
  //     const navbar = document.getElementById("navbar");
  //     if (navbar && current != "") {
  //       navbar.classList.remove("transparent");
  //       return;
  //     }
  //     if (navbar) {
  //       if (window.scrollY > window.innerHeight / 2) {
  //         navbar.classList.remove("transparent");
  //       } else {
  //         navbar.classList.add("transparent");
  //       }
  //     }
  //   });
  // }

  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      if (!isOpen && window.innerWidth > 768) {
        setIsOpen(false);
      }
    });
  }

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
  return (
    <>
      <nav className="flex md:hidden bg-slate-900 text-white sticky items-center justify-between h-[71px] top-0 right-0 left-0 px-6">
        <div className="flex items-center gap-4">
          <LogoIcon className="h-9 w-7" />
          <p className="text-2xl font-bold">Autogestión</p>
        </div>
        {isOpen ? (
          <CloseIcon onClick={handleIsOpen} />
        ) : (
          <MenuIcon onClick={handleIsOpen} />
        )}
      </nav>
      <nav
        className={`${
          isOpen ? "flex fixed top-[71px] bottom-0 w-full" : "hidden"
        } bg-slate-900 w-80 z-50 shrink-0 text-white flex-col justify-between md:flex overflow-y-auto`}
      >
        <div className="flex flex-col gap-6 pt-2 md:pt-8">
          <div className="hidden md:flex items-center gap-4 pr-5 pl-6">
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
                    onClick={handleClose}
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
                        onClick={handleClose}
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
        <div className="px-2 py-6">
          <UserDialog>
            <div className="flex gap-3 items-center hover:bg-slate-800 rounded-md p-2 cursor-pointer">
              <div className="bg-slate-700 w-10 h-10 rounded-full flex place-content-center items-center">
                <UserIcon />
              </div>
              <div className="flex flex-col">
                <p>Bruno Pistarino</p>
                <p className="text-sm">brunopistarino@gmail.com</p>
              </div>
            </div>
          </UserDialog>
        </div>
      </nav>
    </>
  );
}

const UserDialog = ({ children }: { children: React.ReactNode }) => (
  <Dialog>
    <DialogTrigger asChild>{children}</DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Bruno Pistarino</DialogTitle>
        <DialogDescription>brunopistarino@gmail.com</DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <p>Carrera: ING. EN INFORMÁTICA - Plan 2022</p>
        <p>Departamento Académico Rafaela</p>
      </div>
      <DialogFooter>
        <Button className="w-full">Cambiar de Carrera</Button>
        <Link href="login" className="w-full">
          <Button className="w-full" variant="destructive">
            Cerrar Sesión
          </Button>
        </Link>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
