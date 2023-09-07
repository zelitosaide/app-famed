import TipTap from "@/app/(website)/tip-tap";

export default async function Page({ params }) {
  return (
    <TipTap content={params.slug.split("-").join(" ")} />
  );
}