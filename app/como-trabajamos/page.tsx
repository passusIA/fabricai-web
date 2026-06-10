import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cómo trabajamos | Metodología · FabricAI by Passus",
  description:
    "De la idea a la herramienta sin saltos al vacío: conversamos, te mostramos una simulación, construimos y llevamos a producción.",
};

const comunicacion = [
  {
    title: "Canal exclusivo del proyecto",
    desc: "Slack o Discord dedicado. Respuesta garantizada en menos de 4 horas hábiles.",
  },
  {
    title: "Reporte escrito semanal",
    desc: "Una página con avances, pendientes y próximos pasos. Sin reuniones innecesarias.",
  },
  {
    title: "Demo cada 2 semanas",
    desc: "30–45 minutos por videollamada. Ves lo que se construyó. Apruebas o pides ajustes en tiempo real.",
  },
  {
    title: "Tablero de progreso",
    desc: "Acceso permanente al estado del proyecto. Sabes exactamente en qué estamos.",
  },
];

const garantias = [
  "Precio fijo: lo que cotizamos es lo que pagas",
  "Primera demo en 2 semanas o menos",
  "30 días de soporte post-entrega incluido",
  "El código fuente siempre es tuyo",
  "Si el Discovery Sprint no convence, no seguimos",
];

export default function ComoTrabajamosPage() {
  return (
    <>
      <section className="page-banner">
        <span className="ab x1" />
        <span className="ab x2" />
        <div className="wrap inner">
          <div className="crumbs">
            <Link href="/">Inicio</Link> · Cómo trabajamos
          </div>
          <h1>De la idea a la herramienta, sin saltos al vacío</h1>
          <p>
            Combinamos visión estratégica, buenas prácticas TI y desarrollo ágil.
            Ves el avance real en cada etapa — y la simulación va primero.
          </p>
        </div>
      </section>

      {/* PASOS */}
      <section className="white">
        <div className="wrap">
          <div className="pasos">
            <div className="paso">
              <div className="num">01</div>
              <h4>Conversamos</h4>
              <p>
                30 minutos para entender tu problema. Te decimos con honestidad si
                podemos ayudarte.
              </p>
            </div>
            <div className="paso star">
              <span className="flag">Sin costo</span>
              <div className="num">02</div>
              <h4>Simulación visual</h4>
              <p>
                En 24–48 h te mostramos la maqueta navegable de tu solución. La
                ves antes de invertir.
              </p>
            </div>
            <div className="paso">
              <div className="num">03</div>
              <h4>Construcción</h4>
              <p>
                Sprints cortos de 2 semanas con demos frecuentes. Ves el avance
                real en todo momento.
              </p>
            </div>
            <div className="paso">
              <div className="num">04</div>
              <h4>Producción</h4>
              <p>Deploy, documentación, capacitación y 30 días de soporte incluidos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ENFOQUE */}
      <section className="alt">
        <div className="wrap split">
          <div>
            <span className="kicker">Nuestro enfoque</span>
            <h2>Partimos por el problema, no por la herramienta</h2>
            <p style={{ marginTop: 14 }}>
              Antes de implementar IA, entendemos el proceso, los datos y los
              riesgos. La tecnología viene después, cuando tiene sentido y genera
              impacto real.
            </p>
            <ul className="lista">
              <li>Casos de uso priorizados por impacto y factibilidad</li>
              <li>Demos frecuentes: nada de "cajas negras"</li>
              <li>Integración con lo que ya usas (ERP, CRM, planillas, APIs)</li>
              <li>Buenas prácticas de seguridad y gobernanza de datos</li>
            </ul>
          </div>
          <div className="media dark">
            <span className="imgnote">IMG: tablero de proceso / roadmap IA</span>
          </div>
        </div>
      </section>

      {/* COMUNICACIÓN */}
      <section className="white">
        <div className="wrap center">
          <span className="kicker">Comunicación</span>
          <h2>Directa, sin intermediarios</h2>
          <p className="lead">
            Sabes en qué estamos en todo momento, con un canal claro y entregas
            frecuentes.
          </p>
        </div>
        <div className="wrap">
          <div className="cards-2">
            {comunicacion.map((c) => (
              <div className="linea" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTÍAS */}
      <section className="alt">
        <div className="wrap center">
          <span className="kicker">Garantías</span>
          <h2>Lo que garantizamos</h2>
        </div>
        <div className="wrap">
          <ul className="quien">
            {garantias.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="final">
        <div className="wrap">
          <span className="kicker">Empieza por una conversación</span>
          <h2>Cuéntanos tu proceso</h2>
          <p className="lead">
            Te decimos con honestidad si la IA puede ayudarte y cómo.
          </p>
          <div
            className="hero-cta"
            style={{ justifyContent: "center", marginTop: 26 }}
          >
            <Link href="/contacto" className="btn btn-grad">
              Agendar conversación
            </Link>
            <Link href="/microapps" className="btn btn-ghost">
              Ver MicroApps Express
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
