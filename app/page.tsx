import Link from "next/link";

const services = [
  {
    icon: "🔍",
    title: "Discovery Sprint",
    desc: "1 semana para mapear tus procesos, identificar los 3 casos de uso de mayor impacto y entregarte la hoja de ruta técnica.",
    badge: "Desde $800 USD · 1 semana",
  },
  {
    icon: "🤖",
    title: "Agente de IA a medida",
    desc: "Un agente diseñado para tu proceso específico. Lee datos, toma decisiones, ejecuta acciones y reporta resultados.",
    badge: "Desde $3.500 USD · 3–6 semanas",
  },
  {
    icon: "🔌",
    title: "Integración de IA",
    desc: "Agregamos IA a tu producto o sistema actual. Sin reescribir todo, sin romper lo que ya funciona.",
    badge: "Desde $2.500 USD · 2–5 semanas",
  },
  {
    icon: "🚀",
    title: "SaaS con IA desde cero",
    desc: "Tu producto completo con IA integrada, multi-usuario, pagos y deploy en producción. Listo para vender.",
    badge: "Desde $15.000 USD · 8–16 semanas",
  },
  {
    icon: "🏭",
    title: "Fábrica de Agentes",
    desc: "Infraestructura completa para empresas que quieren escalar con IA: plataforma, primeros 3 agentes y framework interno.",
    badge: "Desde $35.000 USD",
  },
  {
    icon: "📅",
    title: "Retainer mensual",
    desc: "Tu equipo de IA externo disponible de forma continua. Horas dedicadas, reunión semanal y reporte mensual.",
    badge: "Desde $2.000 USD/mes",
  },
];

const steps = [
  { n: "01", title: "Discovery call gratuita", desc: "30 minutos para entender tu problema. Te decimos honestamente si podemos ayudarte." },
  { n: "02", title: "Discovery Sprint", desc: "1 semana de diagnóstico. Casos de uso priorizados, ROI estimado y hoja de ruta técnica." },
  { n: "03", title: "Construcción", desc: "Sprints de 2 semanas con demos frecuentes. Ves el avance real en todo momento." },
  { n: "04", title: "Producción y soporte", desc: "Deploy, documentación, capacitación y 30 días de soporte incluidos." },
];

const industries = ["RRHH y Recruiting", "Legal y Contratos", "EdTech", "Finanzas", "Atención al cliente", "Salud"];

const stack = ["Next.js", "TypeScript", "Prisma", "Supabase", "Claude API", "Vercel"];

