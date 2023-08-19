import "./header.css";

import { getHeaderLinks, getLinks } from "@/app/api/server";

import LeftHeader from "./left-header";
import RightHeader from "./right-header";

export default async function HeaderContainer() {
  const linksData = getHeaderLinks();
  const socialNetworksData = await getLinks("redes-sociais");

  const [links, socialNetworks] = await Promise.all([
    linksData, socialNetworksData
  ]);
  
  return (
    <header 
      style={{ backgroundColor: "rgb(var(--accent-rgb))" }} 
      className="pl-28 pr-28 flex justify-between"
    >
      <div>
        <LeftHeader links={links} />
      </div>

      <div className="flex gap-2 items-center pr-3">
        <RightHeader socialNetworks={socialNetworks[0].children} />
      </div>
    </header>
  );
}