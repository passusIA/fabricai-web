"use client";

import { useState } from "react";

const lineas = [
  "MicroApps Express (simulación rápida)",
  "MicroApp a medida",
  "Agente IA / automatización",
  "Cumplimiento Ley 21.719",
  "Formación para mi equipo",
  "Aún no sé, quiero orientación",
];

export default function ContactoPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    linea: lineas[0],
    proceso: "",
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
        setForm({
          nombre: "",
          empresa: "",
          email: "",
          telefono: "",
          linea: lineas[0],
          proceso: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="page-banner">
        <span className="ab x1" />
        <span className="ab x2" />
        <div className="wrap inner">
          <div className="crumbs">
            <a href="/">Inicio</a> · Contacto
          </div>
          <h1>Cuéntanos un proceso. Te mostramos su app.</h1>
          <p>
            Describe una tarea que hoy haces a mano y te fabricamos una simulación
            visual. Sin compromiso — si no tiene sentido, te lo decimos.
          </p>
        </div>
      </section>

      <section className="white">
        <div className="wrap">
          <div className="form-wrap light">
            {status === "ok" ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div
                  style={{
                    fontSize: "2.4rem",
                    color: "var(--primary)",
                    marginBottom: 8,
                  }}
                >
                  ✓
                </div>
                <h3 style={{ marginBottom: 6 }}>¡Solicitud enviada!</h3>
                <p>
                  Gracias. Te respondemos para coordinar y fabricar tu maqueta en
                  las próximas 24 horas hábiles.
                </p>
              </div>
            ) : (
              <>
                <h3 style={{ textAlign: "center", marginBottom: 6 }}>
                  Solicitar mi simulación gratis
                </h3>
                <p style={{ textAlign: "center", marginBottom: 24 }}>
                  Te respondemos para coordinar y fabricar tu maqueta.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="field">
                      <label htmlFor="nombre">Nombre</label>
                      <input
                        id="nombre"
                        required
                        value={form.nombre}
                        onChange={(e) =>
                          setForm({ ...form, nombre: e.target.value })
                        }
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="empresa">Empresa</label>
                      <input
                        id="empresa"
                        value={form.empresa}
                        onChange={(e) =>
                          setForm({ ...form, empresa: e.target.value })
                        }
                        placeholder="Tu empresa o proyecto"
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="email">Correo</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        placeholder="nombre@empresa.cl"
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="telefono">Teléfono / WhatsApp</label>
                      <input
                        id="telefono"
                        value={form.telefono}
                        onChange={(e) =>
                          setForm({ ...form, telefono: e.target.value })
                        }
                        placeholder="+56 9 ..."
                      />
                    </div>
                    <div className="field full">
                      <label htmlFor="linea">¿Qué línea te interesa?</label>
                      <select
                        id="linea"
                        value={form.linea}
                        onChange={(e) =>
                          setForm({ ...form, linea: e.target.value })
                        }
                      >
                        {lineas.map((l) => (
                          <option key={l} value={l}>
                            {l}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="field full">
                      <label htmlFor="proceso">
                        ¿Qué proceso quieres convertir en app?
                      </label>
                      <textarea
                        id="proceso"
                        required
                        rows={3}
                        value={form.proceso}
                        onChange={(e) =>
                          setForm({ ...form, proceso: e.target.value })
                        }
                        placeholder="Ej: hoy hago las cotizaciones en un Excel y las envío por WhatsApp..."
                      />
                    </div>
                    <div className="field full">
                      <button
                        type="submit"
                        className="btn btn-grad"
                        style={{ width: "100%" }}
                        disabled={status === "sending"}
                      >
                        {status === "sending" ? "Enviando..." : "Enviar solicitud"}
                      </button>
                    </div>
                  </div>
                </form>
                {status === "error" && (
                  <p
                    style={{
                      fontSize: "0.86rem",
                      color: "#c0392b",
                      marginTop: 14,
                      textAlign: "center",
                    }}
                  >
                    Hubo un error al enviar. Escríbenos directo a{" "}
                    <a href="mailto:info@passus.cl">info@passus.cl</a>
                  </p>
                )}
                <p
                  style={{
                    fontSize: "0.76rem",
                    color: "var(--muted)",
                    marginTop: 16,
                    textAlign: "center",
                  }}
                >
                  Al enviar aceptas que Passus SpA trate tus datos para
                  contactarte.
                </p>
              </>
            )}
          </div>
          <p className="center" style={{ marginTop: 26, color: "var(--muted)" }}>
            También puedes escribirnos a{" "}
            <a href="mailto:info@passus.cl">info@passus.cl</a>
          </p>
        </div>
      </section>
    </>
  );
}
