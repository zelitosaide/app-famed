import { getLinkByTitle } from "@/app/api/server";
import Accordion from "./accordion";

export default async function SideNav() {
  const paginaInicial = getLinkByTitle("Página Inicial");
  const sobreNos = getLinkByTitle("Sobre a Faculdade");
  const ensino = getLinkByTitle("Ensino");
  const investigacao = getLinkByTitle("Investigação");
  const extensao = getLinkByTitle("Extensão");
  const subProtocolos = getLinkByTitle("Submissão de Protocolos");
  const noticias = getLinkByTitle("Notícias");
  const consultasBioestatistica = getLinkByTitle("Consultas de Bioestatística");

  const links = await Promise.all([
    paginaInicial, 
    sobreNos, 
    ensino, 
    investigacao, 
    extensao, 
    subProtocolos, 
    noticias,
    consultasBioestatistica
  ]);

  return (
    <Accordion links={links} />
  );
}