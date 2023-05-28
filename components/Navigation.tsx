"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getPages } from "@/lib/pages";

import HomeIcon from "@icons/home-line.svg";
import ChevronIcon from "@icons/chevron-right.svg";
import ArrowIcon from "@icons/arrow-left.svg";

export default function Navigation() {
  const navItems = getPages();

  const pathname = usePathname();
  const current = pathname.split("/")[1];

  //   get the base path for the current page searching the navItems array
  var basePath: String = "";
  var currentName: String = "";
  if (!navItems.find((item) => item.link === `/${current}`)) {
    navItems.forEach((item) => {
      if (item.subItems) {
        item.subItems.forEach((subItem) => {
          if (subItem.link === `/${current}`) {
            basePath = item.name;
            currentName = subItem.name;
          }
        });
      }
    });
  }

  return (
    <>
      <div className="flex md:hidden gap-2 mb-1 px-4">
        <Link
          href="/inicio"
          className="flex gap-2 text-gray-600 hover:bg-gray-200 rounded pl-1 pr-2"
        >
          <ArrowIcon className=" p-[1px] hover:bg-gray-100 rounded" />
          <p>Volver</p>
        </Link>
      </div>
      <div className="hidden md:flex gap-2 mb-1">
        <Link href="/inicio">
          <HomeIcon className="text-gray-500 p-[1px] hover:bg-gray-100 rounded" />
        </Link>
        {basePath && (
          <>
            <ChevronIcon className="text-gray-300 p-[2px]" />
            <span className="text-gray-600">{basePath}</span>
          </>
        )}
        {current && (
          <>
            <ChevronIcon className="text-gray-300 p-[2px]" />
            <span className="text-gray-700 font-semibold bg-gray-100 px-2 rounded">
              {currentName}
            </span>
          </>
        )}
      </div>
    </>
  );
}
