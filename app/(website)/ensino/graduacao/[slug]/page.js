import Content from "@/app/(website)/components/tip-tap/content";

export default async function Page({ params }) {
  return (
    <Content content={params.slug.split("-").join(" ")} />
  );
}