import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tonio d'Annucci",
  description: ` Nato ad Atella (Basilicata) il 26 maggio 1944. Maestro
  elementare (1968-2011) ha realizzato numerosi progetti di
  sperimentazione/innovazione didattica e tenuto seminari di
  aggiornamento e formazione in servizio a docenti della
  provincia di Potenza e di Salerno. Esperto di Scrittura
  Creativa, apprezzato da Kenneth Koch, ha raccolto le
  produzioni Laboratoriali in 13 volumi.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/tonio.jpg" />
        <meta property="og:image:alt" content="Tonio d'Annucci" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
