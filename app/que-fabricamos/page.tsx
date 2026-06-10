import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qué fabricamos | Servicios de IA · FabricAI by Passus",
  description:
    "Desde un diagnóstico de una semana hasta un producto completo con IA: MicroApps, agentes, integración, SaaS con IA y fábrica de agentes.",
};

const servicios = [
  {
    svg: (
      <svg viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </svg>
    ),
    title: "Discovery Sprint",
    desc: "1 semana para mapear procesos, identificar los 3 casos de mayor impacto y entregarte la hoja de ruta técnica.",
    precio: "Desde $800 USD",
    plazo: "1 semana · entregable inmediato",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24">
        <path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: "Agente a medida",
    desc: "Un agente diseñado para tu proceso: lee datos, decide, ejecuta acciones y reporta resultados.",
    precio: "Desde $3.500 USD",
    plazo: "3–6 semanas · llave en mano",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24">
        <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
      </svg>
    ),
    title: "Integración de IA",
    desc: "Agrega IA a tu producto o sistema actual, sin reescribir todo ni romper lo que ya funciona.",
    precio: "Desde $2.500 USD",
    plazo: "2–5 semanas · sin fricción",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24">
        <path d="M4.5 16.5L3 21l4.5-1.5M12 2s5 2 5 9c0 3-2 5-2 5H9s-2-2-2-5c0-7 5-9 5-9z" />
      </svg>
    ),
    title: "SaaS con IA",
    desc: "Tu producto completo con IA integrada, multiusuario, pagos y deploy en producción. Listo para vender.",
    precio: "Desde $15.000 USD",
    plazo: "8–16 semanas · producto completo",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24">
        <path d="M3 21V8l9-5 9 5v13M9 21v-6h6v6" />
      </svg>
    ),
    title: "Fábrica de agentes",
    desc: "Infraestructura completa para escalar: plataforma, primeros 3 agentes y framework interno.",
    precio: "Desde $35.000 USD",
    plazo: "Enterprise · a medida",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
    title: "Retainer mensual",
    desc: "Tu equipo de IA externo de forma continua: horas dedicadas, reunión semanal y reporte mensual.",
    precio: "Desde $2.000 USD/mes",
    plazo: "Mínimo 3 meses · equipo estable",
  },
];

const retainer = [
  {
    lv: "Starter",
    price: "$2.000",
    period: "USD/mes",
    dur: "20 horas/mes · Mín. 3 meses",
    features: ["Reunión semanal 30 min", "Respuesta < 4h hábiles", "Reporte mensual"],
    ideal: "Mantenimiento y mejoras continuas de un agente en producción.",
    popular: false,
  },
  {
    lv: "Growth · Más popular",
    price: "$3.800",
    period: "USD/mes",
    dur: "40 horas/mes · Mín. 3 meses",
    features: [
      "Reunión semanal 30 min",
      "Respuesta < 2h hábiles",
      "Reporte mensual",
      "Acceso directo al Tech Lead",
    ],
    ideal: "Desarrollo activo de nuevas funciones y agentes.",
    popular: true,
  },
  {
    lv: "Scale",
    price: "$6.500",
    period: "USD/mes",
    dur: "80 horas/mes · Mín. 3 meses",
    features: [
      "Reunión semanal 1h",
      "Respuesta < 1h hábiles",
      "Reporte mensual + semanal",
      "Acceso directo al Tech Lead",
      "Prioridad máxima",
    ],
    ideal: "Equipo de IA externo completo para empresas en escala.",
    popular: false,
  },
];

const verticales = [
  "RRHH y Recruiting",
  "Legal y Contratos",
  "EdTech y OTEC",
  "Finanzas",
  "Atención al cliente",
  "Salud",
  "Operaciones",
  "Licitaciones públicas",
];

