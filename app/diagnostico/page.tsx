import Link from "next/link";
import type { Metadata } from "next";
import "./diagnostico.css";

export const metadata: Metadata = {
  title: "Diagnóstico Ley 21.719 | Cumplimiento · FabricAI by Passus",
  description:
    "Responde 10 preguntas y obtén un reporte ejecutivo con tu score de cumplimiento de la Ley 21.719, brechas y riesgo económico estimado.",
};

export default function DiagnosticoPage() {
  return (
    <>
      <section className="page-banner">
        <span className="ab x1" />
        <span className="ab x2" />
        <div className="wrap inner">
          <div className="crumbs">
            <Link href="/">Inicio</Link> · Diagnóstico Ley 21.719
          </div>
          <h1>Diagnóstico de cumplimiento Ley 21.719</h1>
          <p>
            Responde 10 preguntas y nuestro motor genera un reporte ejecutivo con
            tu score, brechas específicas y riesgo económico real.
          </p>
          <p style={{ marginTop: 24 }}>
            <a href="#iniciar" className="btn btn-grad">
              Iniciar diagnóstico gratuito
            </a>
          </p>
        </div>
      </section>

      <section className="dark-sec">
        <div className="wrap">
          <span className="kicker">Resultado de muestra</span>
          <h2>Así se ve tu reporte</h2>
          <div className="score">
            <div className="sc">
              <div className="v">34%</div>
              <div className="k">Cumplimiento global</div>
            </div>
            <div className="sc">
              <div className="v">2/4</div>
              <div className="k">Derechos ARCO+</div>
            </div>
            <div className="sc">
              <div className="v">1/4</div>
              <div className="k">Seguridad de datos</div>
            </div>
            <div className="sc">
              <div className="v">0/4</div>
              <div className="k">Protocolo de brechas</div>
            </div>
          </div>
          <div className="alert">
            <b>4 brechas críticas detectadas.</b> Riesgo estimado: multas de hasta
            20.000 UTM. Se genera un plan de acción a 90 días personalizado por
            Passus SpA.
          </div>
        </div>
      </section>

      <section className="white" id="iniciar">
        <div className="wrap center">
          <span className="kicker">Gratis · 2 horas</span>
          <h2>Inicia tu diagnóstico</h2>
          <p className="lead">
            En vez de 3 semanas de consultoría, obtén una primera evaluación en
            minutos. Luego coordinamos el plan de acción.
          </p>
          <div
            className="hero-cta"
            style={{ justifyContent: "center", marginTop: 26 }}
          >
            <Link href="/contacto" className="btn btn-grad">
              Iniciar diagnóstico
            </Link>
            <Link href="/productos" className="btn btn-light">
              Ver agentes de cumplimiento
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
