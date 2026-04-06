import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nosotros — Fabric AI",
  description: "Somos el equipo de Passus. Construimos agentes de IA en producción propia antes de ofrecerlo a clientes.",
};

const values = [
  {
    icon: "🔬",
    title: "Primero lo probamos nosotros",
    desc: "Passus corre con el mismo stack que usamos para tus proyectos. No te vendemos experimentos — te vendemos lo que ya funciona.",
  },
  {
    icon: "📐",
    title: "Scope exacto, precio fijo",
    desc: "Nada de 'depende'. Antes de empezar sabés exactamente qué se construye, cuánto cuesta y cuándo termina.",
  },
  {
    icon: "🤝",
    title: "Equipo pequeño y estable",
    desc: "Siempre las mismas personas. Sin rotación, sin juniors escondidos, sin intermediarios. Sabés con quién estás trabajando.",
  },
  {
    icon: "🚀",
    title: "Velocidad sin cortar caminos",
    desc: "Primera demo en 2 semanas. Pero bien hecha: con tests, documentación y código que tu equipo puede mantener.",
  },
];

const stackItems = [
  { name: "Next.js 15", desc: "App Router, Server Actions, RSC" },
  { name: "TypeScript", desc: "Strict mode, zero any" },
  { name: "Prisma + Supabase", desc: "ORM tipado con PostgreSQL gestionado" },
  { name: "Claude API", desc: "Anthropic — modelo principal para agentes" },
  { name: "Vercel", desc: "Deploy y edge computing" },
  { name: "Lemon Squeezy", desc: "Billing y suscripciones" },
  { name: "Resend", desc: "Email transaccional" },
  { name: "Tailwind CSS", desc: "UI consistente y mantenible" },
];

const metrics = [
  { value: "1", label: "SaaS propio en producción" },
  { value: "3 sem", label: "de idea a primer agente" },
  { value: "100%", label: "código que te entregamos" },
  { value: "0", label: "costo fijo de infra al inicio" },
];

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">

      {/* Header */}
      <div className="mb-16 text-center">
        <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-violet-400">
          Nosotros
        </span>
        <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
          Construimos IA real.
          <br />
          <span className="text-zinc-400">La nuestra primero.</span>
        </h1>
        <p className="mx-auto max-w-xl text-zinc-400">
          Somos el equipo detrás de Passus — un SaaS de simuladores de certificación
          con agentes de IA en producción. Eso es lo que nos hace distintos.
        </p>
      </div>

      {/* Passus Story */}
      <div className="mb-16 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-8">
        <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-violet-400">
          El origen
        </div>
        <h2 className="mb-4 text-2xl font-bold text-white">
          Passus nació de un problema real.
        </h2>
        <div className="space-y-4 text-zinc-400">
          <p>
            Queríamos entender hasta dónde podía llegar la IA en un producto real — no en demos,
            no en tutoriales, sino en producción con usuarios reales, datos reales y costos reales.
          </p>
          <p>
            Así construimos Passus: un simulador de exámenes de certificación con agentes de IA
            que generan preguntas, diagnostican gaps de conocimiento y personalizan el estudio
            de cada usuario. Con telemetría de costos de tokens, sistema de billing, multi-tenant
            y deploy en Vercel.
          </p>
          <p>
            En el proceso desarrollamos un stack, una metodología y un conjunto de decisiones
            técnicas que hoy ofrecemos a otros. No como teoría — como práctica comprobada.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 border-t border-violet-500/20 pt-8 sm:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-2xl font-bold text-white">{m.value}</p>
              <p className="text-xs text-zinc-500">{m.label}</p>
            </div>
          ))}
        </div>
        <a
          href="https://passus.cl"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
        >
          Ver Passus → passus.cl
        </a>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2 className="mb-8 text-2xl font-bold text-white">Cómo trabajamos.</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
              <div className="mb-3 text-2xl">{v.icon}</div>
              <h3 className="mb-2 font-semibold text-white">{v.title}</h3>
              <p className="text-sm text-zinc-400">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stack */}
      <div className="mb-16 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
        <h2 className="mb-2 text-xl font-bold text-white">El stack que usamos.</h2>
        <p className="mb-6 text-zinc-500 text-sm">
          No tenemos stack favorito por moda. Lo elegimos porque lo probamos en producción propia.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {stackItems.map((item) => (
            <div key={item.name} className="flex items-start gap-3 rounded-lg border border-zinc-800 p-3">
              <span className="mt-0.5 text-violet-400">▸</span>
              <div>
                <p className="font-medium text-white text-sm">{item.name}</p>
                <p className="text-xs text-zinc-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Capacitación */}
      <div className="mb-16 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8">
        <h2 className="mb-4 text-xl font-bold text-white">También enseñamos.</h2>
        <p className="mb-4 text-zinc-400">
          Ofrecemos cursos intensivos sobre este stack para desarrolladores que quieren
          aprender a construir SaaS y agentes de IA desde cero. Básico, intermedio y avanzado.
          LATAM-first, en español, con proyectos reales.
        </p>
        <Link
          href="/cursos"
          className="inline-block rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-5 py-2.5 text-sm font-semibold text-cyan-400 transition-colors hover:bg-cyan-500/20"
        >
          Ver cursos →
        </Link>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="mb-4 text-2xl font-bold text-white">¿Trabajamos juntos?</h2>
        <p className="mb-6 text-zinc-400">
          Contanos tu proyecto. 30 minutos de llamada, sin costo, sin compromiso.
        </p>
        <Link
          href="/contacto"
          className="inline-block rounded-lg bg-violet-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-500"
        >
          Agendar llamada gratuita →
        </Link>
      </div>
    </div>
  );
}
