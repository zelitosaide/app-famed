import "./header.css";

import { getHeaderLinks, getSocialNetworks } from "@/app/api/server";

import LeftHeader from "./left-header";
import RightHeader from "./right-header";

export default async function Header() {
  const links = await getHeaderLinks();
  const socialNetworks = await getSocialNetworks();
  
  return (
    <header 
      style={{ backgroundColor: "rgb(var(--accent-rgb))" }} 
      className="pl-28 pr-28 flex justify-between"
    >
      <div>
        <LeftHeader links={links} />
      </div>

      <div className="flex gap-2 items-center pr-3">
        <RightHeader socialNetworks={socialNetworks} />
      </div>
    </header>
  );
}