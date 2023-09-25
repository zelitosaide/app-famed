import { getPublicationsOrProjects } from "@/app/api/server";
import Publications from "./publications";
import Projects from "./projects";

export default async function Page({ params }) {
  const isPublications = params.slug === "publicacoes-da-faculdade";
  const resourceName = isPublications ? "publications" : "projects";
  const resource = await getPublicationsOrProjects(resourceName);
  
  return (
    <div className="pt-2.5 pr-3 pl-5 pb-5">
      <h1>
        {params.slug.split("-").join(" ")}
      </h1>

      {isPublications ? (
        <Publications publications={resource} />
      ) : (
        <Projects projects={resource} />
      )}

    </div>
  );
}