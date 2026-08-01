import Link from "next/link";
import { books } from "@/lib/books";

export function Books() {
  const getCategoryColor = (category: string) => {
    const colors = {
      "Etno-Antropologia": "bg-blue-50/60 border-blue-300/60",
      Memoriale: "bg-gray-50/60 border-gray-300/60",
      Poesia: "bg-purple-50/60 border-purple-300/60",
      Satira: "bg-amber-50/60 border-amber-300/60",
      "Satira in Vernacolo": "bg-orange-50/60 border-orange-300/60",
      "Scrittura Creativa": "bg-green-50/60 border-green-300/60",
      Teatro: "bg-red-50/60 border-red-300/60",
    };
    return (
      colors[category as keyof typeof colors] ||
      "bg-gray-50/60 border-gray-300/60"
    );
  };

  return (
    <section className="bg-white py-16" id="bibliografia">
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-3xl text-gray-900 sm:text-4xl">
            Bibliografia Completa
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600 text-lg">
            oltre 20 pubblicazioni nell&apos;arco di tre decenni (1995-2026),
            dalla demo-antropologia alla scrittura creativa, dalla poesia in
            italiano alle opere in dialetto lucano.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <span className="inline-flex items-center rounded-full border bg-gray-50 px-3 py-1 font-medium text-gray-600 text-sm">
              {books.length} opere totali
            </span>
            <span className="inline-flex items-center rounded-full border bg-gray-50 px-3 py-1 font-medium text-gray-600 text-sm">
              Dal 1995 al 2026
            </span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...books]
            .sort((a, b) => b.anno - a.anno)
            .map((book) => {
              const category = book.tags[0] || "Altri";
              return (
                <Link
                  aria-label={`Leggi "${book.titolo}" (${book.anno}) - si apre in una nuova finestra`}
                  className="group block"
                  href={book.href}
                  key={book.titolo}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <article
                    className={`h-full ${getCategoryColor(
                      category
                    )} rounded-lg border p-8 transition-all duration-200 group-hover:border-gray-400 group-hover:shadow-lg`}
                  >
                    <div className="mb-6 flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center rounded-full border bg-white px-3 py-1 font-medium text-gray-700 text-sm shadow-xs">
                          {book.anno}
                        </span>
                        {book.editore && (
                          <span className="inline-flex items-center rounded-full border bg-white/90 px-3 py-1 font-medium text-gray-600 text-sm">
                            {book.editore}
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="mb-4 line-clamp-2 font-bold text-gray-900 text-xl leading-tight">
                      {book.titolo}
                    </h3>

                    {book.ISBN && (
                      <p className="mb-4 rounded-sm bg-white/60 px-3 py-1 font-mono text-gray-500 text-sm">
                        ISBN: {book.ISBN}
                      </p>
                    )}

                    <p className="mb-6 line-clamp-5 text-base text-gray-600 leading-relaxed">
                      {book.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {book.tags.map((tag) => (
                          <span
                            className="inline-flex items-center rounded-full border bg-white px-3 py-1 font-medium text-gray-600 text-sm"
                            key={tag}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="ml-4 flex items-center font-medium text-gray-600 text-sm group-hover:text-gray-800">
                        Leggi
                        <svg
                          aria-hidden="true"
                          className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 5l7 7-7 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                          />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
        </div>

        <div className="mt-16 text-center">
          <div className="rounded-lg border bg-gray-50 p-8">
            <h3 className="mb-4 font-bold text-2xl text-gray-900">
              Un percorso di ricerca e creatività
            </h3>
            <p className="mx-auto max-w-3xl text-gray-600 text-lg">
              Ogni pubblicazione rappresenta un tassello del lungo percorso di
              ricerca e sperimentazione pedagogica di Tonio d&apos;Annucci,
              dalla valorizzazione delle tradizioni lucane all&apos;innovazione
              didattica nella scuola italiana.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-gray-500 text-sm md:grid-cols-4">
              <div>
                <div className="font-semibold text-gray-700 text-lg">1995</div>
                <div>Prima pubblicazione</div>
              </div>
              <div>
                <div className="font-semibold text-gray-700 text-lg">2026</div>
                <div>Ultima opera</div>
              </div>
              <div>
                <div className="font-semibold text-gray-700 text-lg">12</div>
                <div>Laboratori creativi</div>
              </div>
              <div>
                <div className="font-semibold text-gray-700 text-lg">3</div>
                <div>Decenni di attività</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
