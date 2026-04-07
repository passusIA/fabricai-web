"use client";

import { useState } from "react";

export default function ContactoPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    empresa: "",
    servicio: "",
    mensaje: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/meepnqby", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("ok");
        setForm({ nombre: "", email: "", empresa: "", servicio: "", mensaje: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const options = [
    "Discovery Sprint ($800–$1.500 USD)",
    "Agente de IA a medida",
    "Integración de IA en producto existente",
    "SaaS con IA desde cero",
    "Fábrica de Agentes (enterprise)",
    "Retainer mensual",
    "Cursos y capacitación",
    "Consulta general",
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">

      {/* Header */}
      <div className="mb-12 text-center">
        <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-violet-400">
          Contacto
        </span>
        <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
          Hablemos.
        </h1>
        <p className="mx-auto max-w-md text-zinc-400">
          Contanos qué querés construir. Te respondemos en menos de 24 horas hábiles.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-5">

        {/* Form */}
        <div className="lg:col-span-3">
          {status === "ok" ? (
            <div className="rounded-2xl border border-green-500/30 bg-green-500/5 p-10 text-center">
              <div className="mb-4 text-4xl">✓</div>
              <h2 className="mb-2 text-xl font-bold text-white">¡Mensaje enviado!</h2>
              <p className="text-zinc-400">
                Te respondemos antes de las próximas 24 horas hábiles.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                    Nombre *
                  </label>
                  <input
                    required
                    type="text"
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    placeholder="Tu nombre"
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-violet-500"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="tu@empresa.com"
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-violet-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                  Empresa (opcional)
                </label>
                <input
                  type="text"
                  value={form.empresa}
                  onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                  placeholder="Nombre de tu empresa"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                  ¿Qué necesitás?
                </label>
                <select
                  value={form.servicio}
                  onChange={(e) => setForm({ ...form, servicio: e.target.value })}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-violet-500"
                >
                  <option value="">Seleccionar servicio...</option>
                  {options.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                  Contanos tu proyecto *
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  placeholder="¿Qué proceso querés automatizar? ¿Qué sistemas tenés? ¿Cuál es tu presupuesto estimado?"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-violet-500"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-400">
                  Hubo un error al enviar. Escribinos directo a{" "}
                  <a href="mailto:hola@fabricai.cl" className="underline">hola@fabricai.cl</a>
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-lg bg-violet-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-500 disabled:opacity-60"
              >
                {status === "sending" ? "Enviando..." : "Enviar mensaje →"}
              </button>
            </form>
          )}
        </div>

        {/* Side info */}
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
            <h3 className="mb-4 font-semibold text-white">Contacto directo</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-xs text-zinc-500 mb-1">Email</p>
                <a
                  href="mailto:hola@fabricai.cl"
                  className="text-zinc-300 transition-colors hover:text-white"
                >
                  hola@fabricai.cl
                </a>
              </div>
              <div>
                <p className="text-xs text-zinc-500 mb-1">Web</p>
                <a
                  href="https://passus.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 transition-colors hover:text-white"
                >
                  passus.cl
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
            <h3 className="mb-3 font-semibold text-white">¿Cómo es la llamada?</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li className="flex gap-2"><span className="text-violet-400">→</span> 30 minutos por Zoom o Meet</li>
              <li className="flex gap-2"><span className="text-violet-400">→</span> Sin presentaciones largas</li>
              <li className="flex gap-2"><span className="text-violet-400">→</span> Te decimos honestamente si podemos ayudarte</li>
              <li className="flex gap-2"><span className="text-violet-400">→</span> Sin costo, sin compromiso</li>
            </ul>
          </div>

          <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-6">
            <p className="text-sm text-green-400 font-medium mb-1">Tiempo de respuesta</p>
            <p className="text-sm text-zinc-400">
              Respondemos todos los mensajes en menos de 24 horas hábiles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
