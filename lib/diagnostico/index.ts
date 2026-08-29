/* ============================================================
   Diagnóstico FabricAI · Registro de dominios
   Agregar un dominio nuevo = crear su archivo y sumarlo a DOMINIOS.
   La ruta /diagnostico/[dominio] y el hub se generan desde aquí.
   ============================================================ */

import type { Dominio } from "./tipos";
import { gobiernoIA } from "./dominios/gobierno-ia";
import { gobiernoTI } from "./dominios/gobierno-ti";
import { gestionTI } from "./dominios/gestion-ti";
import { gobiernoDatos } from "./dominios/gobierno-datos";
import { proteccionDatosCL } from "./dominios/proteccion-datos-cl";

export const DOMINIOS: readonly Dominio[] = [
  gobiernoIA,
  gobiernoTI,
  gestionTI,
  gobiernoDatos,
  proteccionDatosCL,
];

export function obtenerDominio(slug: string): Dominio | undefined {
  return DOMINIOS.find((d) => d.slug === slug);
}

export * from "./tipos";
export * from "./motor";
