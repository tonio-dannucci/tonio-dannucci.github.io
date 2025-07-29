import { Books } from "@/components/books";
import { Footer } from "@/components/footer";
import { Tonio } from "@/components/tonio";

export default function Home() {
  return (
    <>
      <main id="main-content" role="main">
        <Tonio />
        <Books />
      </main>
      <Footer />
    </>
  );
}
