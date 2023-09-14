import Link from "next/link";
import Carousel from "./components/carousel/carousel";

export default function Page() {
  return (
    <main>
      <Carousel />
      <Link href="/sobre-a-faculdade">Sobre</Link>
    </main>
  );
}