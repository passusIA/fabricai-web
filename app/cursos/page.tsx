import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cursos | Aprende a construir con IA · FabricAI by Passus",
  description:
    "Formación práctica en IA: niveles Esencial, Productivo y Constructor para equipos, y cursos online a tu ritmo. Con Cursor, Claude Code, Make, n8n y más.",
};

const niveles = [
  {
    lv: "NIVEL 1 · ESENCIAL",
    title: "IA en tu trabajo",
    dur: "8 horas · sin requisitos · presencial u online",
    items: [
      "Panorama de herramientas (Claude, ChatGPT, Gemini)",
      "Prompting efectivo para cualquier modelo",
      "Casos de uso por área de negocio",
      "Cursor AI para productividad",
      "Ética, riesgos y gobernanza básica",
    ],
  },
  {
    lv: "NIVEL 2 · PRODUCTIVO",
    title: "Flujos y APIs",
    dur: "16 horas · 4 sesiones · requiere Nivel 1",
    items: [
      "Prompting avanzado y system prompts",
      "Automatización con Make y n8n",
      "Integración de APIs de IA (Claude, OpenAI)",
      "IA como analista de datos y documentos",
      "Gobernanza y política de IA corporativa",
    ],
  },
  {
    lv: "NIVEL 3 · CONSTRUCTOR",
    title: "Agentes en producción",
    dur: "24 horas · 6 sesiones · online en vivo",
    items: [
      "Desarrollo con Claude Code y Cursor",
      "Agentes con OpenClaw y SDK de Anthropic",
      "Tool Use / Function Calling",
      "Sistemas multi-agente coordinados",
      "Deploy, telemetría y costos en producción",
    ],
  },
];

const online = [
  {
    lv: "ONLINE · BÁSICO",
    title: "Fundamentos Full-Stack con IA",
    price: "$197 USD",
    dur: "10 clases · 3h c/u · acceso de por vida",
    items: [
      "JavaScript moderno y TypeScript desde cero",
      "React y Next.js App Router",
      "Base de datos con Prisma + Supabase",
      "Tu primera integración con Claude API",
      "Proyecto final: SaaS básico funcionando",
    ],
    popular: false,
  },
  {
    lv: "ONLINE · INTERMEDIO",
    title: "Agentes de IA en Producción",
    price: "$347 USD",
    dur: "12 clases · 3h c/u · acceso de por vida",
    items: [
      "Arquitectura de agentes con Claude API",
      "Tool use, function calling y memoria",
      "Agentes de procesamiento de documentos",
      "Telemetría de costos de tokens",
      "Proyecto final: agente con panel de control",
    ],
    popular: true,
  },
  {
    lv: "ONLINE · AVANZADO",
    title: "SaaS con IA: Arquitectura y Escala",
    price: "$497 USD",
    dur: "12 clases · 3h c/u · acceso de por vida",
    items: [
      "Arquitectura multi-tenant con Prisma",
      "Autenticación completa (email + OAuth)",
      "Billing y suscripciones con Lemon Squeezy",
      "Múltiples agentes coordinados",
      "Proyecto final: SaaS con IA listo para vender",
    ],
    popular: false,
  },
];

const faq = [
  {
    q: "¿Necesito saber programar para el curso básico?",
    a: "Sí, necesitas conocimientos básicos de programación: variables, funciones, lógica. Si sabes algo de Python o HTML/CSS, es suficiente para empezar.",
  },
  {
    q: "¿Las clases son en vivo o grabadas?",
    a: "Son clases en vivo que quedan grabadas. Puedes asistir en vivo para hacer preguntas o ver la grabación cuando quieras. Acceso de por vida.",
  },
  {
    q: "¿En qué idioma son los cursos?",
    a: "En español. Apuntados al mercado latinoamericano, con ejemplos y proyectos relevantes para la región.",
  },
  {
    q: "¿Hay soporte si me trabo?",
    a: "Sí. Todos los cursos incluyen un canal de dudas con el equipo de FabricAI. Respondemos dentro del día hábil.",
  },
  {
    q: "¿Qué necesito para el curso avanzado?",
    a: "Haber completado el intermedio o tener experiencia equivalente: saber construir una app básica con Next.js y haber integrado alguna API.",
  },
];

