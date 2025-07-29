export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-amber-50 to-orange-50 border-t border-amber-200">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Sezione principale */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Tonio d&apos;Annucci
              </h3>
              <p className="text-lg text-gray-700 max-w-2xl">
                Maestro elementare, scrittore e promotore culturale lucano.
                Oltre quattro decenni dedicati all&apos;innovazione pedagogica e
                alla valorizzazione della cultura di Basilicata.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Opere principali
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Atella del villaggio pre-globale (1996)</li>
                  <li>• Laboratori di Scrittura Creativa (1995-2012)</li>
                  <li>• Affacci sul Novecento (2023)</li>
                  <li>• 100 e più del Novecento (2024)</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Aree di ricerca
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Demo-antropologia lucana</li>
                  <li>• Innovazione pedagogica</li>
                  <li>• Scrittura creativa didattica</li>
                  <li>• Tradizioni orali e dialetto</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sezione contatti e link */}
          <div className="lg:col-span-1">
            <div className="bg-white/60 rounded-lg p-6 border border-amber-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">
                Presenza digitale
              </h4>

              <div className="space-y-4">
                <a
                  href="https://www.youtube.com/@toniodannucci9485/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-red-600 transition-colors group"
                  aria-label="Canale YouTube di Tonio d'Annucci"
                >
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-red-200 transition-colors">
                    <svg
                      className="w-5 h-5 text-red-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Canale YouTube</div>
                    <div className="text-sm text-gray-500">
                      Video didattici e presentazioni
                    </div>
                  </div>
                </a>

                <div className="flex items-center text-gray-700">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121L7.94 13.208l-2.906-.906c-.63-.196-.64-.63.135-.93l11.566-4.458c.538-.196 1.006.128.832.807z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Skill Alexa</div>
                    <div className="text-sm text-gray-500">
                      Poesie de l&apos;Acquario di Chandra
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-amber-200">
                <div className="text-sm text-gray-600">
                  <div className="font-semibold mb-2">Nato ad Atella (PZ)</div>
                  <div>26 maggio 1944</div>
                  <div className="mt-2">Carriera didattica: 1968-2011</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-amber-200">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-600">
              © 1995-{new Date().getFullYear()} Tonio d&apos;Annucci. Tutti i
              diritti riservati.
            </p>
            <div className="mt-4 sm:mt-0 flex items-center text-sm text-gray-500">
              <span>Realizzato per preservare la memoria culturale lucana</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
