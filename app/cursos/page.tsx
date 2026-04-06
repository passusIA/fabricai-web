import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cursos — Fabric AI",
  description: "Aprende a construir SaaS y agentes de IA con el stack real: Next.js, TypeScript, Prisma, Supabase y Claude API. 3 niveles, en español, LATAM-first.",
};

const courses = [
  {
    level: "Básico",
    levelColor: "text-green-400 bg-green-500/10 border-green-500/30",
    title: "Fundamentos Full-Stack con IA",
    subtitle: "De cero a tu primer SaaS funcional",
    duration: "10 clases · 3h c/u",
    price: "$197 USD",
    priceNote: "Pago único · Acceso de por vida",
    target: "Para developers con Python básico o HTML/CSS que quieren aprender el stack moderno.",
    highlights: [
      "JavaScript moderno y TypeScript desde cero",
      "React y Next.js App Router",
      "Base de datos con Prisma + Supabase",
      "Tu primera integración con Claude API",
      "Deploy en Vercel",
      "Proyecto final: SaaS básico funcionando",
    ],
    accent: "green",
  },
  {
    level: "Intermedio",
    levelColor: "text-violet-400 bg-violet-500/10 border-violet-500/30",
    title: "Agentes de IA en Producción",
    subtitle: "Construye agentes reales con herramientas y memoria",
    duration: "12 clases · 3h c/u",
    price: "$347 USD",
    priceNote: "Pago único · Acceso de por vida",
    target: "Para developers que ya conocen React/Next.js básico y quieren construir con IA.",
    highlights: [
      "Arquitectura de agentes con Claude API",
      "Tool use, function calling y memoria",
      "Agentes de procesamiento de documentos",
      "Agentes de búsqueda semántica",
      "Telemetría de costos de tokens",
      "Proyecto final: agente completo con panel de control",
    ],
    accent: "violet",
    featured: true,
  },
  {
    level: "Avanzado",
    levelColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    title: "SaaS con IA: Arquitectura y Escala",
    subtitle: "Multi-tenant, billing, y IA en producción real",
    duration: "12 clases · 3h c/u",
    price: "$497 USD",
    priceNote: "Pago único · Acceso de por vida",
    target: "Para developers intermedios que quieren construir y lanzar un producto SaaS completo.",
    highlights: [
      "Arquitectura multi-tenant con Prisma",
      "Autenticación completa (email + OAuth)",
      "Billing y suscripciones con Lemon Squeezy",
      "Múltiples agentes coordinados",
      "Server Actions y optimización de rendimiento",
      "Proyecto final: SaaS con IA listo para vender",
    ],
    accent: "cyan",
  },
];

const included = [
  { icon: "🎥", text: "Clases en vivo grabadas" },
  { icon: "💻", text: "Código fuente de cada clase" },
  { icon: "📋", text: "Ejercicios prácticos resueltos" },
  { icon: "🤖", text: "Proyectos con agentes reales" },
  { icon: "💬", text: "Canal de dudas con el equipo" },
  { icon: "🔄", text: "Acceso de por vida + actualizaciones" },
];