export default function CursosPage() {
  return (
    <>
      <section className="page-banner">
        <span className="ab x1" />
        <span className="ab x2" />
        <div className="wrap inner">
          <div className="crumbs">
            <Link href="/">Inicio</Link> · Cursos
          </div>
          <h1>Aprende a construir con IA</h1>
          <p>
            Tres niveles para equipos y profesionales, con las herramientas
            líderes: Cursor, Claude Code, OpenClaw, Make, n8n y más.
          </p>
        </div>
      </section>

      {/* NIVELES IN-COMPANY */}
      <section className="white">
        <div className="wrap center">
          <span className="kicker">Formación para tu equipo</span>
          <h2>Tres niveles, de lo esencial a construir agentes</h2>
          <p className="lead">
            Programas in-company por niveles. Cotizamos según el tamaño de tu
            equipo y los casos reales de tu organización.
          </p>
        </div>
        <div className="wrap">
          <div className="niveles">
            {niveles.map((n) => (
              <div className="nivel" key={n.lv}>
                <div className="lv">{n.lv}</div>
                <h3>{n.title}</h3>
                <div className="dur">{n.dur}</div>
                <ul>
                  {n.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <p style={{ marginTop: 16 }}>
                  <Link className="link-arrow" href="/contacto">
                    Consultar
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IN-COMPANY */}
      <section className="alt">
        <div className="wrap center">
          <span className="kicker">In-company</span>
          <h2>Formación con los casos reales de tu organización</h2>
          <p className="lead">
            Programas SENCE-compatibles, certificado Passus, y práctica sobre tus
            propios procesos. Capacitamos por rol: dirección, jefaturas y equipos.
          </p>
          <p style={{ marginTop: 24 }}>
            <Link href="/contacto" className="btn btn-grad">
              Cotizar formación para mi equipo
            </Link>
          </p>
        </div>
      </section>

      {/* CURSOS ONLINE */}
      <section className="white">
        <div className="wrap center">
          <span className="kicker">A tu ritmo</span>
          <h2>Cursos online para desarrolladores</h2>
          <p className="lead">
            Aprende el stack real con el que construimos en producción: Next.js,
            TypeScript, Prisma, Supabase y Claude API. En español, pago único y
            acceso de por vida.
          </p>
        </div>
        <div className="wrap">
          <div className="niveles">
            {online.map((c) => (
              <div className="nivel" key={c.title}>
                <div className="lv">{c.lv}</div>
                <h3>{c.title}</h3>
                <div className="dur">
                  <b style={{ color: "var(--ink)", fontSize: "1.1rem" }}>
                    {c.price}
                  </b>{" "}
                  · {c.dur}
                </div>
                <ul>
                  {c.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <p style={{ marginTop: 16 }}>
                  <Link
                    href="/contacto"
                    className={c.popular ? "btn btn-grad" : "btn btn-light"}
                    style={{ padding: "11px 22px", fontSize: "0.9rem" }}
                  >
                    Me interesa
                  </Link>
                </p>
              </div>
            ))}
          </div>

          {/* Pack */}
          <div className="center" style={{ marginTop: 36 }}>
            <div
              className="linea"
              style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}
            >
              <h3>Pack completo: los 3 cursos</h3>
              <p>
                Básico + Intermedio + Avanzado. De cero a SaaS con IA en
                producción.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sora), sans-serif",
                  fontWeight: 800,
                  fontSize: "2rem",
                  color: "var(--ink)",
                  margin: "10px 0 2px",
                }}
              >
                $897 USD
              </p>
              <p style={{ fontSize: "0.84rem", marginBottom: 16 }}>
                Ahorras $144 USD frente a comprarlos por separado.
              </p>
              <Link href="/contacto" className="btn btn-grad">
                Quiero el pack completo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="alt">
        <div className="wrap center">
          <span className="kicker">Preguntas frecuentes</span>
          <h2>Antes de inscribirte</h2>
        </div>
        <div className="wrap">
          <div className="faq">
            {faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final">
        <div className="wrap">
          <span className="kicker">Conversemos</span>
          <h2>¿Dudas antes de inscribirte?</h2>
          <p className="lead">
            Escríbenos o agenda una llamada. Te ayudamos a elegir el nivel
            correcto para ti o tu equipo.
          </p>
          <div
            className="hero-cta"
            style={{ justifyContent: "center", marginTop: 26 }}
          >
            <Link href="/contacto" className="btn btn-grad">
              Hablar con el equipo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
