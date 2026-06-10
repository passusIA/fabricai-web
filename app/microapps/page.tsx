import Link from "next/link";
import type { Metadata } from "next";
import "./microapps.css";

export const metadata: Metadata = {
  title: "MicroApps Express | Tu proceso, hecho app en días · FabricAI",
  description:
    "MicroApps Express: en 24–48h te mostramos una simulación visual navegable de tu aplicación. Primero la ves, luego decides si la desarrollamos.",
};

const chips = [
  "Generador de presupuestos",
  "Cotizador",
  "Mini-CRM",
  "Control de tareas",
  "Checklist de cumplimiento",
  "Órdenes de trabajo",
  "Seguimiento de clientes",
  "Mini-dashboards",
];

export default function MicroAppsPage() {
  return (
    <>
      <section className="page-banner">
        <span className="ab x1" />
        <span className="ab x2" />
        <div className="wrap inner">
          <div className="crumbs">
            <Link href="/">Inicio</Link> · MicroApps Express
          </div>
          <h1>MicroApps Express: tu proceso, hecho app en días</h1>
          <p>Primero la ves. Luego decides si la desarrollamos.</p>
          <p style={{ marginTop: 24 }}>
            <Link href="/contacto" className="btn btn-grad">
              Solicitar mi simulación gratis
            </Link>
          </p>
        </div>
      </section>

      {/* QUÉ ES + MOCKS */}
      <section className="dark-sec">
        <div className="wrap">
          <div className="ex-grid">
            <div>
              <span className="kicker">Qué es</span>
              <h2>Una app pequeña que hace bien una sola tarea</h2>
              <p style={{ marginTop: 14 }}>
                Una MicroApp está enfocada en <b style={{ color: "#fff" }}>una</b>{" "}
                tarea crítica y está lista en días, no en meses. No es un sistema
                gigante: es la herramienta exacta para dejar de hacer algo a mano.
              </p>
              <div className="chips dark">
                {chips.map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
            </div>
            <div className="ex-mocks">
              <div className="mock">
                <div className="top">
                  <i style={{ background: "#ff5f57" }} />
                  <i style={{ background: "#febc2e" }} />
                  <i style={{ background: "#28c840" }} />
                </div>
                <div className="body">
                  <div className="t">💰 Cotizador</div>
                  <div className="fld m" />
                  <div className="fld s" />
                  <div className="fld m" />
                  <div className="total">
                    <span>Total estimado</span>
                    <b>$ 1.240.000</b>
                  </div>
                </div>
              </div>
              <div className="mock">
                <div className="top">
                  <i style={{ background: "#ff5f57" }} />
                  <i style={{ background: "#febc2e" }} />
                  <i style={{ background: "#28c840" }} />
                </div>
                <div className="body">
                  <div className="t">👥 Mini-CRM</div>
                  <div className="li">
                    <span className="ck" /> Cliente A
                  </div>
                  <div className="li">
                    <span className="ck" /> Cliente B
                  </div>
                  <div className="li">
                    <span className="ck" /> Cliente C
                  </div>
                </div>
              </div>
              <div className="mock">
                <div className="top">
                  <i style={{ background: "#ff5f57" }} />
                  <i style={{ background: "#febc2e" }} />
                  <i style={{ background: "#28c840" }} />
                </div>
                <div className="body">
                  <div className="t">✅ Checklist</div>
                  <div className="li">
                    <span className="ck" /> Documento firmado
                  </div>
                  <div className="li">
                    <span className="ck" /> Datos validados
                  </div>
                  <div className="fld s" />
                </div>
              </div>
              <div className="mock">
                <div className="top">
                  <i style={{ background: "#ff5f57" }} />
                  <i style={{ background: "#febc2e" }} />
                  <i style={{ background: "#28c840" }} />
                </div>
                <div className="body">
                  <div className="t">📊 Dashboard</div>
                  <div
                    className="fld m"
                    style={{ background: "var(--grad)", width: "55%" }}
                  />
                  <div className="fld m" />
                  <div className="fld s" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIMULACIÓN + PROCESO */}
      <section className="white">
        <div className="wrap center">
          <span className="kicker">La simulación visual rápida</span>
          <h2>
            No te entregamos un documento. Te entregamos una maqueta navegable.
          </h2>
          <p className="lead">
            Pantallas reales que puedes clickear, para ver y validar tu app antes
            de construirla. En 24–48 horas para casos simples.
          </p>
        </div>
        <div className="wrap">
          <div className="pasos">
            <div className="paso">
              <div className="num">01</div>
              <h4>Cuéntanos tu proceso</h4>
              <p>15 minutos por formulario o llamada. Sin tecnicismos.</p>
            </div>
            <div className="paso star">
              <span className="flag">24–48h</span>
              <div className="num">02</div>
              <h4>Fabricamos la simulación</h4>
              <p>Te mostramos la maqueta navegable de tu app.</p>
            </div>
            <div className="paso">
              <div className="num">03</div>
              <h4>La ves y la validas</h4>
              <p>Clickeas, pruebas el flujo y propones cambios.</p>
            </div>
            <div className="paso">
              <div className="num">04</div>
              <h4>Decides</h4>
              <p>
                Si avanzamos, construimos la versión real. Si no, no pagaste un
                desarrollo a ciegas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUÉ REDUCE RIESGO */}
      <section className="dark-sec">
        <div className="wrap">
          <span className="kicker">Por qué reduce el riesgo</span>
          <h2>Ves antes de invertir</h2>
          <div className="riesgo">
            <div>Ves el resultado antes de invertir en desarrollo.</div>
            <div>
              Detectas cambios cuando aún son baratos (en la maqueta, no en el
              código).
            </div>
            <div>Alineas a tu equipo con algo concreto, no con una descripción.</div>
            <div>Bajas la incertidumbre de "¿era esto lo que quería?".</div>
          </div>
        </div>
      </section>

      <section className="final">
        <div className="wrap">
          <span className="kicker">Empieza hoy</span>
          <h2>Cuéntanos un proceso. Te mostramos su app.</h2>
          <p className="lead">
            Describe una tarea que hoy haces a mano y te fabricamos una simulación
            visual.
          </p>
          <p className="micro">Sin compromiso. Si no tiene sentido, te lo decimos.</p>
          <p style={{ marginTop: 8 }}>
            <Link href="/contacto" className="btn btn-grad">
              Solicitar mi simulación gratis
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