export default function CursosPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">

      {/* Header */}
      <div className="mb-16 text-center">
        <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-violet-400">
          Cursos
        </span>
        <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
          Aprendé el stack real.
          <br />
          <span className="text-zinc-400">El que usamos en producción.</span>
        </h1>
        <p className="mx-auto max-w-xl text-zinc-400">
          Next.js · TypeScript · Prisma · Supabase · Claude API.
          En español, apuntando a LATAM, con proyectos que podés mostrar.
        </p>
      </div>

      {/* What's included */}
      <div className="mb-14 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">Todos los cursos incluyen</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {included.map((i) => (
            <div key={i.text} className="flex items-center gap-2 text-sm text-zinc-400">
              <span>{i.icon}</span>
              <span>{i.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Courses */}
      <div className="space-y-8">
        {courses.map((c) => (
          <div
            key={c.level}
            className={`rounded-2xl border p-8 ${
              c.featured
                ? "border-violet-500 bg-violet-500/5"
                : "border-zinc-800 bg-zinc-900/50"
            }`}
          >
            {c.featured && (
              <span className="mb-4 inline-block rounded-full bg-violet-500/20 px-3 py-0.5 text-xs font-medium text-violet-400">
                Más popular
              </span>
            )}
            <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className={`mb-2 inline-block rounded-full border px-3 py-0.5 text-xs font-medium ${c.levelColor}`}>
                  {c.level}
                </span>
                <h2 className="text-xl font-bold text-white">{c.title}</h2>
                <p className="text-sm text-zinc-500">{c.subtitle}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-white">{c.price}</p>
                <p className="text-xs text-zinc-500">{c.priceNote}</p>
                <p className="mt-1 text-xs text-zinc-500">{c.duration}</p>
              </div>
            </div>

            <p className="mb-4 text-sm text-zinc-400">{c.target}</p>

            <ul className="mb-6 grid gap-2 sm:grid-cols-2">
              {c.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-zinc-400">
                  <span className="mt-0.5 text-green-500">✓</span>
                  {h}
                </li>
              ))}
            </ul>

            <Link
              href="/contacto"
              className={`inline-block rounded-lg px-6 py-2.5 text-sm font-semibold transition-colors ${
                c.featured
                  ? "bg-violet-600 text-white hover:bg-violet-500"
                  : "border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white"
              }`}
            >
              Me interesa →
            </Link>
          </div>
        ))}
      </div>

      {/* Bundle */}
      <div className="mt-12 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-8 text-center">
        <h2 className="mb-2 text-xl font-bold text-white">Pack completo: los 3 cursos</h2>
        <p className="mb-4 text-zinc-400 text-sm">
          Básico + Intermedio + Avanzado. De cero a SaaS con IA en producción.
        </p>
        <p className="mb-2 text-3xl font-bold text-white">$897 USD</p>
        <p className="mb-6 text-xs text-zinc-500">Ahorrás $144 USD vs comprar por separado</p>
        <Link
          href="/contacto"
          className="inline-block rounded-lg bg-amber-500 px-8 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-amber-400"
        >
          Quiero el pack completo →
        </Link>
      </div>

      {/* FAQ */}
      <div className="mt-14">
        <h2 className="mb-6 text-xl font-bold text-white">Preguntas frecuentes</h2>
        <div className="space-y-4">
          {[
            {
              q: "¿Necesito saber programar para el curso básico?",
              a: "Sí, necesitás conocimientos básicos de programación: variables, funciones, lógica. Si sabés algo de Python o HTML/CSS, es suficiente para empezar.",
            },
            {
              q: "¿Las clases son en vivo o grabadas?",
              a: "Son clases en vivo que quedan grabadas. Podés asistir en vivo para hacer preguntas o ver la grabación cuando quieras. Acceso de por vida.",
            },
            {
              q: "¿En qué idioma son los cursos?",
              a: "En español. Apuntados al mercado latinoamericano, con ejemplos y proyectos relevantes para la región.",
            },
            {
              q: "¿Hay soporte si me trabo?",
              a: "Sí. Todos los cursos incluyen canal de dudas con el equipo de Fabric AI. Respondemos dentro del día hábil.",
            },
            {
              q: "¿Qué necesito para el curso avanzado?",
              a: "Haber completado el intermedio o tener experiencia equivalente: saber construir una app básica con Next.js y haber integrado alguna API.",
            },
          ].map((item) => (
            <div key={item.q} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
              <h3 className="mb-2 font-semibold text-white text-sm">{item.q}</h3>
              <p className="text-sm text-zinc-400">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <h2 className="mb-4 text-2xl font-bold text-white">¿Dudas antes de inscribirte?</h2>
        <p className="mb-6 text-zinc-400 text-sm">
          Escribinos o agendá una llamada. Te ayudamos a elegir el nivel correcto.
        </p>
        <Link
          href="/contacto"
          className="inline-block rounded-lg bg-violet-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-500"
        >
          Hablar con el equipo →
        </Link>
      </div>
    </div>
  );
}
