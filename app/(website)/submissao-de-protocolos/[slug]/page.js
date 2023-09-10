import { getContent } from "@/app/api/server";
import Content from "@/app/(website)/components/tip-tap/content";

export default async function Page({ params }) {
  const data = await getContent(params.slug);
  console.log(data);

  return (
    <Content content={data.content} id={data._id} />
  );
}