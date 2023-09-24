import { getLinkByTitle } from "@/app/api/server";
import Link from "next/link";

export default async function Page() {
  const { children: ensino } = await getLinkByTitle("Ensino");
  const { children: graduacao } = ensino.find(function(child) {
    return child.segment === "graduacao";
  });

  return (
    <div className="pt-2.5 pr-3 pl-5 pb-5">
      <h1>Cursos de Graduação</h1>
      <ul className="flex gap-5">
        {graduacao.map(function(link) {
          return (
            <li key={link.segment} className="bg-[red]">
              <Link
                className="block" 
                href={`/ensino/graduacao/${link.segment}`}
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