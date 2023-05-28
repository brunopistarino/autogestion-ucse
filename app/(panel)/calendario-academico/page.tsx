"use client";

import { BigCalendar } from "@/components/ui/big-calendar";

import Header from "@components/Header";
import HeaderTitle from "@components/HeaderTitle";
import HeaderDescription from "@components/HeaderDescription";

export default async function Page() {
  return (
    <>
      <Header>
        <HeaderTitle>Calendario Académico</HeaderTitle>
        <HeaderDescription>
          <BigCalendar mode="single" className="rounded-md border" />
        </HeaderDescription>
      </Header>
      <section className="px-8">
        <div className="flex flex-col sm:flex-row p-6 rounded-md border gap-1 sm:gap-2 bg-white">
          <div className="flex flex-col w-full gap-1">
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
          <div className="flex flex-col w-full gap-1">
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
