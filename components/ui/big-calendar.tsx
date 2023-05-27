"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayModifiers, DayPicker } from "react-day-picker";

import { es } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const styles = `
.MyCalendar {
  width: 100%;
}

.MyCalendar div {
  width: 100%;
}
.MyCalendar #react-day-picker-1 {
  width: 100%;
  text-align: right;
  transform: translateX(40px);
}

.MyCalendar div th {
  width: 100%;
}

.MyCalendar div tr {
  width: 100%;
  // gap: 8px;
}

.MyCalendar div td {
  width: 100%;
}

.MyCalendar div td button {
  width: 100%;
}

.MyCalendar .DayPicker-Month {
  width: 100%;
}

.MyCalendar .DayPicker-Weekday,
.MyCalendar .DayPicker-Day {
  display: inline-block;
  width: calc(100% / 7);
}
`;

function BigCalendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const modifiers: DayModifiers = {
    inscripcionPrimerCuatrimestre: {
      from: new Date(2023, 2, 13),
      to: new Date(2023, 5, 24),
    },
    inscripcionSegundoCuatrimestre: {
      from: new Date(2023, 6, 21),
      to: new Date(2023, 10, 11),
    },
    inscripcionExamenes: [
      {
        from: new Date(2023, 1, 13),
        to: new Date(2023, 1, 18),
      },
      {
        from: new Date(2023, 1, 27),
        to: new Date(2023, 2, 11),
      },
      {
        from: new Date(2023, 4, 8),
        to: new Date(2023, 4, 13),
      },
      {
        from: new Date(2023, 6, 3),
        to: new Date(2023, 6, 15),
      },
      {
        from: new Date(2023, 8, 11),
        to: new Date(2023, 8, 16),
      },
      {
        from: new Date(2023, 10, 20),
        to: new Date(2023, 11, 2),
      },
      {
        from: new Date(2023, 11, 11),
        to: new Date(2023, 11, 23),
      },
    ],
    recesos: {
      from: new Date(2023, 6, 17),
      to: new Date(2023, 6, 29),
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
    <>
      <style>{styles}</style>
      <DayPicker
        locale={es}
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
        showOutsideDays={showOutsideDays}
        className={cn("p-3 bg-white MyCalendar", className)}
        classNames={{
          months:
            "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
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
    </>
  );
}
BigCalendar.displayName = "BigCalendar";

export { BigCalendar };
