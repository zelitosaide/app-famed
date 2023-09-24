import { getLinkByTitle } from "@/app/api/server";
import Link from "next/link";

export default async function Page() {
  const { children: ensino } = await getLinkByTitle("Ensino");
  const { children: curtaDuracao = [] } = ensino.find(function(child) {
    return child.segment === "curta-duracao";
  });

  return (
    <div className="pt-2.5 pr-3 pl-5 pb-5">
      <h1>Cursos de curta duração</h1>
      <ul className="flex gap-5">
        {curtaDuracao.map(function(link) {
          return (
            <li key={link.segment} className="bg-[red]">
              <Link
                className="block" 
                href={`/ensino/curta-duracao/${link.segment}`}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}