import type { Dominio, Escala } from "../tipos";

const ESCALA: Escala = [
  "No existe",
  "Informal, depende de personas",
  "Definido en papel",
  "Aplicado de forma consistente",
  "Medido y en mejora continua",
];

export const gobiernoTI: Dominio = {
  slug: "gobierno-ti",
  nombre: "Gobierno de Tecnologías de la Información",
  nombreCorto: "Gobierno de TI",
  resumen:
    "Evalúa si la dirección realmente dirige la TI: quién decide, con qué criterio y cómo se controla el resultado.",
  descripcion:
    "El gobierno de TI no es administrar servidores: es cómo el directorio y la alta dirección evalúan, orientan y supervisan el uso de la tecnología. Este diagnóstico revisa las cinco áreas donde ese control se gana o se pierde.",
  marcos: ["ISO/IEC 38500:2015", "COBIT 2019", "ISO/IEC 27014"],
  escala: ESCALA,
  impacto:
    "Cuando el gobierno de TI es débil, el síntoma es siempre el mismo: se invierte sin criterio comparable, los proyectos se justifican por urgencia y nadie puede decir qué valor entregó el presupuesto del año pasado.",
  dimensiones: [
    {
      id: "direccion",
      nombre: "Dirección y estructura de gobierno",
      descripcion:
        "El órgano que decide sobre tecnología, su mandato y sus reglas escritas.",
      preguntas: [
        {
          id: "gti-dir-1",
          texto:
            "¿Existe un comité de TI o instancia formal donde la dirección decide sobre tecnología?",
          ayuda:
            "Con mandato escrito, participantes definidos, periodicidad y actas de las decisiones.",
          peso: 3,
          referencia: "ISO/IEC 38500 — Principio 1: Responsabilidad",
          brecha:
            "Constituir un comité de TI con acta de mandato, integrantes, frecuencia mínima y registro de decisiones y responsables.",
        },
        {
          id: "gti-dir-2",
          texto:
            "¿Están documentadas las políticas que rigen el uso de la tecnología en la organización?",
          ayuda:
            "Política de uso aceptable, de seguridad, de adquisiciones tecnológicas y de datos, vigentes y comunicadas.",
          peso: 2,
          referencia: "COBIT 2019 — EDM01 Marco de gobierno",
          brecha:
            "Levantar el mapa de políticas de TI: cuáles existen, cuáles están vencidas y cuáles faltan; fijar dueño y ciclo de revisión para cada una.",
        },
        {
          id: "gti-dir-3",
          texto:
            "¿Está clara la separación entre las decisiones de gobierno (dirigir) y las de gestión (ejecutar)?",
          ayuda:
            "Se sabe qué decide el directorio o la gerencia general y qué resuelve el área de TI por sí sola.",
          peso: 2,
          referencia: "COBIT 2019 — Distinción gobierno / gestión",
          brecha:
            "Definir una matriz de decisiones (quién propone, quién decide, quién es informado) para inversiones, riesgos y cambios mayores de TI.",
        },
      ],
    },
    {
      id: "alineamiento",
      nombre: "Alineamiento estratégico",
      descripcion:
        "La tecnología persigue los objetivos del negocio, no una agenda propia.",
      preguntas: [
        {
          id: "gti-ali-1",
          texto:
            "¿Existe un plan de TI vigente y explícitamente derivado de la estrategia del negocio?",
          ayuda:
            "Un plan con horizonte de al menos un año donde cada iniciativa se conecta con un objetivo de la organización.",
          peso: 3,
          referencia: "ISO/IEC 38500 — Principio 2: Estrategia",
          brecha:
            "Construir un plan de TI que trace cada iniciativa contra un objetivo estratégico, con hitos y responsables.",
        },
        {
          id: "gti-ali-2",
          texto:
            "¿Se gestiona un portafolio único de iniciativas y proyectos tecnológicos?",
          ayuda:
            "Una vista consolidada con estado, costo, responsable y avance de todo lo que está en curso.",
          peso: 2,
          referencia: "COBIT 2019 — APO05 Gestión del portafolio",
          brecha:
            "Consolidar todas las iniciativas de TI en un portafolio único con estado, costo comprometido y responsable, revisado en cada comité.",
        },
        {
          id: "gti-ali-3",
          texto:
            "¿Se priorizan las inversiones tecnológicas con criterios definidos y comparables?",
          ayuda:
            "Criterios explícitos de valor, riesgo y urgencia, aplicados a todas las solicitudes por igual.",
          peso: 2,
          referencia: "ISO/IEC 38500 — Principio 3: Adquisición",
          brecha:
            "Adoptar un modelo simple de priorización (valor, riesgo, esfuerzo) y aplicarlo a toda solicitud antes de comprometer presupuesto.",
        },
      ],
    },
    {
      id: "valor",
      nombre: "Entrega de valor y desempeño",
      descripcion:
        "Qué devolvió la inversión en tecnología y cómo se demuestra.",
      preguntas: [
        {
          id: "gti-val-1",
          texto:
            "¿Cada inversión relevante de TI cuenta con un caso de negocio con beneficios esperados?",
          ayuda:
            "Beneficios cuantificados y un responsable del negocio que se compromete con ellos.",
          peso: 2,
          referencia: "COBIT 2019 — EDM02 Entrega de beneficios",
          brecha:
            "Exigir caso de negocio con beneficios medibles y dueño en el área usuaria para toda inversión sobre un monto definido.",
        },
        {
          id: "gti-val-2",
          texto:
            "¿Se mide el desempeño de TI con indicadores reportados periódicamente a la dirección?",
          ayuda:
            "Un tablero con pocos indicadores estables: disponibilidad, cumplimiento de compromisos, incidentes, costo.",
          peso: 3,
          referencia: "ISO/IEC 38500 — Principio 4: Desempeño",
          brecha:
            "Definir un tablero de 6 a 8 indicadores de TI y reportarlo en cada comité, con lectura y compromiso de acción, no solo cifras.",
        },
        {
          id: "gti-val-3",
          texto:
            "¿Se verifica después del cierre si los beneficios prometidos se cumplieron?",
          ayuda:
            "Una revisión posterior al proyecto que compara lo prometido con lo realmente obtenido.",
          peso: 2,
          referencia: "COBIT 2019 — EDM02.04 Supervisión de beneficios",
          brecha:
            "Instalar una revisión posterior a la implementación (3 a 6 meses después) que contraste beneficios comprometidos y obtenidos.",
        },
      ],
    },
    {
      id: "riesgo",
      nombre: "Riesgo y conformidad",
      descripcion:
        "Los riesgos tecnológicos se identifican, se deciden y se supervisan como cualquier otro riesgo del negocio.",
      preguntas: [
        {
          id: "gti-rie-1",
          texto:
            "¿Existe un registro de riesgos de TI con responsables y planes de tratamiento?",
          ayuda:
            "Un registro vivo, revisado periódicamente, no un documento hecho una vez para una auditoría.",
          peso: 3,
          referencia: "COBIT 2019 — EDM03 Optimización del riesgo",
          brecha:
            "Levantar un registro de riesgos de TI con probabilidad, impacto, dueño y plan de tratamiento; revisarlo en cada comité.",
        },
        {
          id: "gti-rie-2",
          texto:
            "¿La organización identifica y monitorea las obligaciones legales y regulatorias que afectan a TI?",
          ayuda:
            "Protección de datos, retención de información, requisitos sectoriales y contractuales.",
          peso: 3,
          referencia: "ISO/IEC 38500 — Principio 6: Conformidad",
          brecha:
            "Construir una matriz de obligaciones legales aplicables a TI, con responsable de cumplimiento y evidencia asociada a cada una.",
        },
        {
          id: "gti-rie-3",
          texto:
            "¿Existen planes de continuidad y recuperación probados para los servicios críticos?",
          ayuda:
            "Probados de verdad: con fecha del último ejercicio y resultado documentado.",
          peso: 3,
          referencia: "COBIT 2019 — DSS04 Gestión de la continuidad",
          brecha:
            "Definir tiempos objetivo de recuperación por servicio crítico y ejecutar al menos una prueba anual de restauración con informe de resultados.",
        },
      ],
    },
    {
      id: "recursos",
      nombre: "Recursos, personas y proveedores",
      descripcion:
        "Con qué presupuesto, qué capacidades internas y qué terceros se sostiene la operación.",
      preguntas: [
        {
          id: "gti-rec-1",
          texto:
            "¿El presupuesto de TI está estructurado y se controla su ejecución durante el año?",
          ayuda:
            "Separación entre operación e inversión, con seguimiento periódico de la ejecución.",
          peso: 2,
          referencia: "COBIT 2019 — APO06 Gestión del presupuesto y costos",
          brecha:
            "Estructurar el presupuesto de TI separando operación e inversión, con control mensual de ejecución y desviaciones explicadas.",
        },
        {
          id: "gti-rec-2",
          texto:
            "¿Están identificadas las capacidades críticas y las dependencias de personas clave?",
          ayuda:
            "Se sabe qué servicios se caen si una persona específica no está disponible.",
          peso: 2,
          referencia: "ISO/IEC 38500 — Principio 5: Comportamiento humano",
          brecha:
            "Mapear las dependencias de personas clave por servicio y definir respaldo, documentación mínima y plan de sucesión.",
        },
        {
          id: "gti-rec-3",
          texto:
            "¿Se gestionan los contratos con proveedores tecnológicos con niveles de servicio y evaluación periódica?",
          ayuda:
            "Contratos vigentes, con niveles de servicio acordados y una evaluación formal de desempeño.",
          peso: 3,
          referencia: "COBIT 2019 — APO10 Gestión de proveedores",
          brecha:
            "Inventariar los contratos tecnológicos con vencimiento, nivel de servicio comprometido y responsable interno; evaluar desempeño al menos una vez al año.",
        },
      ],
    },
  ],
};
