import Content from "@/app/(website)/components/tip-tap/content";
import { getContent } from "@/app/api/server";

export default async function Page({ params }) {
  const data = await getContent(params.slug);

  // console.log(params.slug);

  return (
    <Content content={data.content} />
  );
}