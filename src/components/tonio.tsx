import Image from "next/image";

export const Tonio = () => {
  return (
    <section className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-screen-xl px-4 pb-12 pt-20 sm:px-6 lg:px-8 lg:py-20">
        <svg
          className="absolute left-0 top-full -translate-y-24 translate-x-80 transform lg:hidden"
          width="784"
          height="404"
          fill="none"
          viewBox="0 0 784 404"
        >
          <defs>
            <pattern
              id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="784"
            height="404"
            fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)"
          />
        </svg>

        <svg
          className="absolute right-full top-1/2 hidden -translate-y-1/2 translate-x-1/2 transform lg:block"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="56409614-3d62-4985-9a10-7ca758a8f4f0"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)"
          />
        </svg>

        <div className="relative lg:flex lg:items-center">
          <div className="hidden lg:block lg:flex-shrink-0">
            <Image
              width={256}
              height={256}
              className="h-64 w-64 rounded-xl xl:h-80 xl:w-80"
              src="/tonio.jpg"
              alt="Tonio d'Annucci"
            />
          </div>

          <div className="relative lg:ml-10">
            <blockquote className="relative">
              <div className="text-md leading-2 font-medium text-gray-700 lg:text-xl ">
                <p>
                  Nato ad Atella (Basilicata) il 26 maggio 1944. Maestro
                  elementare (1968-2011) ha realizzato numerosi progetti di
                  sperimentazione/innovazione didattica e tenuto seminari di
                  aggiornamento e formazione in servizio a docenti della
                  provincia di Potenza e di Salerno. Esperto di Scrittura
                  Creativa, apprezzato da Kenneth Koch, ha raccolto le
                  produzioni Laboratoriali in 13 volumi.
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex">
                  <div className="flex-shrink-0 lg:hidden">
                    <Image
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-xl"
                      src="/tonio.jpg"
                      alt="Tonio d'Annucci"
                    />
                  </div>
                  <div className="flex">
                    <div className="ml-4 lg:ml-0">
                      <div className="text-2xl font-bold  leading-6 text-gray-900">
                        Tonio d&apos;Annucci {"     "}
                      </div>
                      <div className="text-lg mt-2 font-medium leading-6 text-red-600">
                        Scrittore e Professore Lucano
                      </div>
                      <div className="mt-4 space-x-2">
                        <a
                          className="rounded bg-red-200 px-4 flex py-2 text-red-600 ring-red-800 transition-all hover:ring-2"
                          target="_blank"
                          href="https://www.youtube.com/channel/UCnABfizdU-u3sjHVXuaDU2g"
                          rel="noreferrer"
                        >
                          <span className="">
                            Guarda i miei video su YouTube
                          </span>
                          <svg
                            className=" ml-2"
                            width="20px"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 461.001 461.001"
                          >
                            <g>
                              <path
                                fill="currentColor"
                                d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
		c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
		C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
		c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
                              />
                            </g>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
