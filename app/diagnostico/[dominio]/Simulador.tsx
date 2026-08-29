"use client";

/* ============================================================
   Simulador de diagnóstico (PMV)
   Todo el cálculo ocurre en el navegador: no se envía ninguna
   respuesta a un servidor. El avance se guarda en localStorage
   para que recargar la página no borre el trabajo.
   ============================================================ */

import Link from "next/link";
import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { Info, Printer } from "lucide-react";
import {
  contarRespondidas,
  dimensionCompleta,
  evaluar,
} from "@/lib/diagnostico/motor";
import type { Dominio, Nivel, Respuestas } from "@/lib/diagnostico/tipos";

type Etapa = "intro" | "cuestionario" | "reporte";

type Ficha = {
  organizacion: string;
  sector: string;
  tamano: string;
};

type Guardado = {
  etapa: Etapa;
  paso: number;
  respuestas: Respuestas;
  ficha: Ficha;
  /** Fecha de emisión del reporte, ya formateada. */
  fecha: string;
};

const FICHA_VACIA: Ficha = { organizacion: "", sector: "", tamano: "" };

const TAMANOS = [
  "Menos de 50 personas",
  "Entre 50 y 200 personas",
  "Entre 200 y 1.000 personas",
  "Más de 1.000 personas",
];

const SECTORES = [
  "Servicios profesionales",
  "Retail y consumo",
  "Salud",
  "Educación",
  "Banca y finanzas",
  "Industria y minería",
  "Sector público",
  "Tecnología",
  "Otro",
];

const ESTADO_VACIO: Guardado = {
  etapa: "intro",
  paso: 0,
  respuestas: {},
  ficha: FICHA_VACIA,
  fecha: "",
};

function claveAlmacenamiento(slug: string) {
  return `fabricai:diagnostico:${slug}`;
}

/**
 * Recupera el avance guardado. En el servidor devuelve el estado vacío, que es
 * exactamente lo que se renderiza en el primer paso de hidratación.
 */
function leerGuardado(slug: string, pasoMaximo: number): Guardado {
  if (typeof window === "undefined") return ESTADO_VACIO;
  try {
    const crudo = window.localStorage.getItem(claveAlmacenamiento(slug));
    if (!crudo) return ESTADO_VACIO;
    const g = JSON.parse(crudo) as Partial<Guardado>;
    return {
      etapa:
        g.etapa === "cuestionario" || g.etapa === "reporte" ? g.etapa : "intro",
      paso:
        typeof g.paso === "number"
          ? Math.min(Math.max(g.paso, 0), pasoMaximo)
          : 0,
      respuestas: g.respuestas ?? {},
      ficha: { ...FICHA_VACIA, ...g.ficha },
      fecha: typeof g.fecha === "string" ? g.fecha : "",
    };
  } catch {
    // Modo privado o almacenamiento bloqueado: el simulador funciona igual,
    // solo se pierde el avance al recargar.
    return ESTADO_VACIO;
  }
}

// Detector de hidratación sin efectos: en el servidor y en el primer render del
// cliente devuelve false, y true una vez hidratado. Permite restaurar el avance
// desde localStorage sin desalinear el HTML del servidor.
const SIN_SUSCRIPCION = () => () => {};
const enCliente = () => true;
const enServidor = () => false;

/** Color del semáforo según el puntaje 0–100. */
function colorPuntaje(p: number): string {
  if (p <= 40) return "#D64545";
  if (p <= 60) return "#D9962B";
  if (p <= 80) return "#3B6CF6";
  return "#1A9C6B";
}

