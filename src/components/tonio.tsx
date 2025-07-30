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
      className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-10 w-32 h-32 bg-orange-200/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-yellow-200/30 rounded-full blur-xl"></div>
      </div>

      <div className="relative mx-auto max-w-screen-xl px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:py-24">
        <div className="relative lg:flex lg:items-center lg:gap-12">
          {/* Image section with enhanced styling */}
          <div className="hidden lg:block lg:flex-shrink-0 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-2xl blur-lg"></div>
            <div className="relative bg-white/80 backdrop-blur-sm p-3 rounded-2xl shadow-2xl border border-white/50">
              <img
                width={320}
                height={320}
                className="h-80 w-80 rounded-xl shadow-xl xl:h-96 xl:w-96 object-cover"
                src="/tonio.jpg"
                alt="Ritratto di Tonio d'Annucci, maestro elementare e autore lucano nato ad Atella nel 1944, pioniere dell'innovazione pedagogica in Basilicata"
                itemProp="image"
                loading="eager"
              />
            </div>
          </div>

          <div className="relative lg:flex-1">
            <header>
              <div className="flex">
                <div className="flex-shrink-0 lg:hidden relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/30 to-orange-400/30 rounded-xl blur-sm"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm p-2 rounded-xl shadow-lg border border-white/50">
                    <img
                      width={96}
                      height={96}
                      className="h-24 w-24 rounded-lg object-cover"
                      src="/tonio.jpg"
                      alt="Ritratto di Tonio d'Annucci, maestro elementare e scrittore lucano"
                      itemProp="image"
                      loading="eager"
                    />
                  </div>
                </div>
                <div className="flex ml-6 lg:ml-0">
                  <div className="mb-6 lg:ml-0">
                    <div className="mb-4">
                      <div className="inline-flex items-center px-3 py-1 bg-amber-100/60 backdrop-blur-sm text-amber-800 text-sm font-semibold rounded-full border border-amber-200/30 mb-4">
                        Maestro innovatore lucano
                      </div>
                    </div>
                    <h1
                      className="text-4xl font-bold leading-tight text-gray-900 lg:text-5xl xl:text-6xl bg-gradient-to-r from-gray-900 via-amber-800 to-orange-800 bg-clip-text text-transparent"
                      itemProp="name"
                    >
                      Tonio d&apos;Annucci
                    </h1>
                    <p
                      className="text-xl mt-3 font-semibold leading-relaxed text-amber-700 lg:text-2xl"
                      itemProp="jobTitle"
                    >
                      Maestro elementare, autore e promotore culturale lucano
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                      <div className="bg-white/40 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/30 shadow-sm">
                        <div itemProp="birthDate" content="1944-05-26">
                          <div className="font-semibold text-gray-900">
                            26 maggio 1944
                          </div>
                          <div className="text-sm text-gray-600">
                            <span itemProp="birthPlace">Atella (PZ)</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/40 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/30 shadow-sm">
                        <div>
                          <div className="font-semibold text-gray-900">
                            1968-2011
                          </div>
                          <div className="text-sm text-gray-600">
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
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-white/30 shadow-lg">
                <p
                  className="text-lg leading-relaxed text-gray-700 lg:text-xl font-medium"
                  itemProp="description"
                >
                  <span className="text-amber-700 font-semibold">
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
                  <span className="inline-flex items-center px-3 py-1 bg-amber-100/70 text-amber-800 rounded-full font-medium">
                    20 pubblicazioni
                  </span>
                  <span className="inline-flex items-center px-3 py-1 bg-blue-100/70 text-blue-800 rounded-full font-medium">
                    12 laboratori creativi
                  </span>
                  <span className="inline-flex items-center px-3 py-1 bg-green-100/70 text-green-800 rounded-full font-medium">
                    Innovazione pedagogica
                  </span>
                </div>
              </div>
            </div>

            <nav className="mt-10" aria-label="Navigazione sezioni principali">
              <div className="flex flex-wrap gap-4">
                <a
                  href="#bibliografia"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-xl hover:from-amber-700 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  aria-describedby="bibliografia-desc"
                >
                  Scopri le opere
                  <svg
                    className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
                <span id="bibliografia-desc" className="sr-only">
                  Esplora la bibliografia completa di oltre 30 pubblicazioni
                </span>
                <a
                  href="#progetti"
                  className="group inline-flex items-center px-8 py-4 bg-white/60 backdrop-blur-sm border-2 border-amber-600 text-amber-700 font-bold rounded-xl hover:bg-amber-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  aria-describedby="progetti-desc"
                >
                  I progetti educativi
                  <svg
                    className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
                <span id="progetti-desc" className="sr-only">
                  Scopri i laboratori di scrittura creativa e i progetti
                  intergenerazionali
                </span>
              </div>
            </nav>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-white/30 shadow-lg text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">43</div>
            <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              Anni di insegnamento
            </div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-white/30 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">20</div>
            <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              Pubblicazioni
            </div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-white/30 shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">12</div>
            <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              Laboratori creativi
            </div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-white/30 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">∞</div>
            <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
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
    <section className="py-16 bg-white" aria-labelledby="biografia-heading">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
          <article>
            <h2
              id="biografia-heading"
              className="text-3xl font-bold text-gray-900 mb-8"
            >
              Biografia
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                <p className="text-lg leading-relaxed mb-0">
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

              <div className="bg-blue-50/50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                <p className="text-lg leading-relaxed mb-0">
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

              <div className="bg-green-50/50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <p className="text-lg leading-relaxed mb-0">
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

              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <blockquote className="text-xl italic text-gray-600 text-center border-none">
                  <span className="text-amber-600 text-2xl">&ldquo;</span>
                  La creatività è l&apos;essenza dell&apos;educazione:
                  attraverso di essa i bambini scoprono non solo il mondo, ma
                  anche se stessi.
                  <span className="text-amber-600 text-2xl">&rdquo;</span>
                </blockquote>
                <cite className="block text-center text-sm text-gray-500 mt-3 font-medium">
                  — Didattica Educativa di Tonio d&apos;Annucci
                </cite>
              </div>
            </div>
          </article>

          <aside className="mt-12 lg:mt-0" aria-labelledby="timeline-heading">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-8 border border-amber-200">
              <h3
                id="timeline-heading"
                className="text-xl font-bold text-gray-900 mb-8 text-center"
              >
                Punti salienti della carriera
              </h3>
              <dl className="space-y-6">
                <div className="bg-white/70 rounded-lg p-4 border-l-4 border-amber-500 shadow-sm">
                  <div className="flex items-center mb-2">
                    <dt className="font-bold text-amber-800 text-lg">
                      1968-2011
                    </dt>
                  </div>
                  <dd className="text-gray-700 font-medium">
                    <strong>43 anni</strong> di insegnamento nella scuola
                    primaria
                  </dd>
                  <dd className="text-sm text-gray-600 italic">
                    Oltre quattro decenni di dedizione all&apos;educazione
                  </dd>
                </div>

                <div className="bg-white/70 rounded-lg p-4 border-l-4 border-blue-500 shadow-sm">
                  <div className="flex items-center mb-2">
                    <dt className="font-bold text-blue-800 text-lg">
                      Anni &apos;80
                    </dt>
                  </div>
                  <dd className="text-gray-700 font-medium">
                    Pioniere del <strong>tempo pieno</strong> e progetti
                    intergenerazionali
                  </dd>
                  <dd className="text-sm text-gray-600 italic">
                    Innovazione pedagogica e dialogo tra generazioni
                  </dd>
                </div>

                <div className="bg-white/70 rounded-lg p-4 border-l-4 border-green-500 shadow-sm">
                  <div className="flex items-center mb-2">
                    <dt className="font-bold text-green-800 text-lg">
                      Anni &apos;90-2012
                    </dt>
                  </div>
                  <dd className="text-gray-700 font-medium">
                    <strong>12 volumi</strong> di laboratori di scrittura
                    creativa
                  </dd>
                  <dd className="text-sm text-gray-600 italic">
                    Metodologia didattica rivoluzionaria documentata
                  </dd>
                </div>

                <div className="bg-white/70 rounded-lg p-4 border-l-4 border-purple-500 shadow-sm">
                  <div className="flex items-center mb-2">
                    <dt className="font-bold text-purple-800 text-lg">
                      20 pubblicazioni
                    </dt>
                  </div>
                  <dd className="text-gray-700 font-medium">
                    <strong>Saggistica, narrativa, poesia</strong> in italiano e
                    dialetto
                  </dd>
                  <dd className="text-sm text-gray-600 italic">
                    Un corpus letterario ricco e diversificato (1995-2024)
                  </dd>
                </div>
              </dl>

              <div className="mt-8 pt-6 border-t border-amber-200 text-center">
                <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold">
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
    <section id="progetti" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Progetti Educativi
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oltre quattro decenni di innovazione pedagogica attraverso progetti
            sperimentali che hanno rivoluzionato l&apos;approccio didattico
            nella scuola primaria lucana.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">LSC</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 ml-4">
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

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">INT</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 ml-4">
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

        <div className="mt-12 bg-amber-100 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Didattica Educativa: &quot;Creo, ergo sum&quot;
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
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
              <h4 className="font-semibold text-gray-900 mb-2">
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
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Opera Letteraria
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Un ricco percorso di scrittura che spazia dalla saggistica
            demo-antropologica alla narrativa, dalla poesia in italiano alle
            opere in dialetto lucano.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Saggistica Demo-Antropologica
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Atella del villaggio pre-globale
                </h4>
                <p className="text-sm text-gray-600">1996 - Opera principale</p>
                <p className="text-gray-700 mt-2">
                  Studio sulla società contadina di Atella prima della modernità
                </p>
              </div>
              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Le Stanze della Memoria
                </h4>
                <p className="text-sm text-gray-600">2003</p>
                <p className="text-gray-700 mt-2">
                  Citata nella bibliografia di &quot;Carmine Pascià&quot; di
                  Gian Antonio Stella
                </p>
              </div>
              <div className="border-l-4 border-blue-300 pl-4">
                <h4 className="font-semibold text-gray-900">
                  La Memoria dell&apos;Oralità
                </h4>
                <p className="text-sm text-gray-600">2006</p>
                <p className="text-gray-700 mt-2">
                  Conservazione dell&apos;identità culturale attraverso il
                  ricordo collettivo
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Narrativa e Poesia
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Nei tuoi occhi di zagare assolati
                </h4>
                <p className="text-sm text-gray-600">1997 - Esordio poetico</p>
                <p className="text-gray-700 mt-2">
                  Stile intimista con richiami ai classici latini
                </p>
              </div>
              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Serie Fabulandia
                </h4>
                <p className="text-sm text-gray-600">2009</p>
                <p className="text-gray-700 mt-2">
                  Fiabe moderne scaturite dalla creatività dei bambini
                </p>
              </div>
              <div className="border-l-4 border-green-300 pl-4">
                <h4 className="font-semibold text-gray-900">Creo, ergo sum</h4>
                <p className="text-sm text-gray-600">
                  2012 - Manifesto pedagogico
                </p>
                <p className="text-gray-700 mt-2">
                  Sintesi della Didattica Educativa basata sulla creatività
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Opere in Dialetto Lucano
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-orange-600 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Affacci sul Novecento
                </h4>
                <p className="text-sm text-gray-600">2023</p>
                <p className="text-gray-700 mt-2">
                  Componimenti satirici in vernacolo atellano - Prefazione di
                  Giuseppe Lupo
                </p>
              </div>
              <div className="border-l-4 border-orange-400 pl-4">
                <h4 className="font-semibold text-gray-900">
                  100 e più del Novecento
                </h4>
                <p className="text-sm text-gray-600">2024</p>
                <p className="text-gray-700 mt-2">
                  Seguito del precedente, tributo alle tradizioni lucane
                </p>
              </div>
              <div className="border-l-4 border-orange-300 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Bianchina affatturata
                </h4>
                <p className="text-sm text-gray-600">2023 - Opera teatrale</p>
                <p className="text-gray-700 mt-2">
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
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Presenza Digitale e Innovazione
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nonostante appartenga a una generazione precedente all&apos;era
            digitale, Tonio d&apos;Annucci ha saputo sfruttare i nuovi media per
            diffondere il suo messaggio educativo e culturale.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="bg-red-50 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 ml-4">
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

          <div className="bg-blue-50 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121L7.94 13.208l-2.906-.906c-.63-.196-.64-.63.135-.93l11.566-4.458c.538-.196 1.006.128.832.807z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 ml-4">
                Innovazioni Multimediali
              </h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Skill Amazon Alexa
                </h4>
                <p className="text-gray-700">
                  &quot;Poesie de l&apos;Acquario di Chandra&quot; - La poesia
                  lucana sui dispositivi intelligenti - a cura di Ludovico Russo
                </p>
              </div>
              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Sito Web Personale
                </h4>
                <p className="text-gray-700">
                  tonio-dannucci.github.io - Bibliografia completa e
                  approfondimenti
                </p>
              </div>
              <div className="border-l-4 border-blue-300 pl-4">
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
    <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Riconoscimenti e Collaborazioni
          </h2>
          <p className="text-lg text-gray-600">
            L&apos;attività di Tonio d&apos;Annucci ha ottenuto stima e
            riconoscimenti in ambito accademico, pedagogico e letterario.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Riconoscimenti Accademici
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-amber-600 pl-4">
                <h4 className="font-semibold text-gray-900">Kenneth Koch</h4>
                <p className="text-sm text-gray-600">
                  Columbia University, New York
                </p>
                <p className="text-gray-700 mt-2">
                  Lettera di apprezzamento: &quot;assolutamente deliziato&quot;
                  dal lavoro nei laboratori di scrittura creativa
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Daniele Giancane
                </h4>
                <p className="text-sm text-gray-600">Università di Bari</p>
                <p className="text-gray-700 mt-2">
                  Prefazioni e collaborazioni pedagogiche
                </p>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="font-semibold text-gray-900">Giuseppe Lupo</h4>
                <p className="text-sm text-gray-600">
                  Scrittore e docente universitario
                </p>
                <p className="text-gray-700 mt-2">
                  Prefazioni per le opere dialettali recenti (2023-2024)
                </p>
              </div>

              <div className="border-l-4 border-red-600 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Gian Antonio Stella
                </h4>
                <p className="text-sm text-gray-600">Giornalista e scrittore</p>
                <p className="text-gray-700 mt-2">
                  Citazione di &quot;Le Stanze della Memoria&quot; nella
                  bibliografia del romanzo &quot;Carmine Pascià&quot; (Rizzoli,
                  2008)
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="font-semibold text-gray-900">Roberto Freschi</h4>
                <p className="text-sm text-gray-600">
                  Docente universitario di Fisica
                </p>
                <p className="text-gray-700 mt-2">
                  Ringraziamento per la citazione nella nell&apos;opera{" "}
                  <em>Pace s&apos;impara</em>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Enti e Collaborazioni
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-amber-600 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Casa editrice Basiliskos
                </h4>
                <p className="text-gray-700">
                  Partnership storica dal 1995 - Pubblicazione di opere
                  principali e supporto ad altri scrittori locali
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Regione Basilicata
                </h4>
                <p className="text-gray-700">
                  Contributo per concorso &quot;1996: Anno dell&apos;identità
                  Lucana&quot;
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Associazione Culturale Basileus
                </h4>
                <p className="text-gray-700">
                  Organizzazione presentazioni pubbliche e diffusione culturale
                  ad Atella
                </p>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Ministero di Grazia e Giustizia
                </h4>
                <p className="text-gray-700">
                  Collaborazione per il laboratorio nella Casa Circondariale di
                  Melfi (2000)
                </p>
              </div>

              <div className="border-l-4 border-red-600 pl-4">
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

        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Legacy</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">
                56 anni
              </div>
              <p className="text-gray-700">di attività culturale continua</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">20</div>
              <p className="text-gray-700">pubblicazioni in tre decenni</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">∞</div>
              <p className="text-gray-700">studenti ispirati alla creatività</p>
            </div>
          </div>
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
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
        className="inline-flex items-center px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
        target="_blank"
        href="https://www.youtube.com/@toniodannucci9485/videos"
        rel="noopener noreferrer"
        aria-label="Visita il canale YouTube di Tonio d'Annucci con video didattici e presentazioni (si apre in una nuova finestra)"
        title="Canale YouTube - Video didattici d'epoca e presentazioni recenti"
      >
        <span>Guarda i video su YouTube</span>
        <svg
          className="w-5 h-5 ml-2"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      </a>
    </div>
  );
}
