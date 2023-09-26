import Link from "next/link";



export default function Projects({ projects }) {
  return (
    <ul className="grid grid-cols-1 gap-y-7">
      {projects.map(function(project) {
        const src = project.description.includes("PROJECTO YKP") 
          ? "/proj_1.png"
          : project.description.includes("PROJECTO INCUBATOR") ? "/incubator_.png" : 
          project.description.includes("Pneumocystis jirovecii") ? "/pcp_.png" : project.image.base64Image;

        return (
          <li 
            key={project._id}
            className="overflow-hidden bg-[#ffffff] rounded shadow-sm shadow-[#ddeedd] border border-[#ddeedd]"
          >
            <div className="flex">
              <p className="shrink-0 w-40 flex">
                <img 
                  src={src}
                  style={{ width: "100%" }}
                />
              </p>
              <div className="p-3">
                <Link
                  href={`/investigacao/projectos-de-pesquisa-da-faculdade/${project._id}`}
                  className="text-base font-bold pb-3 text-[#178415] hover:underline"
                >
                  {project.title}
                </Link>
                <p style={{ fontSize: 15 }} className="text-[#C7681C] pt-1">
                  Início do Projecto: Fim do Projecto:
                </p>
                <p style={{ fontSize: 15 }} className="text-zinc-500 pt-2">
                  {project.description.slice(0, 200)}
                </p>
              </div>
            </div>
            {/* <div style={{ fontSize: 15 }} className="pt-3 pb-2">
              <p className="text-zinc-500">
                {project.authors.join(", ")}
              </p>
              <p className="text-[#C7681C] pt-2 italic">
                {project.review}. PMID: {project.pmid}
              </p>
            </div> */}
          </li>
        );
      })}
    </ul>
  );
}