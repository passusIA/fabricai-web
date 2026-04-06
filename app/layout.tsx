import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fabric AI — Agentes de IA para empresas · by Passus",
  description:
    "Construimos agentes de inteligencia artificial para empresas que quieren automatizar procesos reales. Primer agente en producción en 3 semanas.",
  openGraph: {
    title: "Fabric AI — Agentes de IA para empresas",
    description: "Primer agente en producción en 3 semanas. Stack probado en producción propia.",
    url: "https://fabricai.cl",
    siteName: "Fabric AI",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
