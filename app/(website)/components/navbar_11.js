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
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 4 4 4-4"
            />
          </svg>
        </li>
        <li className="p-3 flex items-center cursor-pointer hover:underline underline-offset-8 decoration-2 decoration-[#6BAA65]">
          Investigação
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 4 4 4-4"
            />
          </svg>
        </li>
        <li className="p-3 flex items-center cursor-pointer hover:underline underline-offset-8 decoration-2 decoration-[#6BAA65]">
          Extensão
        </li>
        <li className="p-3 flex items-center cursor-pointer hover:underline underline-offset-8 decoration-2 decoration-[#6BAA65]">
          Submissão de Protocolos
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 4 4 4-4"
            />
          </svg>
        </li>
        <li className="p-3 flex items-center cursor-pointer hover:underline underline-offset-8 decoration-2 decoration-[#6BAA65]">
          Notícias
        </li>
      </ul>
    </div>
  );
}