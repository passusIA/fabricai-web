import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proceso — Fabric AI",
  description: "Cómo trabajamos: del primer contacto al agente en producción. Sin sorpresas ni letra chica.",
};

const stages = [
  {
    tag: "GRATIS",
    tagColor: "text-green-400 bg-green-500/10 border-green-500/30",
    n: "00",
    title: "Discovery call",
    duration: "30 minutos",
    desc: "Nos contás el problema. Nosotros evaluamos si podemos ayudarte. Sin presentaciones largas. Una conversación directa.",
    details: [
      "¿Qué problema querés resolver con IA?",
      "¿Qué sistemas y datos tenés disponibles?",
      "¿Tenés equipo técnico interno?",
      "¿Cuál es tu presupuesto estimado?",
    ],
    note: "Si no podemos ayudarte, te lo decimos honestamente.",
  },
  {
    tag: "SEMANA 1",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/30",
    n: "01",
    title: "Discovery Sprint",
    duration: "$800–$1.500 USD",
    desc: "Mapeamos tus procesos, identificamos casos de uso de mayor impacto y calculamos el ROI. Al final sabés exactamente qué construir antes de comprometerte.",
    details: [
      "Lunes: sesión 1 — mapeo de procesos (2h)",
      "Miércoles: análisis interno de datos y sistemas",
      "Jueves: sesión 2 — priorización y validación técnica (2h)",
      "Viernes: entrega del documento de diagnóstico",
    ],
    deliverable: "PDF ejecutivo + hoja de ruta técnica + propuesta de proyecto.",
  },
  {
    tag: "DÍAS 1–3",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    n: "02",
    title: "Propuesta técnica",
    duration: "Documento formal",
    desc: "Scope exacto, arquitectura, plan de trabajo, precio fijo y garantías. Firmamos antes de empezar.",
    details: [
      "Qué construimos y qué NO construimos",
      "Arquitectura técnica con diagrama",
      "Plan de trabajo por sprint con entregables",
      "Precio fijo y modelo de pago por hitos",
      "Garantías y condiciones de cambio de scope",
    ],
  },
  {
    tag: "DÍA 1 DEL PROYECTO",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    n: "03",
    title: "Kickoff",
    duration: "Setup completo",
    desc: "Accesos configurados, repositorio privado listo, canal de comunicación activo. Arrancamos.",
    details: [
      "Accesos a sistemas del cliente configurados",
      "Repositorio privado de GitHub creado",
      "Canal de Slack/Discord del proyecto activo",
      "Primera reunión de equipo",
    ],
  },
  {
    tag: "SPRINTS DE 2 SEMANAS",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/30",
    n: "04",
    title: "Construcción",
    duration: "Demos cada 2 semanas",
    desc: "Sprints de 2 semanas con demo en vivo al final de cada uno. Siempre sabés en qué estamos.",
    details: [
      "Día 1: sprint planning — qué construimos estas 2 semanas",
      "Días 2–9: desarrollo con commits diarios al repositorio",
      "Día 10: demo en vivo (30–45 min) — feedback del cliente",
      "Día 11: ajustes según feedback",
      "Día 12: inicio del siguiente sprint",
    ],
  },
  {
    tag: "SEMANA FINAL",
    tagColor: "text-green-400 bg-green-500/10 border-green-500/30",
    n: "05",
    title: "Entrega y deploy",
    duration: "30 días soporte incluido",
    desc: "Deploy en producción, documentación completa, sesión de handoff. El proyecto termina cuando vos confirmás que funciona como esperabas.",
    details: [
      "Deploy en producción con tests de humo",
      "Documentación técnica completa",
      "Guía de operación del agente",
      "Sesión de handoff con el equipo (2h, grabada)",
      "30 días de soporte post-entrega incluido",
    ],
  },
];

const guarantees = [
  { icon: "✓", text: "Precio fijo — lo que cotizamos es lo que pagás" },
  { icon: "✓", text: "Primera demo en 2 semanas o menos" },
  { icon: "✓", text: "30 días de soporte post-entrega incluido" },
  { icon: "✓", text: "El código fuente siempre es tuyo" },
  { icon: "✓", text: "Si el Discovery Sprint no convence, no seguimos" },
];

export default function ProcesoPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">

      {/* Header */}
      <div className="mb-16 text-center">
        <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-violet-400">
          Cómo trabajamos
        </span>
        <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
          Sin sorpresas.
          <br />
          <span className="text-zinc-400">Sin meses de espera.</span>
        </h1>
        <p className="mx-auto max-w-lg text-zinc-400">
          Un proceso claro con entregables definidos en cada etapa
          y comunicación directa de principio a fin.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative space-y-6">
        <div className="absolute left-8 top-0 hidden h-full w-px bg-zinc-800 sm:block" />
        {stages.map((s) => (
          <div key={s.n} className="relative sm:pl-20">
            <div className="absolute left-4 top-6 hidden size-8 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-sm font-bold text-zinc-400 sm:flex">
              {s.n}
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className={`rounded-full border px-3 py-0.5 text-xs font-medium ${s.tagColor}`}>
                  {s.tag}
                </span>
                <span className="text-xs text-zinc-500">{s.duration}</span>
              </div>
              <h2 className="mb-2 text-xl font-bold text-white">{s.title}</h2>
              <p className="mb-4 text-zinc-400">{s.desc}</p>
              <ul className="space-y-1.5">
                {s.details.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-zinc-500">
                    <span className="mt-0.5 text-zinc-600">→</span> {d}
                  </li>
                ))}
              </ul>
              {s.deliverable && (
                <div className="mt-4 rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-3">
                  <p className="text-sm text-cyan-400">
                    <span className="font-semibold">Entregable: </span>{s.deliverable}
                  </p>
                </div>
              )}
              {s.note && (
                <p className="mt-3 text-sm italic text-zinc-500">{s.note}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Comunicación */}
      <div className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
        <h2 className="mb-6 text-xl font-bold text-white">Comunicación directa, sin intermediarios.</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { icon: "💬", title: "Canal exclusivo del proyecto", desc: "Slack/Discord dedicado. Respuesta garantizada en menos de 4 horas hábiles." },
            { icon: "📋", title: "Reporte escrito semanal", desc: "Una página con avances, pendientes y próximos pasos. Sin reuniones innecesarias." },
            { icon: "🎥", title: "Demo cada 2 semanas", desc: "30–45 minutos por Zoom. Ves lo que se construyó. Aprobás o pedís ajustes en tiempo real." },
            { icon: "📊", title: "Dashboard de progreso", desc: "Acceso permanente al estado del proyecto. Sabés exactamente en qué estamos." },
          ].map((item) => (
            <div key={item.title} className="flex gap-3">
              <span className="text-xl">{item.icon}</span>
              <div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Garantías */}
      <div className="mt-10 rounded-2xl border border-green-500/20 bg-green-500/5 p-8">
        <h2 className="mb-6 text-xl font-bold text-white">Lo que garantizamos.</h2>
        <ul className="space-y-3">
          {guarantees.map((g) => (
            <li key={g.text} className="flex items-center gap-3 text-zinc-300">
              <span className="text-green-400 font-bold">{g.icon}</span>
              {g.text}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <h2 className="mb-4 text-2xl font-bold text-white">¿Empezamos con una llamada?</h2>
        <p className="mb-6 text-zinc-400">30 minutos. Sin costo. Sin compromiso.</p>
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
