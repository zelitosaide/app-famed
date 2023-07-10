import Image from "next/image";

import logo from "@/public/logo.png";

export default function Navbar() {
  return (
    <div style={{ backgroundColor: "rgb(var(--card-rgb))" }} className="pl-32 pr-32">
      <Image
        alt="Famed logo"
        src={logo}
        width={208}
        className="p-3"
      />
    </div>
  );
}