export function Simulador({ dominio }: { dominio: Dominio }) {
  const pasoMaximo = dominio.dimensiones.length - 1;

  // El estado persistible vive en un solo objeto: así se lee y se guarda de
  // una vez, sin efectos que sincronicen campo por campo.
  const [estado, setEstado] = useState<Guardado>(() =>
    leerGuardado(dominio.slug, pasoMaximo),
  );
  const { etapa, paso, respuestas, ficha, fecha } = estado;

  const [aviso, setAviso] = useState(false);

  const hidratado = useSyncExternalStore(
    SIN_SUSCRIPCION,
    enCliente,
    enServidor,
  );

  const totalPreguntas = useMemo(
    () => dominio.dimensiones.reduce((n, d) => n + d.preguntas.length, 0),
    [dominio],
  );

  const resultado = useMemo(
    () => evaluar(dominio, respuestas),
    [dominio, respuestas],
  );

  useEffect(() => {
    const clave = claveAlmacenamiento(dominio.slug);
    // Una visita que no llegó a interactuar no deja rastro en el navegador.
    const enBlanco =
      estado.etapa === "intro" &&
      Object.keys(estado.respuestas).length === 0 &&
      !estado.ficha.organizacion &&
      !estado.ficha.sector &&
      !estado.ficha.tamano;
    try {
      if (enBlanco) window.localStorage.removeItem(clave);
      else window.localStorage.setItem(clave, JSON.stringify(estado));
    } catch {
      // Sin persistencia disponible: se ignora.
    }
  }, [dominio.slug, estado]);

  function actualizar(parcial: Partial<Guardado>) {
    setEstado((prev) => ({ ...prev, ...parcial }));
  }

  const respondidas = contarRespondidas(dominio, respuestas);
  const avance = Math.round((respondidas / totalPreguntas) * 100);
  const dimension = dominio.dimensiones[paso];
  const pasoCompleto = dimensionCompleta(dominio, paso, respuestas);
  const esUltimo = paso === pasoMaximo;

  function responder(preguntaId: string, nivel: Nivel) {
    setEstado((prev) => ({
      ...prev,
      respuestas: { ...prev.respuestas, [preguntaId]: nivel },
    }));
    setAviso(false);
  }

  function irArriba() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function comenzar() {
    actualizar({ etapa: "cuestionario", paso: 0 });
    irArriba();
  }

  function siguiente() {
    if (!pasoCompleto) {
      setAviso(true);
      return;
    }
    if (esUltimo) {
      actualizar({
        etapa: "reporte",
        fecha: new Date().toLocaleDateString("es-CL", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }),
      });
    } else {
      actualizar({ paso: paso + 1 });
    }
    setAviso(false);
    irArriba();
  }

  function anterior() {
    if (paso === 0) {
      actualizar({ etapa: "intro" });
    } else {
      actualizar({ paso: paso - 1 });
    }
    setAviso(false);
    irArriba();
  }

  function reiniciar() {
    // El efecto de persistencia sobrescribe lo guardado con el estado vacío.
    setEstado(ESTADO_VACIO);
    setAviso(false);
    irArriba();
  }

  if (!hidratado) {
    return (
      <section className="dx-app">
        <div className="wrap">
          <div className="dx-shell">
            <p>Cargando el simulador…</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="dx-app">
      <div className="wrap">
        <div className="dx-shell">
          <div className="dx-aviso">
            <Info size={18} />
            <p>
              <b>Simulador · versión PMV.</b> Los resultados son referenciales y
              se calculan en tu navegador con la información que declaras: no se
              envía ninguna respuesta a FabricAI ni se guarda fuera de este
              equipo.{" "}
              {dominio.advertencia}
            </p>
          </div>

          {etapa === "intro" && (
            <Intro
              dominio={dominio}
              ficha={ficha}
              setFicha={(f) => actualizar({ ficha: f })}
              totalPreguntas={totalPreguntas}
              respondidas={respondidas}
              onComenzar={comenzar}
              onReiniciar={reiniciar}
            />
          )}

          {etapa === "cuestionario" && dimension && (
            <>
              <div className="dx-prog">
                <div className="top">
                  <b>
                    Bloque {paso + 1} de {dominio.dimensiones.length} ·{" "}
                    {dimension.nombre}
                  </b>
                  <span>
                    {respondidas} de {totalPreguntas} preguntas · {avance}%
                  </span>
                </div>
                <div className="dx-bar">
                  <i style={{ width: `${avance}%` }} />
                </div>
                <div className="dx-steps">
                  {dominio.dimensiones.map((d, i) => {
                    const completa = dimensionCompleta(dominio, i, respuestas);
                    const clase = i === paso ? "on" : completa ? "ok" : "";
                    return (
                      <button
                        key={d.id}
                        type="button"
                        className={clase}
                        // Solo se puede saltar a bloques ya visitados o completos.
                        disabled={i > paso && !completa}
                        onClick={() => {
                          actualizar({ paso: i });
                          setAviso(false);
                          irArriba();
                        }}
                      >
                        {i + 1}. {d.nombre}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="dx-dimhead">
                <h3>{dimension.nombre}</h3>
                <p>{dimension.descripcion}</p>
              </div>

              {dimension.preguntas.map((preg, i) => {
                const escala = preg.escala ?? dominio.escala;
                const valor = respuestas[preg.id];
                return (
                  <div
                    key={preg.id}
                    className="dx-q"
                    role="radiogroup"
                    aria-labelledby={`${preg.id}-tit`}
                  >
                    <div className="qh">
                      <span className="qn" aria-hidden="true">
                        {i + 1}
                      </span>
                      <h4 id={`${preg.id}-tit`}>{preg.texto}</h4>
                    </div>
                    <p className="ayuda">{preg.ayuda}</p>
                    <div className="dx-opts">
                      {escala.map((etiqueta, nivel) => (
                        <label
                          key={etiqueta}
                          className={`dx-opt${valor === nivel ? " on" : ""}`}
                        >
                          <input
                            type="radio"
                            name={preg.id}
                            checked={valor === nivel}
                            onChange={() => responder(preg.id, nivel as Nivel)}
                          />
                          <span>{etiqueta}</span>
                          <span className="lv">Nivel {nivel + 1}</span>
                        </label>
                      ))}
                    </div>
                    <span className="ref">{preg.referencia}</span>
                  </div>
                );
              })}

              <div className="dx-nav">
                <button type="button" className="btn btn-light" onClick={anterior}>
                  {paso === 0 ? "Volver a la portada" : "Bloque anterior"}
                </button>
                <div className="right">
                  {aviso && !pasoCompleto && (
                    <span className="dx-falta" role="alert">
                      Responde las {dimension.preguntas.length} preguntas del
                      bloque para continuar.
                    </span>
                  )}
                  <button
                    type="button"
                    className="btn btn-grad"
                    onClick={siguiente}
                    disabled={!pasoCompleto}
                  >
                    {esUltimo ? "Ver mi diagnóstico" : "Siguiente bloque"}
                  </button>
                </div>
              </div>
            </>
          )}

          {etapa === "reporte" && (
            <Reporte
              dominio={dominio}
              ficha={ficha}
              fecha={fecha}
              resultado={resultado}
              onVolver={() => {
                actualizar({ etapa: "cuestionario", paso: pasoMaximo });
                irArriba();
              }}
              onReiniciar={reiniciar}
            />
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- Portada ---------- */

function Intro({
  dominio,
  ficha,
  setFicha,
  totalPreguntas,
  respondidas,
  onComenzar,
  onReiniciar,
}: {
  dominio: Dominio;
  ficha: Ficha;
  setFicha: (f: Ficha) => void;
  totalPreguntas: number;
  respondidas: number;
  onComenzar: () => void;
  onReiniciar: () => void;
}) {
  const minutos = Math.max(5, Math.round(totalPreguntas * 0.4));

  return (
    <div className="dx-intro">
      <span className="kicker">Antes de empezar</span>
      <h2>{dominio.nombre}</h2>
      <p style={{ marginTop: 12 }}>{dominio.descripcion}</p>

      <div className="marcos">
        {dominio.marcos.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>

      <div className="dx-meta">
        <div>
          <b>{totalPreguntas}</b>
          <small>preguntas en {dominio.dimensiones.length} bloques</small>
        </div>
        <div>
          <b>{minutos} min</b>
          <small>tiempo estimado de respuesta</small>
        </div>
        <div>
          <b>Inmediato</b>
          <small>reporte con brechas y plan a 90 días</small>
        </div>
      </div>

      <h3>Qué se evalúa</h3>
      <ul className="dx-dimlist">
        {dominio.dimensiones.map((d) => (
          <li key={d.id}>
            <b>{d.nombre}.</b> <span>{d.descripcion}</span>
          </li>
        ))}
      </ul>

      <h3>Datos del diagnóstico (opcional)</h3>
      <p style={{ fontSize: "0.9rem", marginTop: 6 }}>
        Se usan solo para encabezar el reporte en tu pantalla.
      </p>
      <div className="form-grid" style={{ marginTop: 16 }}>
        <div className="field">
          <label htmlFor="dx-org">Organización</label>
          <input
            id="dx-org"
            type="text"
            value={ficha.organizacion}
            placeholder="Nombre de tu organización"
            onChange={(e) => setFicha({ ...ficha, organizacion: e.target.value })}
          />
        </div>
        <div className="field">
          <label htmlFor="dx-sec">Sector</label>
          <select
            id="dx-sec"
            value={ficha.sector}
            onChange={(e) => setFicha({ ...ficha, sector: e.target.value })}
          >
            <option value="">Selecciona…</option>
            {SECTORES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="field full">
          <label htmlFor="dx-tam">Tamaño</label>
          <select
            id="dx-tam"
            value={ficha.tamano}
            onChange={(e) => setFicha({ ...ficha, tamano: e.target.value })}
          >
            <option value="">Selecciona…</option>
            {TAMANOS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="dx-cierre">
        <button type="button" className="btn btn-grad" onClick={onComenzar}>
          {respondidas > 0 ? "Continuar diagnóstico" : "Comenzar diagnóstico"}
        </button>
        {respondidas > 0 && (
          <button type="button" className="dx-link" onClick={onReiniciar}>
            Tienes {respondidas} respuestas guardadas en este equipo. Empezar de
            nuevo
          </button>
        )}
      </div>
    </div>
  );
}

/* ---------- Reporte ---------- */

function Reporte({
  dominio,
  ficha,
  fecha,
  resultado,
  onVolver,
  onReiniciar,
}: {
  dominio: Dominio;
  ficha: Ficha;
  fecha: string;
  resultado: ReturnType<typeof evaluar>;
  onVolver: () => void;
  onReiniciar: () => void;
}) {
  const color = colorPuntaje(resultado.puntaje);
  const criticas = resultado.brechas.filter((b) => b.criticidad === "alta");

  return (
    <div className="dx-reporte">
      <span className="kicker">Reporte simulado</span>

      <div className="dx-res-head">
        <div
          className="dx-gauge"
          style={{
            background: `conic-gradient(${color} ${resultado.puntaje * 3.6}deg, #EEF2F8 0deg)`,
          }}
          role="img"
          aria-label={`Puntaje global ${resultado.puntaje} por ciento`}
        >
          <span className="val">
            <b>{resultado.puntaje}%</b>
            <small>Madurez</small>
          </span>
        </div>
        <div>
          <span className="dx-nivel">
            Nivel {resultado.nivel.n} de 5 · {resultado.nivel.nombre}
          </span>
          <h2>{dominio.nombreCorto}</h2>
          <p style={{ marginTop: 10 }}>{resultado.nivel.descripcion}</p>
          <div className="dx-ficha">
            {ficha.organizacion && (
              <>
                <b>{ficha.organizacion}</b>
                {" · "}
              </>
            )}
            {ficha.sector && <>{ficha.sector} · </>}
            {ficha.tamano && <>{ficha.tamano} · </>}
            {resultado.respondidas} de {resultado.totalPreguntas} preguntas
            respondidas
            {fecha && <> · {fecha}</>}
          </div>
        </div>
      </div>

      <h3 className="dx-sub">Resultado por dimensión</h3>
      <div className="dx-dims">
        {resultado.dimensiones.map((d) => (
          <div className="dx-dim" key={d.id}>
            <div className="lab">
              <b>{d.nombre}</b>
              <span>
                <i>{d.puntaje}%</i> · nivel {d.nivel} de 5
              </span>
            </div>
            <div className="track">
              <i
                style={{
                  width: `${d.puntaje}%`,
                  background: colorPuntaje(d.puntaje),
                }}
              />
            </div>
            <p>{d.descripcion}</p>
          </div>
        ))}
      </div>

      <h3 className="dx-sub">
        Brechas detectadas ({resultado.brechas.length})
        {criticas.length > 0 && ` · ${criticas.length} de criticidad alta`}
      </h3>
      {resultado.brechas.length === 0 ? (
        <p>
          No se detectaron brechas bajo el umbral evaluado. En ese escenario el
          paso siguiente es verificar la evidencia: una cosa es declarar la
          práctica y otra demostrarla ante un auditor.
        </p>
      ) : (
        <div className="dx-gaps">
          {resultado.brechas.map((b) => (
            <div className={`dx-gap dx-c-${b.criticidad}`} key={b.preguntaId}>
              <div className="gh">
                <span className={`dx-crit dx-c-${b.criticidad}`}>
                  Criticidad {b.criticidad}
                </span>
                <span className="dim">{b.dimension}</span>
              </div>
              <h4>{b.texto}</h4>
              <p>
                <b>Acción recomendada:</b> {b.accion}
              </p>
              <span className="ref">{b.referencia}</span>
            </div>
          ))}
        </div>
      )}

      {resultado.hojaDeRuta.length > 0 && (
        <>
          <h3 className="dx-sub">Hoja de ruta sugerida a 90 días</h3>
          <div className="dx-road">
            {resultado.hojaDeRuta.map((h) => (
              <div className="dx-hito" key={h.plazo}>
                <div className="plazo">{h.plazo}</div>
                <p className="foco">{h.foco}</p>
                <ul>
                  {h.acciones.map((a) => (
                    <li key={a.preguntaId}>{a.accion}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </>
      )}

      {resultado.fortalezas.length > 0 && (
        <>
          <h3 className="dx-sub">Fortalezas sobre las que apoyarse</h3>
          <ul className="dx-fort">
            {resultado.fortalezas.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </>
      )}

      <h3 className="dx-sub">Qué está en juego</h3>
      <div className="dx-impacto">
        <b>Lectura de riesgo</b>
        {dominio.impacto}
      </div>

      <div className="dx-cierre">
        <Link href="/contacto" className="btn btn-grad">
          Revisar este resultado con Passus
        </Link>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => window.print()}
        >
          <Printer size={15} style={{ verticalAlign: "-2px", marginRight: 7 }} />
          Imprimir o guardar en PDF
        </button>
        <button type="button" className="dx-link" onClick={onVolver}>
          Revisar mis respuestas
        </button>
        <button type="button" className="dx-link" onClick={onReiniciar}>
          Empezar de nuevo
        </button>
      </div>
    </div>
  );
}
