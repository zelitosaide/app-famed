import Image from "next/image";

import logo from "@/public/logo.png";

export default function Navbar() {
  return (
    <div style={{ backgroundColor: "rgb(var(--card-rgb))" }}>
      <Image
        alt="Famed logo"
        src={logo}
      />
    </div>
  );
}