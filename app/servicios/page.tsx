import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios — Fabric AI",
  description: "Agentes de IA a medida, integraciones, SaaS desde cero y más. Precio fijo y resultados medibles.",
};

const services = [
  {
    badge: "Primer paso recomendado",
    badgeColor: "text-green-400 border-green-500/30 bg-green-500/10",
    icon: "🔍",
    title: "Discovery Sprint",
    price: "$800–$1.500 USD",
    duration: "1 semana · Precio fijo",
    desc: "Antes de construir cualquier agente, necesitamos entender tu negocio, tus datos y tus procesos. El Discovery Sprint te da claridad total sobre qué construir y qué ROI esperar.",
    includes: [
      "2 sesiones de trabajo con tu equipo (2h cada una)",
      "Mapa de procesos actuales vs automatizables",
      "Identificación de los 3 casos de uso de mayor impacto",
      "Estimación de ROI por cada caso de uso",
      "Hoja de ruta técnica recomendada",
      "Propuesta de proyecto si querés continuar",
    ],
    note: "Si después avanzamos con un proyecto, el costo del Sprint se descuenta del total.",
  },
  {
    icon: "🤖",
    title: "Agente de IA a medida",
    price: "$3.500–$12.000 USD",
    duration: "3–6 semanas · Precio fijo",
    desc: "Un agente diseñado específicamente para tu proceso. No una solución genérica — un sistema que conoce tu negocio, tus datos y tus reglas.",
    agentTypes: [
      { icon: "🗂", name: "Agente de procesamiento", desc: "Lee documentos y extrae información estructurada. Ej: facturas, contratos, CVs." },
      { icon: "💬", name: "Agente de atención", desc: "Responde consultas con contexto real de tu empresa. No un chatbot con guión fijo." },
      { icon: "📊", name: "Agente de análisis", desc: 'Analiza datos y genera reportes. "¿Por qué bajaron las ventas esta semana?"' },
      { icon: "⚙️", name: "Agente de automatización", desc: "Ejecuta flujos completos sin intervención humana. Onboarding, documentos, notificaciones." },
      { icon: "👁", name: "Agente supervisor", desc: "Monitorea procesos y alerta cuando algo sale mal. Detecta anomalías antes de que sean problemas." },
    ],
    includes: [
      "Discovery técnico (2–3 sesiones)",
      "Diseño de arquitectura del agente",
      "Desarrollo e integración con tus sistemas",
      "Panel de administración del agente",
      "Telemetría: logs, tokens, costos en tiempo real",
      "Deploy en producción",
      "Documentación técnica completa",
      "30 días de soporte post-deploy",
    ],
  },
  {
    icon: "🔌",
    title: "Integración de IA en producto existente",
    price: "$2.500–$8.000 USD",
    duration: "2–5 semanas · Precio fijo",
    desc: "Ya tenés un producto funcionando. Querés agregarle IA sin reescribir todo desde cero.",
    useCases: [
      "Chatbot con contexto propio de tu producto",
      "Resúmenes y reportes automáticos con IA",
      "Clasificación automática de contenido",
      "Recomendaciones personalizadas",
      "Búsqueda semántica",
      "Generación de contenido dentro del producto",
    ],
    includes: [
      "Auditoría del sistema existente",
      "Diseño de integración sin romper lo que funciona",
      "Desarrollo e integración",
      "Tests en staging antes de producción",
      "Deploy con rollback preparado",
      "Monitoreo de costos de IA integrado",
      "30 días de soporte post-deploy",
    ],
  },
  {
    icon: "🚀",
    title: "SaaS con IA desde cero",
    price: "$15.000–$50.000 USD",
    duration: "8–16 semanas · 4 hitos de pago",
    desc: "Querés lanzar un producto SaaS con IA integrada desde el día uno. Te entregamos el producto completo, listo para usuarios reales y pagos.",
    includes: [
      "Arquitectura multi-tenant completa",
      "Autenticación (email + Google)",
      "Sistema de planes y billing (Stripe / Lemon Squeezy)",
      "Módulo de IA según el producto",
      "Dashboard de admin y usuario",
      "Email transaccional",
      "Deploy en producción con CI/CD",
      "Panel de métricas y costos de IA",
      "Documentación técnica completa",
      "Handoff con capacitación a tu equipo",
    ],
    stack: "Next.js 15 · TypeScript · Prisma · Supabase · Claude API · Lemon Squeezy · Resend · Vercel",
    payment: "25% inicio · 25% mid · 25% beta · 25% producción",
  },
  {
    badge: "Servicio enterprise",
    badgeColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    icon: "🏭",
    title: "Fábrica de Agentes",
    price: "$35.000–$80.000 USD",
    duration: "12–20 semanas · 4 hitos con entregables",
    desc: "Para empresas que no quieren un agente sino una capacidad organizacional de IA: infraestructura para crear, gestionar y escalar múltiples agentes de forma sistemática.",
    factory: [
      { title: "1. Plataforma de Agentes", desc: "Panel central para crear, monitorear y gestionar todos los agentes. Biblioteca de herramientas reutilizables. Versionado de prompts. Dashboard de costos." },
      { title: "2. Primeros 3 Agentes en Producción", desc: "Diseñados con vos según tus procesos más críticos. Funcionando antes de cerrar el proyecto." },
      { title: "3. Framework Interno", desc: "Código base estructurado para que tu equipo técnico construya nuevos agentes sin empezar de cero." },
      { title: "4. Capacitación del Equipo", desc: "4 sesiones de formación para tu equipo técnico con documentación y guías de desarrollo." },
      { title: "5. Retainer 3 meses incluido", desc: "Soporte continuo, revisión de nuevos agentes y optimización de costos y prompts." },
    ],
  },
];

