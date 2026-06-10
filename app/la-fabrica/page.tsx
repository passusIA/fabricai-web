import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La Fábrica | Quiénes somos · FabricAI by Passus",
  description:
    "FabricAI es la fábrica de soluciones con IA de Passus: consultoría, formación y desarrollo, con foco en procesos reales y práctica comprobada.",
};

const respaldo = [
  "1 SaaS propio en producción",
  "3 semanas a primer agente",
  "100% del código es tuyo",
  "$0 de infraestructura al inicio",
];

const distingue = [
  {
    svg: (
      <svg viewBox="0 0 24 24">
        <path d="M13 2L3 14h7l-1 8 10-12h-7z" />
      </svg>
    ),
    title: "Enfoque práctico",
    desc: "Foco en procesos reales y resultados medibles, no en tecnología por moda.",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4-6.3-4.6L5.7 21.4 8 14 2 9.4h7.6z" />
      </svg>
    ),
    title: "Experiencia integral",
    desc: "Capacitación, consultoría y gestión TI bajo un mismo equipo, con visión técnica y estratégica.",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24">
        <path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: "Acompañamiento completo",
    desc: "Desde la idea hasta la implementación: oportunidades, pilotos y formación del equipo.",
  },
];

const normativa = [
  "Ley 21.719",
  "SII",
  "SENCE",
  "CMF",
  "Mercado Público",
  "Integración ERP/CRM",
];

export default function LaFabricaPage() {
  return (
    <>
      <section className="page-banner">
        <span className="ab x1" />
        <span className="ab x2" />
        <div className="wrap inner">
          <div className="crumbs">
            <Link href="/">Inicio</Link> · La Fábrica
          </div>
          <h1>No solo hablamos de IA: la implementamos contigo</h1>
          <p>
            FabricAI es la fábrica de soluciones con inteligencia artificial de
            Passus, con años de experiencia en consultoría, formación y gestión
            TI.
          </p>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="white">
        <div className="wrap split">
          <div>
            <span className="kicker">Quiénes somos</span>
            <h2>IA aplicada al negocio, no solo tecnología</h2>
            <p style={{ marginTop: 14 }}>
              Combinamos experiencia en gestión TI, capacitación, consultoría y
              desarrollo para acompañar la adopción práctica de la IA: identificar
              oportunidades, diseñar casos de uso, construir pilotos, implementar y
              preparar a tus equipos.
            </p>
            <p style={{ marginTop: 14 }}>
              Partimos por el problema, no por la herramienta. Y mostramos antes
              de cobrar el desarrollo.
            </p>
          </div>
          <div className="media dark">
            <span className="imgnote">IMG: equipo / consultoría + desarrollo + IA</span>
          </div>
        </div>
      </section>

      {/* RESPALDO PASSUS */}
      <section className="alt">
        <div className="wrap center">
          <span className="kicker">El respaldo</span>
          <h2>Passus: práctica comprobada, no teoría</h2>
          <p className="lead">
            Construimos y operamos Passus, un SaaS de simuladores de certificación
            con agentes de IA en producción —generación de preguntas, diagnóstico
            de brechas y estudio personalizado, con telemetría de costos, billing y
            multi-tenant—. El stack y la metodología que ofrecemos ya están
            probados en un producto real.
          </p>
          <div className="chips" style={{ justifyContent: "center" }}>
            {respaldo.map((r) => (
              <span key={r}>{r}</span>
            ))}
          </div>
          <p style={{ marginTop: 24 }}>
            <a
              className="link-arrow"
              href="https://passus.cl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Passus en passus.cl
            </a>
          </p>
        </div>
      </section>

      {/* LO QUE NOS DISTINGUE */}
      <section className="white">
        <div className="wrap center">
          <span className="kicker">Lo que nos distingue</span>
          <h2>Por qué FabricAI</h2>
        </div>
        <div className="wrap">
          <div className="cards-3">
            {distingue.map((d) => (
              <div className="linea" key={d.title}>
                <div className="ic">{d.svg}</div>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTEXTO LOCAL */}
      <section className="dark-sec">
        <div className="wrap center">
          <span className="kicker">Contexto local</span>
          <h2>Conocemos la normativa con la que operas</h2>
          <p className="lead">
            Ley 21.719, SII, SENCE, CMF y normativas locales. Construimos
            soluciones que entienden tu marco regulatorio.
          </p>
          <div
            className="chips dark"
            style={{ justifyContent: "center", marginTop: 24 }}
          >
            {normativa.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="final">
        <div className="wrap">
          <span className="kicker">Conversemos</span>
          <h2>¿Listo para fabricar tu solución?</h2>
          <div
            className="hero-cta"
            style={{ justifyContent: "center", marginTop: 24 }}
          >
            <Link href="/contacto" className="btn btn-grad">
              Solicitar mi simulación gratis
            </Link>
            <Link href="/que-fabricamos" className="btn btn-ghost">
              Ver servicios
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
