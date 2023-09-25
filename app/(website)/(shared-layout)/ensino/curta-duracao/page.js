import { getCourses, getLinkByTitle } from "@/app/api/server";
import Link from "next/link";

export default async function Page() {
  const cursosCurtaDuracao = await getCourses();

  return (
    <div className="pt-2.5 pr-3 pl-5 pb-5">
      <h1>Cursos de curta duração</h1>
      <ul className="flex gap-5">
        {cursosCurtaDuracao.map(function(curso) {
          return (
            <li key={curso._id} className="bg-[red]">
              <Link
                className="block" 
                href={`/ensino/curta-duracao/${curso._id}`}
              >
                {curso.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}