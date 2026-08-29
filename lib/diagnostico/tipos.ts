/* ============================================================
   Diagnóstico FabricAI · Tipos del modelo
   PMV: todo el motor corre en el cliente, sin backend ni datos
   persistidos fuera del navegador del usuario.
   ============================================================ */

/** Nivel de respuesta de una pregunta: 0 = inexistente, 4 = optimizado. */
export type Nivel = 0 | 1 | 2 | 3 | 4;

/** Etiquetas de las 5 opciones de respuesta, de menor a mayor madurez. */
export type Escala = readonly [string, string, string, string, string];

export type Pregunta = {
  id: string;
  texto: string;
  /** Aclaración corta: qué cuenta como "sí" para no responder a ciegas. */
  ayuda: string;
  /** Cuánto pesa la pregunta en el puntaje de su dimensión. */
  peso: 1 | 2 | 3;
  /** Cláusula o práctica del marco de referencia que respalda la pregunta. */
  referencia: string;
  /** Acción recomendada cuando la respuesta queda bajo el nivel esperado. */
  brecha: string;
  /** Escala propia; si se omite se usa la del dominio. */
  escala?: Escala;
};

export type Dimension = {
  id: string;
  nombre: string;
  descripcion: string;
  preguntas: readonly Pregunta[];
};

export type Dominio = {
  slug: string;
  nombre: string;
  nombreCorto: string;
  /** Frase de una línea para las tarjetas del hub. */
  resumen: string;
  descripcion: string;
  /** Marcos de referencia sobre los que se construyó el cuestionario. */
  marcos: readonly string[];
  escala: Escala;
  /** Qué está en juego si el puntaje es bajo (se muestra en el reporte). */
  impacto: string;
  /** Aviso propio del dominio (ej. "no es asesoría legal"). */
  advertencia?: string;
  dimensiones: readonly Dimension[];
};

export type Respuestas = Record<string, Nivel>;

export type Criticidad = "alta" | "media" | "baja";

export type Brecha = {
  preguntaId: string;
  dimension: string;
  texto: string;
  accion: string;
  referencia: string;
  nivel: Nivel;
  criticidad: Criticidad;
  /** Déficit ponderado: (4 - nivel) × peso. Ordena la hoja de ruta. */
  deficit: number;
};

export type ResultadoDimension = {
  id: string;
  nombre: string;
  descripcion: string;
  /** 0–100. */
  puntaje: number;
  nivel: number;
  obtenido: number;
  maximo: number;
};

export type NivelMadurez = {
  n: 1 | 2 | 3 | 4 | 5;
  nombre: string;
  descripcion: string;
};

export type Horizonte = {
  plazo: string;
  foco: string;
  acciones: readonly Brecha[];
};

export type Resultado = {
  puntaje: number;
  nivel: NivelMadurez;
  dimensiones: readonly ResultadoDimension[];
  brechas: readonly Brecha[];
  fortalezas: readonly string[];
  hojaDeRuta: readonly Horizonte[];
  totalPreguntas: number;
  respondidas: number;
};
