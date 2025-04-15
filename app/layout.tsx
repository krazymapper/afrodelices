import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from '@/components/Navigation';

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yebesse.com'),
  title: {
    default: "Yebesse - Cuisine Africaine",
    template: "%s | Yebesse",
  },
  description: "Découvrez les saveurs authentiques de la cuisine africaine et malgache. Plus de 300 recettes traditionnelles avec leurs propriétés thérapeutiques.",
  keywords: ["cuisine africaine", "recettes africaines", "cuisine malgache", "recettes traditionnelles", "propriétés thérapeutiques"],
  authors: [{ name: "Yebesse" }],
  openGraph: {
    title: "Yebesse - Cuisine Africaine",
    description: "Découvrez les saveurs authentiques de la cuisine africaine et malgache",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yebesse - Cuisine Africaine",
    description: "Découvrez les saveurs authentiques de la cuisine africaine et malgache",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={montserrat.variable}>
      <body className={montserrat.className}>
        <Navigation />
        <div className="min-h-screen bg-gradient-to-b from-orange-50/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
