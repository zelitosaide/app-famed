import { getLinkByTitle } from "@/app/api/server";
import Link from "next/link";

export default async function Page() {
  const { children: ensino } = await getLinkByTitle("Ensino");
  const { children: mestrados } = ensino.find(function(child) {
    return child.segment === "mestrado";
  });

  return (
    <div className="pt-2.5 pr-3 pl-5 pb-5">
      <h1>Mestrado</h1>
      <ul>
        {mestrados.map(function(link) {
          return (
            <li key={link.segment}>
              <Link 
                className="block" href={`/ensino/mestrado/${link.segment}`}>
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}