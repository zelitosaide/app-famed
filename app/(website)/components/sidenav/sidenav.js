import { getLinkByTitle } from "@/app/api/server";

export default async function SideNav() {
  const sobreNos = getLinkByTitle("Sobre a Faculdade");

  // console.log(sobreNos);

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