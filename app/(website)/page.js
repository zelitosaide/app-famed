import Link from "next/link";
import Carousel from "./components/carousel/carousel";
import { getNews } from "../api/server";

export default async function Page() {
  const news = await getNews();

  return (
    <main className="pl-28 pr-28">
      <Carousel news={news} />
      <Link href="/sobre-a-faculdade">Sobre</Link>
    </main>
  );
}