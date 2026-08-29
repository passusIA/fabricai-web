import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DOMINIOS, obtenerDominio } from "@/lib/diagnostico";
import { Simulador } from "./Simulador";
import "../diagnostico.css";

// Los cinco diagnósticos son contenido estático conocido en build.
export const dynamicParams = false;

export function generateStaticParams() {
  return DOMINIOS.map((d) => ({ dominio: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ dominio: string }>;
}): Promise<Metadata> {
  const { dominio: slug } = await params;
  const dominio = obtenerDominio(slug);
  if (!dominio) return { title: "Diagnóstico no encontrado · FabricAI" };

  return {
    title: `Diagnóstico de ${dominio.nombreCorto} | Simulador · FabricAI by Passus`,
    description: dominio.resumen,
    alternates: { canonical: `/diagnostico/${dominio.slug}` },
    openGraph: {
      title: `Diagnóstico de ${dominio.nombreCorto} · FabricAI`,
      description: dominio.resumen,
      url: `https://fabricai.cl/diagnostico/${dominio.slug}`,
      locale: "es_CL",
      type: "website",
    },
  };
}

export default async function DiagnosticoDominioPage({
  params,
}: {
  params: Promise<{ dominio: string }>;
}) {
  const { dominio: slug } = await params;
  const dominio = obtenerDominio(slug);
  if (!dominio) notFound();

  return (
    <>
      <section className="page-banner">
        <span className="ab x1" />
        <span className="ab x2" />
        <div className="wrap inner">
          <div className="crumbs">
            <Link href="/">Inicio</Link> · <Link href="/diagnostico">Diagnóstico</Link>{" "}
            · {dominio.nombreCorto}
          </div>
          <h1>Diagnóstico de {dominio.nombreCorto}</h1>
          <p>{dominio.resumen}</p>
        </div>
      </section>

      <Simulador dominio={dominio} />
    </>
  );
}
