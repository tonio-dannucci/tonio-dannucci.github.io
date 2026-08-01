export function Tonio() {
  return (
    <>
      <HeroSection />
      <BiographySection />
      <EducationalProjectsSection />
      <LiteraryWorksSection />
      <DigitalPresenceSection />
      <RecognitionsSection />
    </>
  );
}

function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-linear-to-br from-amber-50 via-orange-50 to-yellow-50"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute top-1/2 -left-10 h-32 w-32 rounded-full bg-orange-200/30 blur-2xl" />
        <div className="absolute right-1/4 bottom-10 h-24 w-24 rounded-full bg-yellow-200/30 blur-xl" />
      </div>

      <div className="relative mx-auto max-w-(--breakpoint-xl) px-4 pt-24 pb-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="relative lg:flex lg:items-center lg:gap-12">
          {/* Image section with clean design */}
          <div className="hidden lg:block lg:shrink-0">
            <div className="relative">
              <img
                alt="Ritratto di Tonio d'Annucci, maestro elementare e autore lucano nato ad Atella nel 1944, pioniere dell'innovazione pedagogica in Basilicata"
                className="h-80 w-80 rounded-2xl object-cover shadow-lg xl:h-96 xl:w-96"
                height={320}
                itemProp="image"
                loading="eager"
                src="/tonio.jpg"
                width={320}
              />
            </div>
          </div>

          <div className="relative lg:flex-1">
            <header>
              <div className="flex">
                <div className="shrink-0 lg:hidden">
                  <img
                    alt="Ritratto di Tonio d'Annucci, maestro elementare e autore lucano"
                    className="h-20 w-20 rounded-xl object-cover shadow-md sm:h-24 sm:w-24"
                    height={96}
                    itemProp="image"
                    loading="eager"
                    src="/tonio.jpg"
                    width={96}
                  />
                </div>
                <div className="ml-4 flex sm:ml-6 lg:ml-0">
                  <div className="mb-6 lg:ml-0">
                    <div className="mb-4">
                      <div className="mb-4 inline-flex items-center rounded-full border border-amber-200/30 bg-amber-100/60 px-3 py-1 font-semibold text-amber-800 text-sm backdrop-blur-xs">
                        Maestro innovatore lucano
                      </div>
                    </div>
                    <h1
                      className="bg-linear-to-r from-gray-900 via-amber-800 to-orange-800 bg-clip-text font-bold text-3xl text-gray-900 text-transparent leading-tight sm:text-4xl lg:text-5xl xl:text-6xl"
                      itemProp="name"
                    >
                      Tonio d&apos;Annucci
                    </h1>
                    <p
                      className="mt-3 font-semibold text-amber-700 text-lg leading-relaxed sm:text-xl lg:text-2xl"
                      itemProp="jobTitle"
                    >
                      Maestro elementare, autore e promotore culturale lucano
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                      <div className="rounded-lg border border-white/30 bg-white/40 px-4 py-3 shadow-xs backdrop-blur-xs">
                        <div content="1944-05-26" itemProp="birthDate">
                          <div className="font-semibold text-gray-900">
                            26 maggio 1944
                          </div>
                          <div className="text-gray-600 text-sm">
                            <span itemProp="birthPlace">Atella (PZ)</span>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border border-white/30 bg-white/40 px-4 py-3 shadow-xs backdrop-blur-xs">
                        <div>
                          <div className="font-semibold text-gray-900">
                            1968-2011
                          </div>
                          <div className="text-gray-600 text-sm">
                            Carriera didattica
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <div className="mt-8">
              <div className="rounded-xl border border-white/30 bg-white/50 p-6 shadow-lg backdrop-blur-xs">
                <p
                  className="font-medium text-base text-gray-700 leading-relaxed sm:text-lg lg:text-xl"
                  itemProp="description"
                >
                  <span className="font-semibold text-amber-700">
                    Figura di spicco
                  </span>{" "}
                  dell&apos;innovazione pedagogica in Basilicata, ha dedicato
                  oltre{" "}
                  <strong className="text-orange-700">quattro decenni</strong>{" "}
                  alla sperimentazione didattica e alla valorizzazione della{" "}
                  <em className="text-amber-600">cultura lucana</em> attraverso
                  la scrittura creativa e un saggio di antropologia culturale.
                </p>

                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                  <span className="inline-flex items-center rounded-full bg-amber-100/70 px-3 py-1 font-medium text-amber-800">
                    21 pubblicazioni
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-100/70 px-3 py-1 font-medium text-blue-800">
                    12 laboratori creativi
                  </span>
                  <span className="inline-flex items-center rounded-full bg-green-100/70 px-3 py-1 font-medium text-green-800">
                    Innovazione pedagogica
                  </span>
                </div>
              </div>
            </div>

            <nav
              aria-label="Navigazione sezioni principali"
              className="mt-8 sm:mt-10"
            >
              <div className="flex flex-col flex-wrap gap-3 sm:flex-row sm:gap-4">
                <a
                  aria-describedby="bibliografia-desc"
                  className="group inline-flex transform items-center justify-center rounded-xl bg-linear-to-r from-amber-600 to-orange-600 px-6 py-3 text-center font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:from-amber-700 hover:to-orange-700 hover:shadow-xl sm:px-8 sm:py-4"
                  href="#bibliografia"
                >
                  Scopri le opere
                  <svg
                    aria-hidden="true"
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </a>
                <span className="sr-only" id="bibliografia-desc">
                  Esplora la bibliografia completa di oltre 21 pubblicazioni
                </span>
                <a
                  aria-describedby="progetti-desc"
                  className="group inline-flex transform items-center justify-center rounded-xl border-2 border-amber-600 bg-white/60 px-6 py-3 text-center font-bold text-amber-700 shadow-lg backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-50 hover:shadow-xl sm:px-8 sm:py-4"
                  href="#progetti"
                >
                  I progetti educativi
                  <svg
                    aria-hidden="true"
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </a>
                <span className="sr-only" id="progetti-desc">
                  Scopri i laboratori di scrittura creativa e i progetti
                  intergenerazionali
                </span>
              </div>
            </nav>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-white/30 bg-white/50 p-6 text-center shadow-lg backdrop-blur-xs">
            <div className="mb-2 font-bold text-3xl text-amber-600">43</div>
            <div className="font-medium text-gray-600 text-sm uppercase tracking-wide">
              Anni di insegnamento
            </div>
          </div>
          <div className="rounded-xl border border-white/30 bg-white/50 p-6 text-center shadow-lg backdrop-blur-xs">
            <div className="mb-2 font-bold text-3xl text-blue-600">20</div>
            <div className="font-medium text-gray-600 text-sm uppercase tracking-wide">
              Pubblicazioni
            </div>
          </div>
          <div className="rounded-xl border border-white/30 bg-white/50 p-6 text-center shadow-lg backdrop-blur-xs">
            <div className="mb-2 font-bold text-3xl text-green-600">12</div>
            <div className="font-medium text-gray-600 text-sm uppercase tracking-wide">
              Laboratori creativi
            </div>
          </div>
          <div className="rounded-xl border border-white/30 bg-white/50 p-6 text-center shadow-lg backdrop-blur-xs">
            <div className="mb-2 font-bold text-3xl text-purple-600">∞</div>
            <div className="font-medium text-gray-600 text-sm uppercase tracking-wide">
              Studenti ispirati
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BiographySection() {
  return (
    <section aria-labelledby="biografia-heading" className="bg-white py-16">
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-16">
          <article>
            <h2
              className="mb-8 font-bold text-3xl text-gray-900"
              id="biografia-heading"
            >
              Biografia
            </h2>
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <div className="rounded-r-lg border-amber-500 border-l-4 bg-linear-to-r from-amber-50 to-orange-50 p-6">
                <p className="mb-0 text-lg leading-relaxed">
                  <strong className="text-amber-800">
                    Tonio d&apos;Annucci
                  </strong>
                  , nato il{" "}
                  <span className="font-semibold text-gray-800">
                    26 maggio 1944
                  </span>{" "}
                  ad <em className="text-amber-700">Atella</em> in provincia di
                  Potenza, è una figura centrale dell&apos;innovazione
                  pedagogica lucana. Ha intrapreso la carriera
                  nell&apos;insegnamento nel{" "}
                  <span className="font-semibold">1968</span> e ha insegnato
                  nella scuola primaria fino al{" "}
                  <span className="font-semibold">2011</span>, distinguendosi
                  per il suo{" "}
                  <strong className="text-amber-700">
                    approccio didattico rivoluzionario
                  </strong>
                  .
                </p>
              </div>

              <div className="rounded-r-lg border-blue-400 border-l-4 bg-blue-50/50 p-6">
                <p className="mb-0 text-lg leading-relaxed">
                  Nel corso di oltre{" "}
                  <strong className="text-blue-700">quattro decenni</strong> di
                  attività educativa, ha ideato e realizzato numerosi{" "}
                  <em className="text-blue-600">progetti sperimentali</em>{" "}
                  all&apos;interno della scuola primaria, mirando a rinnovare i
                  metodi pedagogici tradizionali e a{" "}
                  <strong className="text-blue-700">
                    coinvolgere attivamente
                  </strong>{" "}
                  gli studenti nei processi di apprendimento.
                </p>
              </div>

              <div className="rounded-r-lg border-green-400 border-l-4 bg-green-50/50 p-6">
                <p className="mb-0 text-lg leading-relaxed">
                  In parallelo alla sua carriera di maestro, d&apos;Annucci ha
                  sviluppato un{" "}
                  <strong className="text-green-700">intenso percorso</strong>{" "}
                  come autore di{" "}
                  <em className="text-green-600">poesie, racconti e saggi</em>,
                  spesso ispirati alla sua{" "}
                  <strong className="text-green-700">
                    terra d&apos;origine
                  </strong>{" "}
                  e all&apos;esperienza didattica, creando un ponte unico tra{" "}
                  <em className="text-green-600">pedagogia e letteratura</em>.
                </p>
              </div>

              <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
                <blockquote className="border-none text-center text-gray-600 text-xl italic">
                  <span className="text-2xl text-amber-600">&ldquo;</span>
                  La creatività è l&apos;essenza dell&apos;educazione:
                  attraverso di essa i bambini scoprono non solo il mondo, ma
                  anche se stessi.
                  <span className="text-2xl text-amber-600">&rdquo;</span>
                </blockquote>
                <cite className="mt-3 block text-center font-medium text-gray-500 text-sm">
                  — Didattica Educativa di Tonio d&apos;Annucci
                </cite>
              </div>
            </div>
          </article>

          <aside aria-labelledby="timeline-heading" className="mt-12 lg:mt-0">
            <div className="rounded-lg border border-amber-200 bg-linear-to-br from-amber-50 to-orange-50 p-8">
              <h3
                className="mb-8 text-center font-bold text-gray-900 text-xl"
                id="timeline-heading"
              >
                Punti salienti della carriera
              </h3>
              <dl className="space-y-6">
                <div className="rounded-lg border-amber-500 border-l-4 bg-white/70 p-4 shadow-xs">
                  <div className="mb-2 flex items-center">
                    <dt className="font-bold text-amber-800 text-lg">
                      1968-2011
                    </dt>
                  </div>
                  <dd className="font-medium text-gray-700">
                    <strong>43 anni</strong> di insegnamento nella scuola
                    primaria
                  </dd>
                  <dd className="text-gray-600 text-sm italic">
                    Oltre quattro decenni di dedizione all&apos;educazione
                  </dd>
                </div>

                <div className="rounded-lg border-blue-500 border-l-4 bg-white/70 p-4 shadow-xs">
                  <div className="mb-2 flex items-center">
                    <dt className="font-bold text-blue-800 text-lg">
                      Anni &apos;80
                    </dt>
                  </div>
                  <dd className="font-medium text-gray-700">
                    Pioniere del <strong>tempo pieno</strong> e progetti
                    intergenerazionali
                  </dd>
                  <dd className="text-gray-600 text-sm italic">
                    Innovazione pedagogica e dialogo tra generazioni
                  </dd>
                </div>

                <div className="rounded-lg border-green-500 border-l-4 bg-white/70 p-4 shadow-xs">
                  <div className="mb-2 flex items-center">
                    <dt className="font-bold text-green-800 text-lg">
                      Anni &apos;90-2012
                    </dt>
                  </div>
                  <dd className="font-medium text-gray-700">
                    <strong>12 volumi</strong> di laboratori di scrittura
                    creativa
                  </dd>
                  <dd className="text-gray-600 text-sm italic">
                    Metodologia didattica rivoluzionaria documentata
                  </dd>
                </div>

                <div className="rounded-lg border-purple-500 border-l-4 bg-white/70 p-4 shadow-xs">
                  <div className="mb-2 flex items-center">
                    <dt className="font-bold text-lg text-purple-800">
                      21 pubblicazioni
                    </dt>
                  </div>
                  <dd className="font-medium text-gray-700">
                    <strong>Saggistica, narrativa, poesia</strong> in italiano e
                    dialetto
                  </dd>
                  <dd className="text-gray-600 text-sm italic">
                    Un corpus letterario ricco e diversificato (1995-2026)
                  </dd>
                </div>
              </dl>

              <div className="mt-8 border-amber-200 border-t pt-6 text-center">
                <div className="inline-flex items-center rounded-full bg-amber-100 px-4 py-2 font-semibold text-amber-800 text-sm">
                  <span className="mr-2">🎯</span>
                  Impatto duraturo sulla pedagogia lucana
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function EducationalProjectsSection() {
  return (
    <section className="bg-gray-50 py-16" id="progetti">
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-3xl text-gray-900">
            Progetti Educativi
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600 text-lg">
            Oltre quattro decenni di innovazione pedagogica attraverso progetti
            sperimentali che hanno rivoluzionato l&apos;approccio didattico
            nella scuola primaria lucana.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <div className="mb-6 flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-600">
                <span className="font-bold text-lg text-white">LSC</span>
              </div>
              <h3 className="ml-4 font-bold text-gray-900 text-xl">
                Laboratori di Scrittura Creativa
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900">
                  Periodo: 1997-2012
                </p>
                <p className="text-gray-700">
                  12 volumi pubblicati con le creazioni degli studenti
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Metodologia</p>
                <p className="text-gray-700">
                  Ispirata alle teorie di Gianni Rodari e Lev Vygotskij
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Riconoscimento internazionale
                </p>
                <p className="text-gray-700">
                  Lettera di apprezzamento da Kenneth Koch (Columbia University)
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg">
            <div className="mb-6 flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600">
                <span className="font-bold text-lg text-white">INT</span>
              </div>
              <h3 className="ml-4 font-bold text-gray-900 text-xl">
                Progetti Intergenerazionali
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900">
                  Anni &apos;80: Incontri con gli anziani
                </p>
                <p className="text-gray-700">
                  Interviste con artigiani locali per preservare tradizioni
                  orali
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  2000: Carcere di Melfi
                </p>
                <p className="text-gray-700">
                  Laboratorio con 13 detenuti - collaborazione con Ministero
                  Giustizia
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Formazione docenti
                </p>
                <p className="text-gray-700">
                  Seminari in Basilicata e Campania per diffondere le
                  metodologie
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-lg bg-amber-100 p-8">
          <h3 className="mb-4 font-bold text-gray-900 text-xl">
            Didattica Educativa: &quot;Creo, ergo sum&quot;
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-2 font-semibold text-gray-900">
                Principi Pedagogici
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• La creatività come essenza dell&apos;educazione</li>
                <li>• Valorizzazione della cultura locale e della memoria</li>
                <li>• Dialogo intergenerazionale tra passato e presente</li>
                <li>
                  • Scrittura creativa come strumento di crescita personale
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-gray-900">
                Metodologie Innovative
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Laboratori interdisciplinari</li>
                <li>• Raccolta e valorizzazione delle tradizioni orali</li>
                <li>• Teatro e drammatizzazione</li>
                <li>• Integrazione di tecnologie multimediali</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LiteraryWorksSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-3xl text-gray-900">
            Opera Letteraria
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600 text-lg">
            Un ricco percorso di scrittura che spazia dalla saggistica
            demo-antropologica alla narrativa, dalla poesia in italiano alle
            opere in dialetto lucano.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-lg bg-linear-to-br from-blue-50 to-indigo-50 p-8">
            <h3 className="mb-6 font-bold text-gray-900 text-xl">
              Saggistica Demo-Antropologica
            </h3>
            <div className="space-y-4">
              <div className="border-blue-600 border-l-4 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Atella del villaggio pre-globale
                </h4>
                <p className="text-gray-600 text-sm">1996 - Opera principale</p>
                <p className="mt-2 text-gray-700">
                  Studio sulla società contadina di Atella prima della modernità
                </p>
              </div>
              <div className="border-blue-400 border-l-4 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Le Stanze della Memoria
                </h4>
                <p className="text-gray-600 text-sm">2003</p>
                <p className="mt-2 text-gray-700">
                  Citata nella bibliografia di &quot;Carmine Pascià&quot; di
                  Gian Antonio Stella
                </p>
              </div>
              <div className="border-blue-300 border-l-4 pl-4">
                <h4 className="font-semibold text-gray-900">
                  La Memoria dell&apos;Oralità
                </h4>
                <p className="text-gray-600 text-sm">2006</p>
                <p className="mt-2 text-gray-700">
                  Conservazione dell&apos;identità culturale attraverso il
                  ricordo collettivo
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-linear-to-br from-green-50 to-emerald-50 p-8">
            <h3 className="mb-6 font-bold text-gray-900 text-xl">
              Narrativa e Poesia
            </h3>
            <div className="space-y-4">
              <div className="border-green-600 border-l-4 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Nei tuoi occhi di zagare assolati
                </h4>
                <p className="text-gray-600 text-sm">1997 - Esordio poetico</p>
                <p className="mt-2 text-gray-700">
                  Stile intimista con richiami ai classici latini
                </p>
              </div>
              <div className="border-green-400 border-l-4 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Serie Fabulandia
                </h4>
                <p className="text-gray-600 text-sm">2009</p>
                <p className="mt-2 text-gray-700">
                  Fiabe moderne scaturite dalla creatività dei bambini
                </p>
              </div>
              <div className="border-green-300 border-l-4 pl-4">
                <h4 className="font-semibold text-gray-900">Creo, ergo sum</h4>
                <p className="text-gray-600 text-sm">
                  2012 - Manifesto pedagogico
                </p>
                <p className="mt-2 text-gray-700">
                  Sintesi della Didattica Educativa basata sulla creatività
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-linear-to-br from-orange-50 to-red-50 p-8">
            <h3 className="mb-6 font-bold text-gray-900 text-xl">
              Opere in Dialetto Lucano
            </h3>
            <div className="space-y-4">
              <div className="border-orange-600 border-l-4 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Affacci sul Novecento
                </h4>
                <p className="text-gray-600 text-sm">2023</p>
                <p className="mt-2 text-gray-700">
                  Componimenti satirici in vernacolo atellano - Prefazione di
                  Giuseppe Lupo
                </p>
              </div>
              <div className="border-orange-400 border-l-4 pl-4">
                <h4 className="font-semibold text-gray-900">
                  100 e più del Novecento
                </h4>
                <p className="text-gray-600 text-sm">2024</p>
                <p className="mt-2 text-gray-700">
                  Seguito del precedente, tributo alle tradizioni lucane
                </p>
              </div>
              <div className="border-orange-300 border-l-4 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Bianchina affatturata
                </h4>
                <p className="text-gray-600 text-sm">2023 - Opera teatrale</p>
                <p className="mt-2 text-gray-700">
                  Satira sulla superstizione nel mondo contadino
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DigitalPresenceSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-3xl text-gray-900">
            Presenza Digitale e Innovazione
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600 text-lg">
            Nonostante appartenga a una generazione precedente all&apos;era
            digitale, Tonio d&apos;Annucci ha saputo sfruttare i nuovi media per
            diffondere il suo messaggio educativo e culturale.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg bg-red-50 p-8">
            <div className="mb-6 flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-600">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <h3 className="ml-4 font-bold text-gray-900 text-xl">
                Canale YouTube
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                Gestisce un canale personale con contenuti d&apos;archivio e
                nuovi contributi:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Video delle presentazioni pubbliche dei libri</li>
                <li>
                  • Filmati storici delle attività didattiche degli anni
                  &apos;80-&apos;90
                </li>
                <li>• Incontri tra scolari e anziani artigiani di Atella</li>
                <li>• Visite guidate al Castello di Melfi con gli alunni</li>
              </ul>
              <YoutubeLink />
            </div>
          </div>

          <div className="rounded-lg bg-blue-50 p-8">
            <div className="mb-6 flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121L7.94 13.208l-2.906-.906c-.63-.196-.64-.63.135-.93l11.566-4.458c.538-.196 1.006.128.832.807z" />
                </svg>
              </div>
              <h3 className="ml-4 font-bold text-gray-900 text-xl">
                Innovazioni Multimediali
              </h3>
            </div>
            <div className="space-y-4">
              <div className="border-blue-600 border-l-4 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Skill Amazon Alexa
                </h4>
                <p className="text-gray-700">
                  &quot;Poesie de l&apos;Acquario di Chandra&quot; - La poesia
                  lucana sui dispositivi intelligenti - a cura di Ludovico Russo
                </p>
              </div>
              <div className="border-blue-400 border-l-4 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Sito Web Personale
                </h4>
                <p className="text-gray-700">
                  tonio-dannucci.github.io - Bibliografia completa e
                  approfondimenti
                </p>
              </div>
              <div className="border-blue-300 border-l-4 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Patrimonio Culturale Digitale
                </h4>
                <p className="text-gray-700">
                  Digitalizzazione di materiali didattici e filmati d&apos;epoca
                  di grande valore etnografico
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RecognitionsSection() {
  return (
    <section className="bg-linear-to-br from-amber-50 to-orange-50 py-16">
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-3xl text-gray-900">
            Riconoscimenti e Collaborazioni
          </h2>
          <p className="text-gray-600 text-lg">
            L&apos;attività di Tonio d&apos;Annucci ha ottenuto stima e
            riconoscimenti in ambito accademico, pedagogico e letterario.
          </p>
        </div>

        <div className="mb-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h3 className="mb-6 font-bold text-gray-900 text-xl">
              Riconoscimenti Accademici
            </h3>
            <div className="space-y-4">
              <div className="border-amber-600 border-l-4 pl-4">
                <h4 className="font-semibold text-gray-900">Kenneth Koch</h4>
                <p className="text-gray-600 text-sm">
                  Columbia University, New York
                </p>
                <p className="mt-2 text-gray-700">
                  Lettera di apprezzamento: &quot;assolutamente deliziato&quot;
                  dal lavoro nei laboratori di scrittura creativa
                </p>
              </div>

              <div className="border-blue-600 border-l-4 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Daniele Giancane
                </h4>
                <p className="text-gray-600 text-sm">Università di Bari</p>
                <p className="mt-2 text-gray-700">
                  Prefazioni e collaborazioni pedagogiche
                </p>
              </div>

              <div className="border-green-600 border-l-4 pl-4">
                <h4 className="font-semibold text-gray-900">Giuseppe Lupo</h4>
                <p className="text-gray-600 text-sm">
                  Scrittore e docente universitario
                </p>
                <p className="mt-2 text-gray-700">
                  Prefazioni per le opere dialettali recenti (2023-2024)
                </p>
              </div>

              <div className="border-red-600 border-l-4 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Gian Antonio Stella
                </h4>
                <p className="text-gray-600 text-sm">Giornalista e scrittore</p>
                <p className="mt-2 text-gray-700">
                  Citazione di &quot;Le Stanze della Memoria&quot; nella
                  bibliografia del romanzo &quot;Carmine Pascià&quot; (Rizzoli,
                  2008)
                </p>
              </div>

              <div className="border-purple-600 border-l-4 pl-4">
                <h4 className="font-semibold text-gray-900">Roberto Fieschi</h4>
                <p className="text-gray-600 text-sm">
                  Docente universitario di Fisica
                </p>
                <p className="mt-2 text-gray-700">
                  Ringraziamento per la citazione nella nell&apos;opera{" "}
                  <em>Pace s&apos;impara</em>
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h3 className="mb-6 font-bold text-gray-900 text-xl">
              Enti e Collaborazioni
            </h3>
            <div className="space-y-4">
              <div className="border-amber-600 border-l-4 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Casa editrice Basiliskos
                </h4>
                <p className="text-gray-700">
                  Partnership storica dal 1995 - Pubblicazione di opere
                  principali e supporto ad altri scrittori locali
                </p>
              </div>

              <div className="border-purple-600 border-l-4 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Regione Basilicata
                </h4>
                <p className="text-gray-700">
                  Contributo per concorso &quot;1996: Anno dell&apos;identità
                  Lucana&quot;
                </p>
              </div>

              <div className="border-blue-600 border-l-4 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Associazione Culturale Basileus
                </h4>
                <p className="text-gray-700">
                  Organizzazione presentazioni pubbliche e diffusione culturale
                  ad Atella
                </p>
              </div>

              <div className="border-green-600 border-l-4 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Ministero di Grazia e Giustizia
                </h4>
                <p className="text-gray-700">
                  Collaborazione per il laboratorio nella Casa Circondariale di
                  Melfi (2000)
                </p>
              </div>

              <div className="border-red-600 border-l-4 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Provveditorato agli Studi
                </h4>
                <p className="text-gray-700">
                  Formazione docenti e diffusione metodologie innovative in
                  Basilicata e Campania
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-8 text-center shadow-lg">
          <h3 className="mb-4 font-bold text-2xl text-gray-900">Legacy</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="mb-2 font-bold text-3xl text-amber-600">
                56 anni
              </div>
              <p className="text-gray-700">di attività culturale continua</p>
            </div>
            <div>
              <div className="mb-2 font-bold text-3xl text-amber-600">20</div>
              <p className="text-gray-700">pubblicazioni in tre decenni</p>
            </div>
            <div>
              <div className="mb-2 font-bold text-3xl text-amber-600">∞</div>
              <p className="text-gray-700">studenti ispirati alla creatività</p>
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-gray-600 text-lg">
            <em>
              &quot;Innovazione educativa e valorizzazione della cultura lucana:
              un ponte tra tradizione e futuro.&quot;
            </em>
          </p>
        </div>
      </div>
    </section>
  );
}

function YoutubeLink() {
  return (
    <div className="mt-4">
      <a
        aria-label="Visita il canale YouTube di Tonio d'Annucci con video didattici e presentazioni (si apre in una nuova finestra)"
        className="inline-flex items-center rounded-lg bg-red-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-red-700"
        href="https://www.youtube.com/@toniodannucci9485/videos"
        rel="noopener noreferrer"
        target="_blank"
        title="Canale YouTube - Video didattici d'epoca e presentazioni recenti"
      >
        <span>Guarda i video su YouTube</span>
        <svg
          aria-hidden="true"
          className="ml-2 h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      </a>
    </div>
  );
}