const retainerPlans = [
  {
    name: "Starter",
    price: "$2.000",
    period: "USD/mes",
    min: "Mín. 3 meses",
    hours: "20 horas/mes",
    features: ["Reunión semanal 30 min", "Respuesta < 4h hábiles", "Reporte mensual"],
    ideal: "Mantenimiento y mejoras continuas de un agente ya en producción.",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$3.800",
    period: "USD/mes",
    min: "Mín. 3 meses",
    hours: "40 horas/mes",
    features: ["Reunión semanal 30 min", "Respuesta < 2h hábiles", "Reporte mensual", "Acceso directo al Tech Lead"],
    ideal: "Desarrollo activo de nuevas features y agentes.",
    highlight: true,
  },
  {
    name: "Scale",
    price: "$6.500",
    period: "USD/mes",
    min: "Mín. 3 meses",
    hours: "80 horas/mes",
    features: ["Reunión semanal 1h", "Respuesta < 1h hábiles", "Reporte mensual + semanal", "Acceso directo al Tech Lead", "Prioridad máxima"],
    ideal: "Equipo de IA externo completo para empresas en escala.",
    highlight: false,
  },
];

export default function ServiciosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">

      {/* Header */}
      <div className="mb-16 text-center">
        <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-violet-400">
          Servicios
        </span>
        <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">Todo lo que construimos.</h1>
        <p className="mx-auto max-w-xl text-zinc-400">
          Desde un agente puntual hasta la infraestructura de IA de toda tu empresa.
          Con precio fijo y resultados medibles.
        </p>
      </div>

      {/* Services */}
      <div className="space-y-12">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
            {s.badge && (
              <span className={`mb-4 inline-block rounded-full border px-3 py-1 text-xs font-medium ${s.badgeColor}`}>
                {s.badge}
              </span>
            )}
            <div className="mb-2 flex flex-wrap items-start gap-3">
              <span className="text-2xl">{s.icon}</span>
              <div>
                <h2 className="text-xl font-bold text-white">{s.title}</h2>
                <p className="text-sm text-violet-400">
                  {s.price} · {s.duration}
                </p>
              </div>
            </div>
            <p className="mb-6 text-zinc-400">{s.desc}</p>

            {s.agentTypes && (
              <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {s.agentTypes.map((a) => (
                  <div key={a.name} className="rounded-lg border border-zinc-800 p-4">
                    <p className="mb-1 text-sm font-semibold text-white">{a.icon} {a.name}</p>
                    <p className="text-xs text-zinc-500">{a.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {s.useCases && (
              <div className="mb-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">Casos típicos</p>
                <ul className="grid gap-1.5 sm:grid-cols-2">
                  {s.useCases.map((u) => (
                    <li key={u} className="flex items-start gap-2 text-sm text-zinc-400">
                      <span className="mt-0.5 text-cyan-500">→</span> {u}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {s.factory && (
              <div className="mb-6 space-y-3">
                {s.factory.map((f) => (
                  <div key={f.title} className="rounded-lg border border-zinc-800 p-4">
                    <p className="mb-1 font-semibold text-white">{f.title}</p>
                    <p className="text-sm text-zinc-400">{f.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {s.includes && (
              <div className="mb-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">Qué incluye</p>
                <ul className="grid gap-1.5 sm:grid-cols-2">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-400">
                      <span className="mt-0.5 text-green-500">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {s.stack && (
              <p className="mb-2 text-xs text-zinc-500">
                <span className="font-medium text-zinc-400">Stack: </span>{s.stack}
              </p>
            )}
            {s.payment && (
              <p className="mb-4 text-xs text-zinc-500">
                <span className="font-medium text-zinc-400">Pago: </span>{s.payment}
              </p>
            )}
            {s.note && (
              <p className="mt-4 text-sm text-zinc-500 italic">{s.note}</p>
            )}

            <div className="mt-6">
              <Link
                href="/contacto"
                className="inline-block rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-violet-500"
              >
                Cotizar →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Retainer */}
      <div className="mt-20">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl">Retainer mensual</h2>
          <p className="text-zinc-400">Tu equipo de IA externo disponible de forma continua.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {retainerPlans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-6 ${p.highlight ? "border-violet-500 bg-violet-500/5" : "border-zinc-800 bg-zinc-900/50"}`}
            >
              {p.highlight && (
                <span className="mb-3 inline-block rounded-full bg-violet-500/20 px-3 py-0.5 text-xs font-medium text-violet-400">
                  Más popular
                </span>
              )}
              <h3 className="mb-1 text-lg font-bold text-white">{p.name}</h3>
              <p className="mb-1 text-2xl font-bold text-white">
                {p.price} <span className="text-sm font-normal text-zinc-400">{p.period}</span>
              </p>
              <p className="mb-1 text-xs text-zinc-500">{p.min}</p>
              <p className="mb-4 text-sm font-medium text-violet-400">{p.hours}</p>
              <ul className="mb-4 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-zinc-400">
                    <span className="mt-0.5 text-green-500">✓</span> {f}
                  </li>
                ))}
              </ul>
              <p className="mb-5 text-xs text-zinc-500">{p.ideal}</p>
              <Link
                href="/contacto"
                className={`block rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-colors ${
                  p.highlight
                    ? "bg-violet-600 text-white hover:bg-violet-500"
                    : "border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white"
                }`}
              >
                Contratar {p.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
