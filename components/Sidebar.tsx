"use client";

import { useState } from "react";
import Link from "next/link";

import LogoIcon from "@icons/logom.svg";

import UserIcon from "@icons/user-01.svg";
import ChevronDown from "@icons/chevron-down.svg";
import ChevronUp from "@icons/chevron-up.svg";
import MenuIcon from "@icons/menu-01.svg";
import CloseIcon from "@icons/x-close.svg";

import { getPages } from "@/lib/pages";

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

  const navItems = getPages();

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

  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      if (!isOpen && window.innerWidth > 768) {
        setIsOpen(false);
      }
    });
  }

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
        <Link href="/" className="w-full">
          <Button className="w-full" variant="destructive">
            Cerrar Sesión
          </Button>
        </Link>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
