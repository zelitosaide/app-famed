import Image from "next/image";

import logo from "@/public/logo.png";

export default function Navbar() {
  return (
    <div style={{ backgroundColor: "rgb(var(--card-rgb))" }} className="pl-32 pr-32 flex items-center">
      <Image
        alt="Famed logo"
        src={logo}
        width={208}
        className="p-3 grow-0"
      />
      <ul className="uppercase">
        <li>Página Inicial</li>
        <li>Ensino</li>
        <li>Investigação</li>
        <li>Extensão</li>
        <li>Submissão de Protocolos</li>
        <li>Notícias</li>
      </ul>
    </div>
  );
}