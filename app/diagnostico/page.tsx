import Link from "next/link";
import type { Metadata } from "next";
import { DOMINIOS } from "@/lib/diagnostico";
import "./diagnostico.css";

export const metadata: Metadata = {
  title: "Diagnóstico de sistemas de gestión | Simulador · FabricAI by Passus",
  description:
    "Simulador de diagnóstico en Gobierno de IA, Gobierno de TI, Gestión de TI, Gobierno de datos y Ley 21.719. Responde el cuestionario y obtén tu nivel de madurez, brechas y plan a 90 días.",
  alternates: { canonical: "/diagnostico" },
};

export default function DiagnosticoPage() {
  return (
    <>
      <section className="page-banner">
        <span className="ab x1" />
        <span className="ab x2" />
        <div className="wrap inner">
          <div className="crumbs">
            <Link href="/">Inicio</Link> · Diagnóstico
          </div>
          <h1>Diagnóstico de sistemas de gestión</h1>
          <p>
            Cinco cuestionarios, un mismo motor: responde y obtén tu nivel de
            madurez, las brechas priorizadas y una hoja de ruta a 90 días.
          </p>
          <p style={{ marginTop: 24 }}>
            <a href="#diagnosticos" className="btn btn-grad">
              Elegir mi diagnóstico
            </a>
          </p>
        </div>
      </section>

      {/* ELEGIR DIAGNÓSTICO */}
      <section className="white" id="diagnosticos">
        <div className="wrap center">
          <span className="kicker">Gratis · Sin registro</span>
          <h2>¿Qué quieres diagnosticar?</h2>
          <p className="lead">
            Cada cuestionario está construido sobre marcos reconocidos y evalúa
            cinco dimensiones. Todo el cálculo ocurre en tu navegador: no
            enviamos tus respuestas a ningún servidor.
          </p>
        </div>
        <div className="wrap">
          <div className="dx-grid">
            {DOMINIOS.map((d, i) => (
              <Link
                key={d.slug}
                href={`/diagnostico/${d.slug}`}
                className="dx-card"
              >
                <div className="n">{String(i + 1).padStart(2, "0")}</div>
                <h3>{d.nombreCorto}</h3>
                <p>{d.resumen}</p>
                <div className="marcos">
                  {d.marcos.slice(0, 3).map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
                <span className="go">Iniciar diagnóstico</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="alt">
        <div className="wrap center">
          <span className="kicker">Cómo funciona</span>
          <h2>De 15 preguntas a un plan concreto</h2>
          <p className="lead">
            No es un test de marketing con un puntaje inventado: cada pregunta
            está anclada a una cláusula de un marco y cada brecha viene con la
            acción que la cierra.
          </p>
        </div>
        <div className="wrap">
          <div className="pasos">
            <div className="paso">
              <div className="num">01</div>
              <h4>Eliges el dominio</h4>
              <p>Gobierno de IA, TI, datos, gestión de servicios o Ley 21.719.</p>
            </div>
            <div className="paso">
              <div className="num">02</div>
              <h4>Respondes 15 preguntas</h4>
              <p>
                Cinco bloques temáticos, con una escala de madurez de cinco
                niveles y una ayuda por pregunta.
              </p>
            </div>
            <div className="paso star">
              <span className="flag">Inmediato</span>
              <div className="num">03</div>
              <h4>Recibes tu reporte</h4>
              <p>
                Puntaje global, resultado por dimensión, brechas priorizadas por
                criticidad y hoja de ruta a 90 días.
              </p>
            </div>
            <div className="paso">
              <div className="num">04</div>
              <h4>Decides el paso siguiente</h4>
              <p>
                Lo revisas internamente o lo trabajamos contigo en una
                evaluación formal con evidencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REPORTE DE MUESTRA */}
      <section className="dark-sec">
        <div className="wrap">
          <span className="kicker">Resultado de muestra</span>
          <h2>Así se ve tu reporte</h2>
          <p style={{ marginTop: 12, maxWidth: 640 }}>
            Ejemplo del diagnóstico de Gobierno de IA en una organización de
            servicios que ya usa IA generativa sin política formal.
          </p>
          <div className="score">
            <div className="sc">
              <div className="v">38%</div>
              <div className="k">Madurez global · Nivel 2</div>
            </div>
            <div className="sc">
              <div className="v">22%</div>
              <div className="k">Estrategia y liderazgo</div>
            </div>
            <div className="sc">
              <div className="v">17%</div>
              <div className="k">Inventario de casos de uso</div>
            </div>
            <div className="sc">
              <div className="v">44%</div>
              <div className="k">Gestión de riesgos</div>
            </div>
          </div>
          <div className="alert">
            <b>6 brechas de criticidad alta detectadas.</b> Las tres primeras
            entran al plan de 0–30 días: aprobar la política de uso de IA,
            levantar el inventario de casos de uso y definir qué información
            nunca sale hacia un modelo externo.
          </div>
        </div>
      </section>

      {/* ALCANCE Y LÍMITES */}
      <section className="white">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Alcance del simulador</span>
              <h2>Qué es y qué no es</h2>
              <p style={{ marginTop: 14 }}>
                Este es un producto mínimo viable. Sirve para ordenar la
                conversación interna y detectar por dónde partir, no para
                certificar nada.
              </p>
              <ul className="lista">
                <li>
                  El resultado se basa en lo que declaras, sin verificación de
                  evidencia.
                </li>
                <li>
                  Las respuestas se guardan solo en tu navegador. Puedes
                  borrarlas en un clic.
                </li>
                <li>
                  El diagnóstico de Ley 21.719 es referencial y no constituye
                  asesoría legal.
                </li>
                <li>
                  Una evaluación formal revisa documentos, sistemas y entrevista
                  a los responsables.
                </li>
              </ul>
            </div>
            <div>
              <span className="kicker">Sobre qué está construido</span>
              <h2>Marcos de referencia</h2>
              <p style={{ marginTop: 14 }}>
                Cada pregunta cita la cláusula o práctica que la respalda, para
                que puedas rastrear el criterio.
              </p>
              <div className="chips">
                <span>ISO/IEC 42001</span>
                <span>NIST AI RMF</span>
                <span>EU AI Act</span>
                <span>ISO/IEC 38500</span>
                <span>COBIT 2019</span>
                <span>ITIL 4</span>
                <span>ISO/IEC 20000-1</span>
                <span>DAMA-DMBOK 2</span>
                <span>ISO/IEC 38505-1</span>
                <span>Ley 21.719</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="final">
        <div className="wrap">
          <span className="kicker">Después del diagnóstico</span>
          <h2>El puntaje es el comienzo, no el entregable</h2>
          <p className="lead">
            Si el resultado te hace sentido, lo revisamos contigo y lo
            convertimos en un plan con responsables, plazos y evidencia.
          </p>
          <p className="micro">
            Sin compromiso. Si no necesitas una consultoría, te lo decimos.
          </p>
          <div
            className="hero-cta"
            style={{ justifyContent: "center", marginTop: 8 }}
          >
            <Link href="/contacto" className="btn btn-grad">
              Conversar el resultado
            </Link>
            <Link href="/productos" className="btn btn-ghost">
              Ver agentes de cumplimiento
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
