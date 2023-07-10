import Image from "next/image";

import logo from "@/public/logo.png";

export default function Navbar() {
  return (
    <div style={{ backgroundColor: "rgb(var(--card-rgb))" }} className="pl-32 pr-32 flex items-center justify-between">
      <Image
        alt="Famed logo"
        src={logo}
        width={208}
        className="p-3 grow-0"
      />
      <ul className="uppercase flex text-[#178415] font-bold text-lg">
        <li className="p-3">
          Página Inicial
        </li>
        <li className="p-3">
          Ensino
        </li>
        <li className="p-3">
          Investigação
        </li>
        <li className="p-3">
          Extensão
        </li>
        <li className="p-3">
          Submissão de Protocolos
        </li>
        <li className="p-3">
          Notícias
        </li>
      </ul>
    </div>
  );
}