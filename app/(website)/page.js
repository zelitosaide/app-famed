import Link from "next/link";
import Carousel from "./components/carousel/carousel";

import TipTap from "./tip-tap";

export default function Page() {
  return (
    <main>
      <Carousel />
      <Link href="/sobre-a-faculdade">Sobre</Link>
      <TipTap />
    </main>
  );
}