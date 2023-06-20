"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ColorButton from "./button/ColorButton";
import { HomeIcon, HomeFillIcon, SearchIcon, SearchFillIcon, AddIcon, AddFillIcon } from "./icons";
import { useSession, signIn, signOut } from "next-auth/react";
import Profile from "./Profile";

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
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="flex justify-between items-center px-6">
      <Link href="/">
        <h1 className="text-3xl font-bold">Iniestagram</h1>
      </Link>
      <nav>
        <ul className="flex gap-4 items-center p-4">
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{pathName === item.href ? item.clickedIcon : item.icon}</Link>
            </li>
          ))}
          {user && (
            <li>
              <Link href={`/user/${user.username}`}>
                <Profile image={user.image} size="small" highlight />
              </Link>
            </li>
          )}
          <li>
            {session ? (
              <ColorButton text="Sign out" onClick={() => signOut()} />
            ) : (
              <ColorButton text="Sign in" onClick={() => signIn()} />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
