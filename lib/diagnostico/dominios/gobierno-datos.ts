import type { Dominio, Escala } from "../tipos";

const ESCALA: Escala = [
  "No existe",
  "Informal, por iniciativa de algunos",
  "Definido en papel",
  "Aplicado de forma consistente",
  "Medido y en mejora continua",
];

export const gobiernoDatos: Dominio = {
  slug: "gobierno-datos",
  nombre: "Gobierno de Datos",
  nombreCorto: "Gobierno de datos",
  resumen:
    "Evalúa si los datos de la organización tienen dueño, calidad conocida y reglas de uso claras.",
  descripcion:
    "Sin gobierno de datos, cada área construye su propia verdad y ninguna se puede auditar. Este diagnóstico revisa las cinco capas del DAMA-DMBOK que hacen que un dato sea confiable: quién responde por él, dónde está descrito, cuánto vale su calidad, cómo se protege y cuánto tiempo vive.",
  marcos: ["DAMA-DMBOK 2", "ISO/IEC 38505-1", "DCAM", "ISO 8000"],
  escala: ESCALA,
  impacto:
    "El costo del dato sin gobierno rara vez aparece como una línea del presupuesto: aparece como reuniones para reconciliar cifras, informes que nadie cree y proyectos de analítica o IA que se detienen porque los datos no sirven.",
  dimensiones: [
    {
      id: "estructura",
      nombre: "Estructura, roles y políticas",
      descripcion:
        "Quién responde por cada conjunto de datos y bajo qué reglas escritas.",
      preguntas: [
        {
          id: "gd-est-1",
          texto:
            "¿Existe una política de gobierno de datos aprobada y comunicada en la organización?",
          ayuda:
            "Un documento que define principios, roles y reglas de uso de los datos, vigente y conocido.",
          peso: 3,
          referencia: "DAMA-DMBOK 2 — Capítulo 3: Data Governance",
          brecha:
            "Redactar y aprobar una política de gobierno de datos que fije principios, roles, clasificación y reglas de uso compartido.",
        },
        {
          id: "gd-est-2",
          texto:
            "¿Los dominios de datos críticos tienen un dueño de negocio (data owner) formalmente designado?",
          ayuda:
            "Una persona del negocio, no de TI, que decide sobre definición, calidad y acceso a ese dominio.",
          peso: 3,
          referencia: "DAMA-DMBOK 2 — Roles: Data Owner / Data Steward",
          brecha:
            "Designar dueños de datos por dominio crítico (clientes, productos, finanzas, personas) con responsabilidades escritas sobre definición, calidad y acceso.",
        },
        {
          id: "gd-est-3",
          texto:
            "¿Existe una instancia formal donde se resuelven las decisiones sobre datos?",
          ayuda:
            "Un comité o mesa de datos que zanja definiciones en disputa y prioriza el trabajo de calidad.",
          peso: 2,
          referencia: "ISO/IEC 38505-1 — Gobierno del dato",
          brecha:
            "Constituir un comité de datos con representación de las áreas usuarias, mandato para resolver definiciones y priorizar remediaciones.",
        },
      ],
    },
    {
      id: "catalogo",
      nombre: "Catálogo, metadatos y linaje",
      descripcion:
        "Saber qué datos existen, qué significan y de dónde vienen.",
      preguntas: [
        {
          id: "gd-cat-1",
          texto:
            "¿Existe un catálogo o inventario de los activos de datos de la organización?",
          ayuda:
            "Qué bases, tablas o reportes existen, para qué sirven y quién los mantiene.",
          peso: 3,
          referencia: "DAMA-DMBOK 2 — Capítulo 12: Metadata Management",
          brecha:
            "Levantar un inventario de activos de datos partiendo por los reportes que usa la dirección: origen, dueño, frecuencia de actualización y uso.",
        },
        {
          id: "gd-cat-2",
          texto:
            "¿Existe un glosario de negocio con las definiciones oficiales de los términos clave?",
          ayuda:
            'Que "cliente activo" o "venta" signifiquen lo mismo en todas las áreas y reportes.',
          peso: 2,
          referencia: "DAMA-DMBOK 2 — Business Glossary",
          brecha:
            "Construir un glosario con los 20 términos más usados en los reportes de dirección, cada uno con definición aprobada y dueño.",
        },
        {
          id: "gd-cat-3",
          texto:
            "¿Se puede trazar el origen de las cifras de los reportes críticos (linaje)?",
          ayuda:
            "Se sabe de qué sistema y con qué transformación se construyó cada indicador del tablero.",
          peso: 2,
          referencia: "DAMA-DMBOK 2 — Data Lineage",
          brecha:
            "Documentar el linaje de los indicadores del tablero directivo: sistema origen, transformaciones aplicadas y responsable de cada paso.",
        },
      ],
    },
    {
      id: "calidad",
      nombre: "Calidad de datos",
      descripcion:
        "Medir qué tan confiables son los datos y corregir lo que no cumple.",
      preguntas: [
        {
          id: "gd-cal-1",
          texto:
            "¿Existen reglas de calidad definidas para los datos críticos (completitud, unicidad, validez)?",
          ayuda:
            "Reglas escritas y verificables, no una revisión visual cuando algo llama la atención.",
          peso: 3,
          referencia: "DAMA-DMBOK 2 — Capítulo 13: Data Quality",
          brecha:
            "Definir reglas de calidad medibles para los datos críticos y fijar un umbral de aceptación por regla.",
        },
        {
          id: "gd-cal-2",
          texto:
            "¿Se mide la calidad de los datos de forma periódica y se reporta el resultado?",
          ayuda:
            "Métricas con historia, que permiten ver si la calidad mejora o empeora.",
          peso: 2,
          referencia: "ISO 8000 — Calidad de datos maestros",
          brecha:
            "Automatizar la medición periódica de las reglas de calidad y publicar el resultado en un tablero visible para los dueños de datos.",
        },
        {
          id: "gd-cal-3",
          texto:
            "¿Hay un proceso definido para corregir los datos que no cumplen las reglas?",
          ayuda:
            "Con responsable, plazo y corrección en el origen, no solo un parche en el reporte.",
          peso: 2,
          referencia: "DAMA-DMBOK 2 — Data Quality Remediation",
          brecha:
            "Establecer un flujo de remediación que corrija en el sistema de origen, con responsable, plazo y verificación posterior.",
        },
      ],
    },
    {
      id: "seguridad",
      nombre: "Clasificación, seguridad y acceso",
      descripcion:
        "Que cada dato tenga un nivel de sensibilidad y solo lo vea quien debe.",
      preguntas: [
        {
          id: "gd-seg-1",
          texto:
            "¿Los datos están clasificados por nivel de sensibilidad (público, interno, confidencial, personal)?",
          ayuda:
            "Una clasificación aplicada a los repositorios reales, no solo definida en una política.",
          peso: 3,
          referencia: "DAMA-DMBOK 2 — Capítulo 7: Data Security",
          brecha:
            "Aplicar un esquema de clasificación a los repositorios de datos existentes y etiquetar al menos los que contienen datos personales o financieros.",
        },
        {
          id: "gd-seg-2",
          texto:
            "¿Los accesos a los datos se otorgan por rol y se revisan periódicamente?",
          ayuda:
            "Con revisión de accesos al menos anual y retiro efectivo al cambiar de función o salir.",
          peso: 3,
          referencia: "ISO/IEC 38505-1 — Control de acceso al dato",
          brecha:
            "Implementar acceso por rol con revisión periódica de permisos y retiro automático de accesos al cambio de función o desvinculación.",
        },
        {
          id: "gd-seg-3",
          texto:
            "¿Se controla el uso de datos productivos en ambientes de prueba o desarrollo?",
          ayuda:
            "Anonimización, enmascaramiento o datos sintéticos en lugar de copias íntegras de producción.",
          peso: 2,
          referencia: "DAMA-DMBOK 2 — Data Masking",
          brecha:
            "Prohibir copias íntegras de producción en ambientes no productivos e implementar enmascaramiento o generación de datos sintéticos.",
        },
      ],
    },
    {
      id: "ciclo",
      nombre: "Ciclo de vida e integración",
      descripcion:
        "Cuánto vive un dato, cómo se comparte y qué pasa cuando deja de ser necesario.",
      preguntas: [
        {
          id: "gd-cic-1",
          texto:
            "¿Existen políticas de retención y eliminación de datos por tipo de información?",
          ayuda:
            "Plazos definidos y aplicados, alineados con las obligaciones legales del sector.",
          peso: 3,
          referencia: "DAMA-DMBOK 2 — Data Retention",
          brecha:
            "Definir plazos de retención por tipo de dato según obligación legal y necesidad de negocio, y automatizar la eliminación al vencimiento.",
        },
        {
          id: "gd-cic-2",
          texto:
            "¿Las integraciones entre sistemas están documentadas y gestionadas de forma centralizada?",
          ayuda:
            "Se sabe qué sistema envía qué dato a cuál, con qué frecuencia y quién responde si falla.",
          peso: 2,
          referencia: "DAMA-DMBOK 2 — Capítulo 8: Data Integration",
          brecha:
            "Inventariar las integraciones existentes con origen, destino, frecuencia, responsable y comportamiento ante falla.",
        },
        {
          id: "gd-cic-3",
          texto:
            "¿Existe una fuente única de verdad definida para los datos maestros?",
          ayuda:
            "Para clientes, productos o proveedores: un sistema es el oficial y el resto se alimenta de él.",
          peso: 2,
          referencia: "DAMA-DMBOK 2 — Capítulo 10: Master Data Management",
          brecha:
            "Declarar el sistema maestro por cada dominio crítico y redirigir a los demás a consumir desde ahí en lugar de mantener copias propias.",
        },
      ],
    },
  ],
};
