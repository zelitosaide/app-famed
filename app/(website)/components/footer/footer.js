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
          <ul>
            <li>
              <Link className="footer-link" href="/sobre-a-faculdade/sobre-a-faculdade-de-medicina">
                Nossa missão
              </Link>
            </li>
            <li>
              <Link className="footer-link" href="/sobre-a-faculdade/sobre-a-faculdade-de-medicina">
                Nossa visão
              </Link>
            </li>
            <li>
              <Link className="footer-link" href="/sobre-a-faculdade/sobre-a-faculdade-de-medicina">
                Nossos valores
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="footer-title">Links úteis</h2>
          <ul>
            {links.map(function(link) {
              return (
                <li key={link.href}>
                  <Link className="footer-link" href={link.href} target="_blank">
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h2 className="footer-title">Contacto</h2>
            <ul className="footer-contacto">
              <li>Av. Salvador Allende nº 702, C. Postal 257</li>
              <li>Maputo - Moçambique</li>
              <li>Telefone: (+258) 21 428076</li>
              <li>Celular: (+258) 825881101</li>
              <li>Fax: (+258) 21 325255</li>
              <li>E-mail: info.med@uem.mz</li>
            </ul>
        </div>
      </div>
    </div>
  );
}