import { getLinkByTitle } from "@/app/api/server";

export default async function SideNav() {
  const sobreNos = getLinkByTitle("Sobre a Faculdade");
  const ensino = getLinkByTitle("Ensino");
  const investigacao = getLinkByTitle("Investigação");
  const extensao = getLinkByTitle("Extensão");
  const subProtocolos = getLinkByTitle("Submissão de Protocolos");
  const noticias = getLinkByTitle("Notícias");

  const links = await Promise.all([
    sobreNos, ensino, investigacao, extensao, subProtocolos, noticias
  ]);

  return (
    <div 
      style={{ 
        width: "100%", 
        background: "#1b9a19", 
        height: 400 
      }} 
    />
  );
}