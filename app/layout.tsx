import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Sora no es fuente variable: requiere pesos explícitos.
const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

// Inter sí es variable: no necesita weight.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fabricai.cl"),
  title: "FabricAI by Passus — Fabricamos soluciones inteligentes con IA",
  description:
    "FabricAI convierte tus procesos manuales en microapps, agentes y automatizaciones con IA. Primero la ves, luego decides si la desarrollamos.",
  keywords: [
    "microapps",
    "aplicaciones simples",
    "agentes de IA",
    "automatización",
    "inteligencia artificial",
    "soluciones con IA",
    "Passus",
    "Chile",
  ],
  openGraph: {
    title: "FabricAI by Passus — Fabricamos soluciones inteligentes con IA",
    description:
      "Microapps, agentes y automatización con IA. Primero la ves, luego decides si la desarrollamos.",
    url: "https://fabricai.cl",
    siteName: "FabricAI",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${sora.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
