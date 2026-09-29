import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import { MetaPixel } from "@/components/MetaPixel";
import { PricingScroll } from "@/components/PricingScroll";
import "./globals.css";

const display = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mp-deluxe.vercel.app"),
  title: "Mega Pack Religión — Criativarts",
  description:
    "Más de 200 diseños originales en alta resolución, listos para imprimir en cuadros de cualquier tamaño. Uso comercial incluido y archivos organizados.",
  keywords: [
    "Mega Pack Religión",
    "Criativarts",
    "diseños originales",
    "diseños para cuadros",
    "alta resolución",
    "listos para imprimir",
    "uso comercial",
    "archivos digitales",
  ],
  openGraph: {
    title: "Mega Pack Religión — Criativarts",
    description:
      "Diseños originales en alta resolución, listos para imprimir en cuadros de cualquier tamaño.",
    url: "/",
    siteName: "Mega Pack Religión",
    type: "website",
    locale: "es_LA",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Mega Pack Religión — Diseños originales para cuadros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mega Pack Religión — Criativarts",
    description:
      "Diseños originales en alta resolución, listos para imprimir en cuadros de cualquier tamaño.",
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <body className="antialiased">
        <MetaPixel />
        <PricingScroll />
        {children}
      </body>
    </html>
  );
}
