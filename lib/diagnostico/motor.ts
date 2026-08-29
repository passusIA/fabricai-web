/* ============================================================
   Diagnóstico FabricAI · Motor de evaluación
   Convierte respuestas (0–4) en puntaje, brechas y hoja de ruta.
   Determinista: los mismos datos siempre dan el mismo reporte.
   ============================================================ */

import type {
  Brecha,
  Criticidad,
  Dominio,
  Horizonte,
  Nivel,
  NivelMadurez,
  Resultado,
  ResultadoDimension,
  Respuestas,
} from "./tipos";

/** Escala de madurez de 5 niveles, común a todos los dominios. */
export const NIVELES: readonly NivelMadurez[] = [
  {
    n: 1,
    nombre: "Inicial",
    descripcion:
      "Las prácticas dependen de personas concretas. No hay definiciones escritas ni evidencia sistemática.",
  },
  {
    n: 2,
    nombre: "Repetible",
    descripcion:
      "Existen prácticas informales que se repiten, pero sin estándar único ni responsables formales.",
  },
  {
    n: 3,
    nombre: "Definido",
    descripcion:
      "Hay políticas y procesos documentados y conocidos. La aplicación todavía es despareja entre áreas.",
  },
  {
    n: 4,
    nombre: "Gestionado",
    descripcion:
      "Los procesos se aplican de forma consistente, con roles claros, indicadores y evidencia auditable.",
  },
  {
    n: 5,
    nombre: "Optimizado",
    descripcion:
      "El desempeño se mide, se compara y se mejora de forma continua sobre la base de datos.",
  },
];

/** Corta el 0–100 en los 5 niveles de madurez (20 puntos cada uno). */
export function nivelDePuntaje(puntaje: number): NivelMadurez {
  if (puntaje <= 20) return NIVELES[0];
  if (puntaje <= 40) return NIVELES[1];
  if (puntaje <= 60) return NIVELES[2];
  if (puntaje <= 80) return NIVELES[3];
  return NIVELES[4];
}

function criticidadDe(deficit: number): Criticidad {
  if (deficit >= 6) return "alta";
  if (deficit >= 3) return "media";
  return "baja";
}

/** Total de preguntas del dominio. */
export function contarPreguntas(dominio: Dominio): number {
  return dominio.dimensiones.reduce((n, d) => n + d.preguntas.length, 0);
}

/** Cuántas de las preguntas del dominio ya tienen respuesta. */
export function contarRespondidas(
  dominio: Dominio,
  respuestas: Respuestas,
): number {
  return dominio.dimensiones.reduce(
    (n, d) =>
      n + d.preguntas.filter((p) => respuestas[p.id] !== undefined).length,
    0,
  );
}

/** True si todas las preguntas de la dimensión están respondidas. */
export function dimensionCompleta(
  dominio: Dominio,
  indice: number,
  respuestas: Respuestas,
): boolean {
  const dim = dominio.dimensiones[indice];
  if (!dim) return false;
  return dim.preguntas.every((p) => respuestas[p.id] !== undefined);
}

/**
 * Evalúa las respuestas contra el dominio.
 * Las preguntas sin responder cuentan como nivel 0: el reporte parcial nunca
 * sobreestima la madurez.
 */
export function evaluar(dominio: Dominio, respuestas: Respuestas): Resultado {
  const dimensiones: ResultadoDimension[] = [];
  const brechas: Brecha[] = [];
  const fortalezas: string[] = [];

  let obtenidoTotal = 0;
  let maximoTotal = 0;

  for (const dim of dominio.dimensiones) {
    let obtenido = 0;
    let maximo = 0;

    for (const preg of dim.preguntas) {
      const nivel: Nivel = respuestas[preg.id] ?? 0;
      obtenido += nivel * preg.peso;
      maximo += 4 * preg.peso;

      const deficit = (4 - nivel) * preg.peso;
      if (nivel <= 2) {
        brechas.push({
          preguntaId: preg.id,
          dimension: dim.nombre,
          texto: preg.texto,
          accion: preg.brecha,
          referencia: preg.referencia,
          nivel,
          criticidad: criticidadDe(deficit),
          deficit,
        });
      }
    }

    const puntaje = maximo === 0 ? 0 : Math.round((obtenido / maximo) * 100);
    dimensiones.push({
      id: dim.id,
      nombre: dim.nombre,
      descripcion: dim.descripcion,
      puntaje,
      nivel: nivelDePuntaje(puntaje).n,
      obtenido,
      maximo,
    });

    if (puntaje >= 70) {
      fortalezas.push(
        `${dim.nombre}: ${puntaje}% — base sólida sobre la que apoyar el resto del programa.`,
      );
    }

    obtenidoTotal += obtenido;
    maximoTotal += maximo;
  }

  // Primero por déficit ponderado; a igual déficit, primero el nivel más bajo.
  brechas.sort((a, b) => b.deficit - a.deficit || a.nivel - b.nivel);

  const puntaje =
    maximoTotal === 0 ? 0 : Math.round((obtenidoTotal / maximoTotal) * 100);

  return {
    puntaje,
    nivel: nivelDePuntaje(puntaje),
    dimensiones,
    brechas,
    fortalezas,
    hojaDeRuta: construirHojaDeRuta(brechas),
    totalPreguntas: contarPreguntas(dominio),
    respondidas: contarRespondidas(dominio, respuestas),
  };
}

/**
 * Reparte las brechas en tres horizontes: lo más crítico primero, y no más de
 * tres frentes por horizonte para que el plan sea ejecutable.
 */
function construirHojaDeRuta(brechas: readonly Brecha[]): Horizonte[] {
  const plan: Horizonte[] = [
    {
      plazo: "0–30 días",
      foco: "Contener el riesgo: cerrar lo que hoy deja a la organización expuesta.",
      acciones: brechas.slice(0, 3),
    },
    {
      plazo: "31–60 días",
      foco: "Formalizar: documentar, asignar responsables y dejar evidencia.",
      acciones: brechas.slice(3, 6),
    },
    {
      plazo: "61–90 días",
      foco: "Medir y sostener: indicadores, revisión periódica y mejora continua.",
      acciones: brechas.slice(6, 9),
    },
  ];
  return plan.filter((h) => h.acciones.length > 0);
}
