import { getLinkByTitle } from "@/app/api/server";

import "./footer.css";
import Link from "next/link";

export default async function Footer() {
  const { children: links} = await getLinkByTitle("Links úteis");

  return (
    <div className="bg-[#074F07] pl-28 pr-28 pt-9 pb-9">
      <div className="grid gap-4 grid-cols-3">
        <div>
          <h2 className="footer-title">Faculdade de Medicina, UEM</h2>
        </div>
        <div>
          <h2 className="footer-title">Links úteis</h2>
          <ul>
            {links.map(function(link) {
              return (
                <li key={link.href}>
                  <Link href={link.href} target="_blank">{link.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h2 className="footer-title">Contacto</h2>
        </div>
      </div>
    </div>
  );
}