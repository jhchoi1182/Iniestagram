"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ColorButton from "./ui/button/ColorButton";
import { HomeIcon, HomeFillIcon, SearchIcon, SearchFillIcon, AddIcon, AddFillIcon } from "./ui/icons";

const menu = [
  {
    href: "/",
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
  },
  {
    href: "/search",
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
  },
  {
    href: "/add",
    icon: <AddIcon />,
    clickedIcon: <AddFillIcon />,
  },
];
export default function Navbar() {
  const pathName = usePathname();
  return (
    <div className="flex justify-between items-center px-6">
      <Link href="/">
        <h1 className="text-3xl font-bold">Instagram</h1>
      </Link>
      <nav>
        <ul className="flex gap-4 items-center p-4">
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{pathName === item.href ? item.clickedIcon : item.icon}</Link>
            </li>
          ))}
          <ColorButton text="Sign in" onClick={() => {}} />
        </ul>
      </nav>
    </div>
  );
}
