"use client";

import { useState } from "react";

import { BigCalendar } from "@/components/ui/big-calendar";

export default async function Page() {
  //   const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <BigCalendar
      mode="single"
      //   selected={date}
      selected={new Date()}
      //   onSelect={setDate}
      className="rounded-md border"
    />
  );
}