export default function QueFabricamosPage() {
  return (
    <>
      <section className="page-banner">
        <span className="ab x1" />
        <span className="ab x2" />
        <div className="wrap inner">
          <div className="crumbs">
            <Link href="/">Inicio</Link> · Qué fabricamos
          </div>
          <h1>Lo que fabricamos con IA</h1>
          <p>
            Desde un diagnóstico de una semana hasta un producto completo.
            Elegimos el formato que mejor se adapta a tu contexto, no la
            herramienta de moda.
          </p>
        </div>
      </section>

      {/* 3 LÍNEAS */}
      <section className="white">
        <div className="wrap center">
          <span className="kicker">Tres líneas</span>
          <h2>Una fábrica, tres formas de empezar</h2>
          <p className="lead">
            MicroApps para lo simple y rápido, agentes y automatización para lo
            avanzado, y formación para que tu equipo aprenda a construir.
          </p>
        </div>
        <div className="wrap">
          <div className="cards-3">
            <div className="linea">
              <span className="badge">Más rápido</span>
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <rect x="4" y="3" width="16" height="18" rx="2" />
                  <path d="M8 8h8M8 12h8M8 16h5" />
                </svg>
              </div>
              <h3>MicroApps</h3>
              <p>
                Aplicaciones simples para resolver un proceso concreto, listas en
                días.
              </p>
              <p style={{ marginTop: 12 }}>
                <Link className="link-arrow" href="/microapps">
                  Ver MicroApps Express
                </Link>
              </p>
            </div>
            <div className="linea">
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
                </svg>
              </div>
              <h3>Agentes y automatización</h3>
              <p>Soluciones avanzadas para automatizar, analizar y conectar sistemas.</p>
            </div>
            <div className="linea">
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M22 10L12 5 2 10l10 5 10-5zM6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />
                </svg>
              </div>
              <h3>Formación</h3>
              <p>Aprende a usar y construir con IA, junto a tu equipo.</p>
              <p style={{ marginTop: 12 }}>
                <Link className="link-arrow" href="/cursos">
                  Ver cursos
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="alt">
        <div className="wrap center">
          <span className="kicker">Servicios</span>
          <h2>Del diagnóstico al producto completo</h2>
          <p className="lead">
            Cada servicio tiene un alcance y un tiempo claro. Sabes qué recibes y
            cuándo, con precio fijo.
          </p>
        </div>
        <div className="wrap">
          <div className="cards-3">
            {servicios.map((s) => (
              <div className="linea" key={s.title}>
                <div className="ic">{s.svg}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul>
                  <li>{s.precio}</li>
                  <li>{s.plazo}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RETAINER */}
      <section className="white">
        <div className="wrap center">
          <span className="kicker">Retainer mensual</span>
          <h2>Tu equipo de IA externo, de forma continua</h2>
          <p className="lead">
            Horas dedicadas cada mes para mantener, mejorar y crear. Elige el
            plan según tu ritmo.
          </p>
        </div>
        <div className="wrap">
          <div className="niveles">
            {retainer.map((p) => (
              <div className="nivel" key={p.lv}>
                <div className="lv">{p.lv.toUpperCase()}</div>
                <h3>
                  {p.price}{" "}
                  <span
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      color: "var(--muted)",
                    }}
                  >
                    {p.period}
                  </span>
                </h3>
                <div className="dur">{p.dur}</div>
                <ul>
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <p style={{ marginTop: 14, fontSize: "0.86rem" }}>{p.ideal}</p>
                <p style={{ marginTop: 16 }}>
                  <Link
                    href="/contacto"
                    className={p.popular ? "btn btn-grad" : "btn btn-light"}
                    style={{ padding: "11px 22px", fontSize: "0.9rem" }}
                  >
                    Contratar {p.lv.split(" ")[0]}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERTICALES */}
      <section className="alt">
        <div className="wrap center">
          <span className="kicker">Verticales</span>
          <h2>Trabajamos con tu industria</h2>
          <p className="lead">
            Donde hay procesos repetitivos y datos, hay oportunidad para una
            solución con IA.
          </p>
          <div className="chips" style={{ justifyContent: "center" }}>
            {verticales.map((v) => (
              <span key={v}>{v}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="final">
        <div className="wrap">
          <span className="kicker">Conversemos</span>
          <h2>¿No ves tu caso? Igual hablemos.</h2>
          <p className="lead">
            Cuéntanos tu proceso y te proponemos el formato que mejor calza.
          </p>
          <div
            className="hero-cta"
            style={{ justifyContent: "center", marginTop: 26 }}
          >
            <Link href="/contacto" className="btn btn-grad">
              Solicitar mi simulación gratis
            </Link>
            <Link href="/como-trabajamos" className="btn btn-ghost">
              Cómo trabajamos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
