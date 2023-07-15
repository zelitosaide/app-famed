"use client";

import "./navbar.css";

import Image from "next/image";
import logo from "@/public/logo.png";

import { Root, List, Item, Trigger, Link } from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  return (
    <div style={{ backgroundColor: "rgb(var(--card-rgb))" }} className="pl-28 pr-28 flex items-center justify-between">
      <Image
        alt="Famed logo"
        src={logo}
        width={208}
        className="pl-3 pt-3 pb-5 grow-0 cursor-pointer"
      />

      <div>
        <Root className="NavigationMenuRoot">
          <List className="NavigationMenuList">
            <Item>
              <Link className="NavigationMenuLink" href="/">Página Inicial</Link>
            </Item>
            <Item>
              <Trigger className="NavigationMenuTrigger">
                Ensino <CaretDownIcon aria-hidden />
              </Trigger>
            </Item>
            <Item>
              <Trigger className="NavigationMenuTrigger">
                Investigação <CaretDownIcon aria-hidden />
              </Trigger>
            </Item>
            <Item>
              <Link className="NavigationMenuLink" href="/">Extensão</Link>
            </Item>
            <Item>
              <Trigger className="NavigationMenuTrigger">
                Submissão de Protocolos <CaretDownIcon aria-hidden />
              </Trigger>
            </Item>
            <Item>
              <Link className="NavigationMenuLink" href="/">Notícias</Link>
            </Item>
          </List>
        </Root>
      </div>



      {/* <ul className="uppercase flex text-[#178415] font-bold text-lg">
        <li className="p-3 flex items-center cursor-pointer hover:underline underline-offset-8 decoration-2 decoration-[#6BAA65]">
          Página Inicial
        </li>
        <li className="p-3 flex items-center cursor-pointer hover:underline underline-offset-8 decoration-2 decoration-[#6BAA65]">
          Ensino
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </li>
        <li className="p-3 flex items-center cursor-pointer hover:underline underline-offset-8 decoration-2 decoration-[#6BAA65]">
          Investigação
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </li>
        <li className="p-3 flex items-center cursor-pointer hover:underline underline-offset-8 decoration-2 decoration-[#6BAA65]">
          Extensão
        </li>
        <li className="p-3 flex items-center cursor-pointer hover:underline underline-offset-8 decoration-2 decoration-[#6BAA65]">
          Submissão de Protocolos
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </li>
        <li className="p-3 flex items-center cursor-pointer hover:underline underline-offset-8 decoration-2 decoration-[#6BAA65]">
          Notícias
        </li>
      </ul> */}
    </div>
  );
}