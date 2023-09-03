import TipTap from "@/app/(website)/tip-tap";

export default async function Page({ params }) {
  return (
    <>
      <h1 
        style={{ color: "#178415" }}
        className="text-2xl font-bold uppercase"
        >
        {params.slug.split("-").join(" ")}
      </h1>
      <TipTap />
    </>
  );
}