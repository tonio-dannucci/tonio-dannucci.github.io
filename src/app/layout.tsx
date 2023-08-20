import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tonio d'Annucci",
  description: `Nato ad Atella (PZ) il 26/05/1944. Maestro elementare
  (1968-2011) ha realizzato numerosi progetti di innovazione
  didattica. Come curatore del volumetto 
  La Pace s'impara (1995) registra un elogio
  autografo di Roberto Fieschi (Università di Parma). Il saggio
  di demo-antropologia Atella del
  Villaggio pre-Globale (1996) viene attinto per tesi
  di laurea. Ha prodotto (1997-2012) 12 volumi di scrittura
  creativa nelle scuole di vario grado.`,
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
