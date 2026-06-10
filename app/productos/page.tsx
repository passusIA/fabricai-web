import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos | Agentes IA en vivo · FabricAI by Passus",
  description:
    "Una vitrina de agentes y soluciones ya construidas: cumplimiento Ley 21.719, operaciones, datos, RRHH y más. Lo que ves es lo que implementamos.",
};

const demos = [
  {
    tag: "Cumplimiento · Ley 21.719",
    title: "Diagnóstico de Cumplimiento",
    desc: "Evalúa los 8 principios de la ley, genera score, mapa de brechas y plan a 90 días.",
    mini: [
      { b: "2h", s: "vs 3 semanas" },
      { b: "-95%", s: "tiempo" },
    ],
  },
  {
    tag: "Ley 21.719",
    title: "Gestor Derechos ARCO+",
    desc: "Automatiza solicitudes de acceso, rectificación, supresión y portabilidad. Controla plazos de 72h.",
    mini: [
      { b: "100%", s: "en plazo" },
      { b: "-85%", s: "carga legal" },
    ],
  },
  {
    tag: "Ley 21.719",
    title: "Agente de Brechas",
    desc: "Protocolo Art. 36°: cronómetro legal 72h y evaluación de obligatoriedad de notificar.",
    mini: [
      { b: "72h", s: "protocolo" },
      { b: "0 multas", s: "por no notificar" },
    ],
  },
  {
    tag: "Operaciones",
    title: "Agente de Licitaciones",
    desc: "Monitorea Mercado Público, filtra oportunidades y genera borradores de propuesta.",
    mini: [
      { b: "-85%", s: "tiempo búsqueda" },
      { b: "3x", s: "más evaluadas" },
    ],
  },
  {
    tag: "Datos",
    title: "Calidad de Datos",
    desc: "Audita bases: duplicados, RUTs inválidos y faltantes, con plan de remediación priorizado.",
    mini: [
      { b: "-75%", s: "tiempo" },
      { b: "99.2%", s: "precisión" },
    ],
  },
  {
    tag: "TI / ITIL",
    title: "Mesa de Ayuda",
    desc: "Clasifica, prioriza y resuelve incidentes de nivel 1 automáticamente, 24/7.",
    mini: [
      { b: "80%", s: "resolución N1" },
      { b: "24/7", s: "sin guardia" },
    ],
  },
  {
    tag: "RRHH",
    title: "Agente Onboarding",
    desc: "Guía a nuevos colaboradores por políticas, beneficios y procedimientos.",
    mini: [
      { b: "-60%", s: "carga RRHH" },
      { b: "4.8★", s: "satisfacción" },
    ],
  },
  {
    tag: "Operaciones",
    title: "Reportes Ejecutivos",
    desc: "Conecta tus fuentes de datos y genera reportes narrativos con KPIs y alertas.",
    mini: [
      { b: "8h→15min", s: "por reporte" },
      { b: "Diario", s: "frecuencia" },
    ],
  },
  {
    tag: "Capacitación",
    title: "Diseño Instruccional",
    desc: "Convierte manuales o políticas en cursos SENCE-compatibles con evaluación en minutos.",
    mini: [
      { b: "-80%", s: "tiempo diseño" },
      { b: "10x", s: "cursos/mes" },
    ],
  },
];

export default function ProductosPage() {
  return (
    <>
      <section className="page-banner">
        <span className="ab x1" />
        <span className="ab x2" />
        <div className="wrap inner">
          <div className="crumbs">
            <Link href="/">Inicio</Link> · Productos
          </div>
          <h1>Agentes en vivo</h1>
          <p>
            Lo que ves aquí es lo que implementamos en tu organización.
            Interactúa con cada uno y proyecta cómo sería el tuyo.
          </p>
        </div>
      </section>

      <section className="white">
        <div className="wrap">
          <div className="vitrina">
            {demos.map((d) => (
              <div className="demo" key={d.title}>
                <span className="tag">{d.tag}</span>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
                <div className="mini">
                  {d.mini.map((m) => (
                    <div key={m.s}>
                      <b>{m.b}</b>
                      <small>{m.s}</small>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="center" style={{ marginTop: 36 }}>
            ¿No ves lo que necesitas?{" "}
            <Link className="link-arrow" href="/contacto">
              Pide tu agente personalizado
            </Link>
          </p>
        </div>
      </section>

      <section className="final">
        <div className="wrap">
          <span className="kicker">Construcción a medida</span>
          <h2>Pide el agente que quieras</h2>
          <p className="lead">
            Cuéntanos tu proceso y lo diseñamos juntos. Prototipo rápido,
            integrado a tus sistemas y a la normativa local.
          </p>
          <div
            className="hero-cta"
            style={{ justifyContent: "center", marginTop: 26 }}
          >
            <Link href="/contacto" className="btn btn-grad">
              Solicitar agente personalizado
            </Link>
            <Link href="/diagnostico" className="btn btn-ghost">
              Diagnóstico Ley 21.719
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
