"use client";

import { useState } from "react";

import { BigCalendar } from "@/components/ui/big-calendar";

export default async function Page() {
  //   const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <header className="flex flex-col gap-4 px-8">
        <p className="text-3xl font-semibold">Calendario Académico</p>
        <BigCalendar mode="single" className="rounded-md border" />
      </header>
      <section className="px-8">
        <div className="flex p-6 rounded-md border gap-2 bg-white">
          <div className="flex flex-col w-full">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#BCD242]" />
              <p>Exámenes</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#EFD1C1]" />
              <p>1re Cuatrimestre</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#C2D4EE]" />
              <p>2do Cuatrimestre</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#FBE742]" />
              <p>Receso</p>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#CF1A26]" />
              <p>Feridos</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#6C288F]" />
              <p>Asueto Académico</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#FA48C2]" />
              <p>Asueto Académico y Administrativo</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
