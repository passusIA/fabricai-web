import type { Dominio, Escala } from "../tipos";

const ESCALA: Escala = [
  "No existe",
  "Informal, caso a caso",
  "Definido en papel",
  "Aplicado de forma consistente",
  "Medido y en mejora continua",
];

export const gobiernoIA: Dominio = {
  slug: "gobierno-ia",
  nombre: "Gobierno de Inteligencia Artificial",
  nombreCorto: "Gobierno de IA",
  resumen:
    "Evalúa si tu organización puede usar IA de forma responsable, trazable y defendible ante un tercero.",
  descripcion:
    "Adoptar IA sin gobierno es acumular deuda de riesgo: modelos que nadie inventaría, decisiones que nadie puede explicar y proveedores que nadie evaluó. Este diagnóstico revisa las cinco capas mínimas de un sistema de gestión de IA.",
  marcos: ["ISO/IEC 42001:2023", "NIST AI RMF 1.0", "EU AI Act", "OCDE AI Principles"],
  escala: ESCALA,
  impacto:
    "Sin gobierno de IA, el riesgo no desaparece: se traslada a quien firma. Decisiones automatizadas sin trazabilidad, filtración de datos hacia modelos de terceros y proyectos que nunca llegan a producción son los tres costos que aparecen primero.",
  dimensiones: [
    {
      id: "estrategia",
      nombre: "Estrategia y liderazgo",
      descripcion:
        "Quién decide sobre IA en la organización, con qué política y hasta dónde está dispuesta a llegar.",
      preguntas: [
        {
          id: "ia-est-1",
          texto: "¿Existe una política de uso de IA aprobada por la dirección?",
          ayuda:
            "Un documento formal que diga qué usos están permitidos, cuáles prohibidos y qué datos pueden entrar a una herramienta de IA.",
          peso: 3,
          referencia: "ISO/IEC 42001 §5.2 — Política de IA",
          brecha:
            "Redactar y aprobar una política de uso de IA de una página: usos permitidos, usos prohibidos, datos que nunca se cargan y a quién consultar ante la duda.",
        },
        {
          id: "ia-est-2",
          texto:
            "¿Hay roles y responsabilidades asignados formalmente para la gobernanza de IA?",
          ayuda:
            "Alguien con nombre y apellido responde por el uso de IA: un comité, un responsable o una función asignada por escrito.",
          peso: 2,
          referencia: "ISO/IEC 42001 §5.3 — Roles y responsabilidades",
          brecha:
            "Designar un responsable de IA y un comité con representación de negocio, TI, legal y seguridad, con acta de constitución y frecuencia de reunión.",
        },
        {
          id: "ia-est-3",
          texto:
            "¿Está definido el apetito de riesgo de la organización frente a la IA?",
          ayuda:
            "Criterios explícitos sobre qué decisiones puede automatizar la IA y cuáles requieren siempre a una persona.",
          peso: 2,
          referencia: "NIST AI RMF — Función GOVERN 1.3",
          brecha:
            "Definir por escrito los umbrales de riesgo aceptable y la lista de decisiones que nunca se automatizan sin revisión humana.",
        },
      ],
    },
    {
      id: "inventario",
      nombre: "Inventario y clasificación de casos de uso",
      descripcion:
        "Saber qué IA está en uso hoy, quién la usa y cuánto riesgo carga cada caso.",
      preguntas: [
        {
          id: "ia-inv-1",
          texto:
            "¿Existe un inventario actualizado de los sistemas y usos de IA en la organización?",
          ayuda:
            "Incluye herramientas compradas, modelos propios, asistentes integrados en el software que ya usan y uso individual de herramientas públicas.",
          peso: 3,
          referencia: "ISO/IEC 42001 Anexo A.4 — Recursos del sistema de IA",
          brecha:
            "Levantar un inventario de casos de uso de IA con responsable, propósito, datos que consume, proveedor y criticidad. Una planilla basta para empezar.",
        },
        {
          id: "ia-inv-2",
          texto:
            "¿Cada caso de uso está clasificado según su nivel de riesgo antes de entrar en operación?",
          ayuda:
            "Un triage que distinga entre un resumidor de textos internos y un modelo que influye en decisiones sobre personas.",
          peso: 3,
          referencia: "EU AI Act, Título III — Clasificación por riesgo",
          brecha:
            "Adoptar una matriz de clasificación de riesgo (mínimo, limitado, alto) y hacerla obligatoria como puerta de entrada a producción.",
        },
        {
          id: "ia-inv-3",
          texto:
            "¿Hay un proceso definido de aprobación para incorporar un nuevo caso de uso de IA?",
          ayuda:
            "Un flujo con solicitante, evaluación y aprobación registrada, no una decisión de pasillo.",
          peso: 2,
          referencia: "ISO/IEC 42001 §8.1 — Planificación y control operacional",
          brecha:
            "Definir un flujo de admisión de casos de uso con criterios de aprobación y registro de la decisión.",
        },
      ],
    },
    {
      id: "riesgos",
      nombre: "Gestión de riesgos y evaluación de impacto",
      descripcion:
        "Identificar sesgos, errores y daños posibles antes de que ocurran, no después del incidente.",
      preguntas: [
        {
          id: "ia-rie-1",
          texto:
            "¿Se realiza una evaluación de impacto antes de desplegar un sistema de IA de alto riesgo?",
          ayuda:
            "Un análisis documentado de a quién puede afectar el sistema, cómo y qué se hace para evitarlo.",
          peso: 3,
          referencia: "ISO/IEC 42001 §6.1.4 — Evaluación de impacto del sistema de IA",
          brecha:
            "Implementar una evaluación de impacto de IA obligatoria para todo caso clasificado como alto riesgo, con firma del responsable del proceso.",
        },
        {
          id: "ia-rie-2",
          texto: "¿Se prueban los modelos contra sesgos y resultados discriminatorios?",
          ayuda:
            "Pruebas sobre grupos distintos de personas o casos, con resultados registrados.",
          peso: 2,
          referencia: "NIST AI RMF — Función MEASURE 2.11",
          brecha:
            "Incorporar pruebas de equidad y casos adversos al plan de pruebas, con criterios de aceptación definidos antes del despliegue.",
        },
        {
          id: "ia-rie-3",
          texto:
            "¿Existen controles sobre qué información se puede entregar a modelos de IA externos?",
          ayuda:
            "Controles reales: bloqueos, clasificación de datos, entornos aislados o acuerdos con el proveedor, no solo una recomendación verbal.",
          peso: 3,
          referencia: "ISO/IEC 42001 Anexo A.7 — Datos para sistemas de IA",
          brecha:
            "Clasificar la información y definir qué categorías nunca salen hacia un modelo externo; respaldarlo con controles técnicos, no solo con instrucciones.",
        },
      ],
    },
    {
      id: "transparencia",
      nombre: "Transparencia y supervisión humana",
      descripcion:
        "Que se pueda explicar qué hizo el sistema, por qué, y quién puede revertirlo.",
      preguntas: [
        {
          id: "ia-tra-1",
          texto:
            "¿Se informa a las personas cuando interactúan con un sistema de IA o cuando este influye en una decisión que las afecta?",
          ayuda:
            "Avisos visibles en la interfaz o en la comunicación, no una mención enterrada en los términos de uso.",
          peso: 2,
          referencia: "EU AI Act art. 50 — Obligaciones de transparencia",
          brecha:
            "Agregar avisos de interacción con IA en los puntos de contacto y explicitar en qué decisiones participa un sistema automatizado.",
        },
        {
          id: "ia-tra-2",
          texto:
            "¿Hay supervisión humana efectiva sobre las decisiones relevantes que toma o sugiere la IA?",
          ayuda:
            "Una persona con autoridad, tiempo y contexto real para revisar y revertir, no un clic de confirmación automático.",
          peso: 3,
          referencia: "ISO/IEC 42001 Anexo A.9 — Uso responsable",
          brecha:
            "Definir puntos de control humano en el flujo, con capacidad efectiva de revertir la decisión y registro de las intervenciones.",
        },
        {
          id: "ia-tra-3",
          texto:
            "¿Se documenta cómo funciona cada sistema de IA relevante y con qué datos fue construido o configurado?",
          ayuda:
            "Ficha técnica del sistema: propósito, datos, límites conocidos, versión y responsable.",
          peso: 2,
          referencia: "NIST AI RMF — Función MAP 3.1",
          brecha:
            "Crear una ficha técnica por sistema de IA (propósito, datos, limitaciones, versión, responsable) y mantenerla junto al inventario.",
        },
      ],
    },
    {
      id: "operacion",
      nombre: "Operación, proveedores y competencias",
      descripcion:
        "Lo que pasa después del lanzamiento: monitoreo, terceros y personas capacitadas.",
      preguntas: [
        {
          id: "ia-ope-1",
          texto:
            "¿Se monitorea el desempeño de los sistemas de IA en producción y su degradación en el tiempo?",
          ayuda:
            "Métricas de calidad revisadas periódicamente, con umbral definido para intervenir.",
          peso: 2,
          referencia: "ISO/IEC 42001 §9.1 — Seguimiento y medición",
          brecha:
            "Definir métricas de calidad por sistema, con revisión periódica y umbral de alerta que gatille intervención.",
        },
        {
          id: "ia-ope-2",
          texto:
            "¿Se evalúa a los proveedores de IA en materia de seguridad, uso de datos y cumplimiento?",
          ayuda:
            "Debida diligencia documentada y cláusulas contractuales sobre uso de tus datos para entrenamiento.",
          peso: 3,
          referencia: "ISO/IEC 42001 Anexo A.10 — Terceros y proveedores",
          brecha:
            "Incorporar un cuestionario de evaluación de proveedores de IA y cláusulas sobre uso de datos, subprocesadores y localización de la información.",
        },
        {
          id: "ia-ope-3",
          texto:
            "¿El personal recibe formación sobre uso responsable de IA acorde a su rol?",
          ayuda:
            "Capacitación diferenciada: no es lo mismo lo que necesita saber la dirección que quien desarrolla o quien atiende clientes.",
          peso: 2,
          referencia: "ISO/IEC 42001 §7.2 — Competencia",
          brecha:
            "Definir un plan de formación por rol, con contenidos mínimos y registro de asistencia como evidencia de diligencia.",
        },
      ],
    },
  ],
};
