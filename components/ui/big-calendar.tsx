"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayModifiers, DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function BigCalendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const modifiers: DayModifiers = {
    inscripcionPrimerCuatrimestre: {
      after: new Date(2023, 2, 12),
      before: new Date(2023, 5, 25),
    },
    inscripcionSegundoCuatrimestre: {
      after: new Date(2023, 6, 20),
      before: new Date(2023, 10, 12),
    },
    inscripcionExamenes: [
      {
        after: new Date(2023, 1, 12),
        before: new Date(2023, 1, 19),
      },
      {
        after: new Date(2023, 1, 26),
        before: new Date(2023, 2, 12),
      },
      {
        after: new Date(2023, 4, 7),
        before: new Date(2023, 4, 14),
      },
      {
        after: new Date(2023, 6, 2),
        before: new Date(2023, 6, 16),
      },
      {
        after: new Date(2023, 8, 10),
        before: new Date(2023, 8, 17),
      },
      {
        after: new Date(2023, 10, 19),
        before: new Date(2023, 11, 3),
      },
      {
        after: new Date(2023, 11, 10),
        before: new Date(2023, 11, 24),
      },
    ],
    recesos: {
      after: new Date(2023, 6, 16),
      before: new Date(2023, 6, 30),
    },
    domingos: {
      dayOfWeek: [0],
    },
    feriados: [
      new Date(2023, 0, 1),
      new Date(2023, 1, 20),
      new Date(2023, 1, 21),
      new Date(2023, 2, 24),
      new Date(2023, 3, 2),
      new Date(2023, 3, 6),
      new Date(2023, 3, 7),
      new Date(2023, 3, 9),
      new Date(2023, 4, 1),
      new Date(2023, 4, 25),
      new Date(2023, 4, 26),
      new Date(2023, 5, 17),
      new Date(2023, 5, 19),
      new Date(2023, 5, 20),
      new Date(2023, 6, 9),
      new Date(2023, 7, 21),
      new Date(2023, 9, 13),
      new Date(2023, 9, 16),
      new Date(2023, 10, 2),
      new Date(2023, 10, 15),
      new Date(2023, 10, 20),
      new Date(2023, 11, 8),
      new Date(2023, 11, 25),
    ],
    asuetosAcademicos: [new Date(2023, 8, 17), new Date(2023, 9, 24)],
    asuetosAcademicosYAdministrativos: [new Date(2023, 8, 21)],
  };
  const modifiersStyles = {
    inscripcionPrimerCuatrimestre: {
      // color: "white",
      backgroundColor: "#EFD1C1",
    },
    inscripcionSegundoCuatrimestre: {
      // color: "white",
      backgroundColor: "#C2D4EE",
    },
    feriados: {
      color: "white",
      backgroundColor: "#CF1A26",
    },
    recesos: {
      // color: "white",
      backgroundColor: "#FBE742",
    },
    inscripcionExamenes: {
      // color: "red",
      backgroundColor: "#BCD242",
    },
    asuetosAcademicos: {
      color: "white",
      backgroundColor: "#6C288F",
    },
    asuetosAcademicosYAdministrativos: {
      color: "white",
      backgroundColor: "#FA48C2",
    },
    domingos: {
      // color: "#B5252B",
      backgroundColor: "white",
    },
  };
  return (
    <DayPicker
      modifiers={modifiers}
      modifiersStyles={modifiersStyles}
      showOutsideDays={showOutsideDays}
      className={cn("p-3 bg-white", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground border-2 border-black",
        day_outside: "text-muted-foreground opacity-50",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
BigCalendar.displayName = "BigCalendar";

export { BigCalendar };