export default function HomePage() {
  return (
    <div className="flex flex-col">

      {/* HERO */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#7c3aed22_0%,_transparent_70%)]" />
        <span className="mb-6 inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-400">
          by Passus · Desarrollo de Agentes de IA
        </span>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
          Construimos los agentes{" "}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            que trabajan por tu empresa.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
          Automatizamos procesos reales con inteligencia artificial.
          Primer agente en producción en 3 semanas.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contacto"
            className="rounded-lg bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-500"
          >
            Agendar llamada gratuita →
          </Link>
          <Link
            href="/servicios"
            className="rounded-lg border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
          >
            Ver servicios
          </Link>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="border-y border-zinc-800 bg-zinc-900/40 px-4 py-8">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-zinc-500">
          El mismo stack con el que corremos nuestro propio SaaS en producción
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {stack.map((s) => (
            <span key={s} className="text-sm font-medium text-zinc-400">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-violet-400">
          El problema
        </div>
        <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
          Tu empresa sabe que necesita IA.
          <br />
          <span className="text-zinc-400">Pero no sabe por dónde empezar.</span>
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: "⏳", title: "Las consultoras grandes tardan meses", desc: "Proyectos de 6 cifras que arrancan en 6 meses. Para cuando entregan, el mundo ya cambió." },
            { icon: "🎲", title: "Los freelancers son impredecibles", desc: "Sin continuidad, sin arquitectura, sin responsabilidad sobre lo que construyen." },
            { icon: "🏗️", title: "Contratar equipo de IA es casi imposible", desc: "El talento en IA es escaso, caro y tarda meses en integrarse a tu contexto." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
              <div className="mb-3 text-2xl">{item.icon}</div>
              <h3 className="mb-2 font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className="bg-zinc-900/30 px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-violet-400">
            La solución
          </div>
          <h2 className="mb-4 text-center text-3xl font-bold text-white sm:text-4xl">
            Un equipo pequeño, estable
            <br />y especializado en IA real.
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-zinc-400">
            No consultores genéricos. No experimentos.
            Agentes que funcionan en producción desde el primer sprint.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "⚡", title: "Primer resultado en 2 semanas", desc: "No esperás meses para ver algo funcionando." },
              { icon: "🔒", title: "Equipo estable", desc: "Siempre las mismas personas. Sin rotación ni intermediarios." },
              { icon: "🧪", title: "Stack probado en producción propia", desc: "Lo que construimos para vos ya corrió en nuestro SaaS." },
              { icon: "📊", title: "Precio fijo, sin sorpresas", desc: "Scope definido, hitos claros, cero letra chica." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
                <div className="mb-3 text-xl">{item.icon}</div>
                <h3 className="mb-1.5 font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-violet-400">
          Servicios
        </div>
        <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
          ¿Qué construimos?
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-600">
              <div className="mb-3 text-2xl">{s.icon}</div>
              <h3 className="mb-2 font-semibold text-white">{s.title}</h3>
              <p className="mb-4 flex-1 text-sm text-zinc-400">{s.desc}</p>
              <span className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
                {s.badge}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
          >
            Ver todos los servicios →
          </Link>
        </div>
      </section>

      {/* PROCESO */}
      <section className="bg-zinc-900/30 px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-violet-400">
            Proceso
          </div>
          <h2 className="mb-14 text-center text-3xl font-bold text-white sm:text-4xl">
            De la idea al agente en producción en 4 pasos.
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="relative rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
                <span className="mb-4 block text-4xl font-bold text-zinc-700">{s.n}</span>
                <h3 className="mb-2 font-semibold text-white">{s.title}</h3>
                <p className="text-sm text-zinc-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIAS */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-violet-400">
          Industrias
        </div>
        <h2 className="mb-4 text-center text-3xl font-bold text-white sm:text-4xl">
          Trabajamos con cualquier industria.
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-center text-zinc-400">
          Donde hay procesos repetitivos y datos, hay oportunidad de IA.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {industries.map((i) => (
            <span key={i} className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-300">
              {i}
            </span>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-zinc-500">
          ¿No ves tu industria? Igual hablemos.
        </p>
      </section>

      {/* CREDIBILIDAD — PASSUS */}
      <section className="bg-zinc-900/40 px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-2xl border border-violet-500/20 bg-violet-500/5 p-8 sm:p-12">
          <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-violet-400">
            Por qué nosotros
          </div>
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
            Corremos nuestro propio SaaS con IA en producción.
            <br />
            <span className="text-zinc-400">Eso nos hace distintos.</span>
          </h2>
          <p className="mb-8 text-zinc-400">
            Passus es un simulador de exámenes de certificación con agentes de IA, telemetría de
            costos, diagnósticos automáticos y sistema de billing. Lo construimos y lo operamos
            nosotros. Lo que construimos para vos no es un experimento — es el mismo stack que
            nosotros mismos usamos todos los días.
          </p>
          <div className="mb-8 grid grid-cols-3 gap-6 border-t border-zinc-800 pt-8">
            {[
              { value: "3 semanas", label: "primer agente" },
              { value: "+15 tablas", label: "en producción en Passus" },
              { value: "$0", label: "costo fijo de infra al inicio" },
            ].map((m) => (
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
            className="text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
          >
            Ver Passus → passus.cl
          </a>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            ¿Listo para automatizar
            <br />tu primer proceso con IA?
          </h2>
          <p className="mb-8 text-zinc-400">
            Empezamos con una llamada de 30 minutos, sin costo.
            Te decimos honestamente si podemos ayudarte.
          </p>
          <Link
            href="/contacto"
            className="inline-block rounded-lg bg-violet-600 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-violet-500"
          >
            Agendar llamada gratuita →
          </Link>
          <p className="mt-4 text-sm text-zinc-500">
            O escribinos a{" "}
            <a href="mailto:hola@fabricai.cl" className="text-zinc-400 hover:text-white transition-colors">
              hola@fabricai.cl
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
