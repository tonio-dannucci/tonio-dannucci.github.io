import { Books } from "@/components/books";
import { Tonio } from "@/components/tonio";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Tonio />
      <Books />
    </main>
  );
}
