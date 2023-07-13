import Image from "next/image";

import logo from "@/public/logo.png";

export default function Navbar() {
  return (
    <div style={{ backgroundColor: "rgb(var(--card-rgb))" }} className="pl-28 pr-28 flex items-center justify-between">
      <Image
        alt="Famed logo"
        src={logo}
        width={208}
        className="pl-3 pt-3 pb-5 grow-0 cursor-pointer"
      />
      <ul className="uppercase flex text-[#178415] font-bold text-lg">
        <li className="p-3 flex items-center cursor-pointer hover:underline underline-offset-8 decoration-2 decoration-[#6BAA65]">
          Página Inicial
        </li>
        <li className="p-3 flex items-center cursor-pointer hover:underline underline-offset-8 decoration-2 decoration-[#6BAA65]">
          Ensino
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg> */}
          <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
          </svg>
        </li>
        <li className="p-3 flex items-center cursor-pointer hover:underline underline-offset-8 decoration-2 decoration-[#6BAA65]">
          Investigação
          <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
          </svg>
        </li>
        <li className="p-3 flex items-center cursor-pointer hover:underline underline-offset-8 decoration-2 decoration-[#6BAA65]">
          Extensão
        </li>
        <li className="p-3 flex items-center cursor-pointer hover:underline underline-offset-8 decoration-2 decoration-[#6BAA65]">
          Submissão de Protocolos
          <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
          </svg>
        </li>
        <li className="p-3 flex items-center cursor-pointer hover:underline underline-offset-8 decoration-2 decoration-[#6BAA65]">
          Notícias
        </li>
      </ul>
    </div>
  );
}