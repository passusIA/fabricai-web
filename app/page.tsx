import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function HomePage() {
  return (
    <>
      {/* ====== HERO ====== */}
      {/* Para activar la foto de fondo: coloca /public/fabricai-hero-bg.jpg y
          cambia className a "hero has-img". Sin ella, queda fondo + aurora. */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-aurora">
          <span className="ab a1" />
          <span className="ab a2" />
          <span className="ab a3" />
        </div>

        <div className="hero-floats" aria-hidden="true">
          <div className="ffc c1">
            <div className="tt">
              <i style={{ background: "#ff5f57" }} />
              <i style={{ background: "#febc2e" }} />
              <i style={{ background: "#28c840" }} />
            </div>
            <div className="t">💰 Cotizador</div>
            <div className="ln m" />
            <div className="ln s" />
            <div className="tot">
              <span>Total</span>
              <span>$ 1.240.000</span>
            </div>
          </div>
          <div className="ffc c2">
            <div className="tt">
              <i style={{ background: "#ff5f57" }} />
              <i style={{ background: "#febc2e" }} />
              <i style={{ background: "#28c840" }} />
            </div>
            <div className="t">📊 Dashboard</div>
            <div className="bb" />
            <div className="ln m" />
            <div className="ln s" />
          </div>
          <div className="ffc c3">
            <div className="tt">
              <i style={{ background: "#ff5f57" }} />
              <i style={{ background: "#febc2e" }} />
              <i style={{ background: "#28c840" }} />
            </div>
            <div className="t">👥 Mini-CRM</div>
            <div className="li">
              <span className="ck" /> Cliente A <span className="pill">Activo</span>
            </div>
            <div className="li">
              <span className="ck" /> Cliente B <span className="pill">Propuesta</span>
            </div>
            <div className="li">
              <span className="ck" /> Cliente C <span className="pill">Cierre</span>
            </div>
          </div>
        </div>

        <div className="hero-inner wrap">
          <div className="hero-logo">
            <Logo size={56} />
            <span className="hw">
              Fabric<span className="grad-text">AI</span>
              <small>by Passus</small>
            </span>
          </div>
          <h1>
            Fabricamos <span className="grad-text">soluciones inteligentes</span>{" "}
            con IA
          </h1>
          <p className="sub">
            Convertimos tus procesos manuales —esos que hoy viven en Excel,
            WhatsApp y la memoria de tu equipo— en microapps, agentes y
            automatizaciones que trabajan por ti.
          </p>
          <span className="hook">
            Primero la ves. Luego decides si la desarrollamos.
          </span>
          <div className="hero-cta">
            <Link href="/contacto" className="btn btn-grad">
              Solicitar mi simulación gratis
            </Link>
            <Link href="/productos" className="btn btn-ghost">
              Ver ejemplos en vivo
            </Link>
          </div>
          <div className="stats">
            <div className="stat">
              <div className="n">24–48h</div>
              <div className="l">Simulación lista</div>
            </div>
            <div className="stat">
              <div className="n">11+</div>
              <div className="l">Agentes activos</div>
            </div>
            <div className="stat">
              <div className="n">3</div>
              <div className="l">Líneas de servicio</div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== PROBLEMA ====== */}
      <section className="white">
        <div className="wrap center">
          <span className="kicker">El punto de partida</span>
          <h2>
            Si trabajas con Excel, WhatsApp y memoria,
            <br />
            ya tienes una app esperando ser construida
          </h2>
          <p className="lead" style={{ marginTop: 14 }}>
            No necesitas un sistema enorme. Muchas veces necesitas una
            herramienta simple que haga bien una tarea crítica.
          </p>
        </div>
      </section>

      {/* ====== 3 LÍNEAS ====== */}
      <section className="alt">
        <div className="wrap center">
          <span className="kicker">Qué fabricamos</span>
          <h2>Una fábrica, tres formas de empezar</h2>
          <p className="lead">
            Elige según tu momento: una herramienta simple y rápida, una
            solución avanzada, o aprender a construir con IA.
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
                Aplicaciones simples y prácticas para resolver un proceso
                concreto. Listas en días.
              </p>
              <ul>
                <li>Cotizadores y presupuestos</li>
                <li>Mini-CRM y seguimiento</li>
                <li>Checklists y órdenes de trabajo</li>
              </ul>
              <p style={{ marginTop: 14 }}>
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
              <h3>Agentes IA y automatización</h3>
              <p>
                Soluciones avanzadas para automatizar, analizar, clasificar y
                conectar sistemas.
              </p>
              <ul>
                <li>Automatización de procesos</li>
                <li>Asistentes internos</li>
                <li>Cumplimiento Ley 21.719</li>
              </ul>
              <p style={{ marginTop: 14 }}>
                <Link className="link-arrow" href="/que-fabricamos">
                  Ver servicios
                </Link>
              </p>
            </div>
            <div className="linea">
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M22 10L12 5 2 10l10 5 10-5zM6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />
                </svg>
              </div>
              <h3>Formación</h3>
              <p>
                Aprende a usar y construir con IA. Tres niveles para equipos y
                profesionales.
              </p>
              <ul>
                <li>IA en tu trabajo (Esencial)</li>
                <li>Flujos y APIs (Productivo)</li>
                <li>Agentes en producción (Constructor)</li>
              </ul>
              <p style={{ marginTop: 14 }}>
                <Link className="link-arrow" href="/cursos">
                  Ver cursos
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== MICROAPPS EXPRESS (resumen) ====== */}
      <section className="dark-sec">
        <div className="wrap center">
          <span className="kicker">La forma más rápida de empezar</span>
          <h2>MicroApps Express: tu proceso, hecho app en días</h2>
          <p className="lead">
            En 24–48 horas te mostramos una simulación visual navegable de tu
            aplicación. La ves, la validas, y recién entonces decides si la
            construimos.
          </p>
          <p style={{ marginTop: 24 }}>
            <Link href="/microapps" className="btn btn-grad">
              Cómo funciona
            </Link>
          </p>
        </div>
      </section>

      {/* ====== CÓMO TRABAJAMOS (resumen) ====== */}
      <section className="white">
        <div className="wrap center">
          <span className="kicker">Cómo trabajamos</span>
          <h2>De la idea a la herramienta, sin saltos al vacío</h2>
        </div>
        <div className="wrap">
          <div className="pasos">
            <div className="paso">
              <div className="num">01</div>
              <h4>Conversamos</h4>
              <p>
                30 min para entender tu problema y decirte con honestidad si
                podemos ayudar.
              </p>
            </div>
            <div className="paso star">
              <span className="flag">Sin costo</span>
              <div className="num">02</div>
              <h4>Simulación visual</h4>
              <p>
                En 24–48 h te mostramos la maqueta navegable. La ves antes de
                invertir.
              </p>
            </div>
            <div className="paso">
              <div className="num">03</div>
              <h4>Construcción</h4>
              <p>Sprints cortos con demos frecuentes. Ves el avance real.</p>
            </div>
            <div className="paso">
              <div className="num">04</div>
              <h4>Producción</h4>
              <p>Deploy, documentación, capacitación y soporte para arrancar.</p>
            </div>
          </div>
          <p className="center" style={{ marginTop: 30 }}>
            <Link className="link-arrow" href="/como-trabajamos">
              Ver metodología completa
            </Link>
          </p>
        </div>
      </section>

      {/* ====== CONFIANZA ====== */}
      <section className="dark-sec">
        <div className="wrap center">
          <span className="kicker">Por qué FabricAI</span>
          <h2>IA aplicada al negocio, no solo tecnología</h2>
          <p className="lead">
            Somos FabricAI, la fábrica de soluciones con IA de Passus — con años
            de experiencia en consultoría, formación y gestión TI en Chile.
          </p>
          <p style={{ marginTop: 24 }}>
            <Link href="/la-fabrica" className="btn btn-ghost">
              Conoce La Fábrica
            </Link>
          </p>
        </div>
      </section>

      {/* ====== CTA FINAL ====== */}
      <section className="final">
        <div className="wrap">
          <span className="kicker">Conversemos</span>
          <h2>Cuéntanos un proceso. Te mostramos su app.</h2>
          <p className="lead">
            Describe una tarea que hoy haces a mano y te fabricamos una
            simulación visual de cómo podría funcionar.
          </p>
          <p className="micro">Sin compromiso. Si no tiene sentido, te lo decimos.</p>
          <div className="hero-cta" style={{ justifyContent: "center" }}>
            <Link href="/contacto" className="btn btn-grad">
              Solicitar mi simulación gratis
            </Link>
            <Link href="/diagnostico" className="btn btn-ghost">
              Diagnósticos gratuitos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
