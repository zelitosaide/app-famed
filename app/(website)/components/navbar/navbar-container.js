import "./navbar.css";
import logo from "@/public/logo.png";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import { getNavLinks } from "@/app/api/server";

export default async function NavbarContainer() {
  const links = await getNavLinks();

  return (
    <div 
      style={{ backgroundColor: "rgb(var(--card-rgb))" }} 
      className="pl-28 pr-28 flex items-center justify-between relative"
    >
      <Link href="/">
        <Image
          alt="Famed logo"
          src={logo}
          width={208}
          className="pl-3 pt-3 pb-5 grow-0 cursor-pointer"
        />
      </Link>

      <div>
        <Navbar links={links} />
      </div>
    </div>
  );
}