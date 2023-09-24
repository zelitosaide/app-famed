import { getLinkByTitle } from "@/app/api/server";
import Link from "next/link";

export default async function Page() {
  const { children: ensino } = await getLinkByTitle("Ensino");
  const { children: mestrados } = ensino.find(function(child) {
    return child.segment === "mestrado";
  });

  return (
    <div className="pt-2.5 pr-3 pl-5 pb-5">
      <h1>Cursos de Mestrado</h1>
      <ul className="grid grid-cols-2 gap-7">
        {mestrados.map(function(link) {
          return (
            <li key={link.segment} className="bg-[#ffffff] divide-y divide-[#ddeedd] rounded shadow-md shadow-[#ddeedd] border border-[#ddeedd]">
              <Link
                className="text-base font-bold p-3 block text-[#178415] hover:underline"
                href={`/ensino/mestrado/${link.segment}`}
              >
                {link.title}
              </Link>
              <p style={{ fontSize: 15 }} className="p-3 text-zinc-500">
                Oferecer aos participantes uma formação multidisciplinar, orientada para a solução de problemas de Saúde em Moçambique e proporcionar o domínio de conceitos biomédic
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}