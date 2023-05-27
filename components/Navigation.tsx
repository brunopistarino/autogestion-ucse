import Link from "next/link";

import HomeIcon from "@icons/home-line.svg";
import ChevronIcon from "@icons/chevron-right.svg";

export default function Navigation() {
  return (
    <div className="flex">
      <Link href="/">
        <HomeIcon />
      </Link>
      <ChevronIcon />
    </div>
  );
}
