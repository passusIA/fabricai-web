import type { Dominio, Escala } from "../tipos";

const ESCALA: Escala = [
  "No implementado",
  "En análisis",
  "Parcialmente implementado",
  "Implementado",
  "Implementado y verificado",
];

export const proteccionDatosCL: Dominio = {
  slug: "proteccion-datos-cl",
  nombre: "Ley 21.719 de Protección de Datos Personales (Chile)",
  nombreCorto: "Protección de datos · Chile",
  resumen:
    "Evalúa la preparación de tu organización frente a la nueva ley chilena de datos personales y su fiscalización.",
  descripcion:
    "La Ley 21.719 reemplaza el régimen de la Ley 19.628, crea la Agencia de Protección de Datos Personales y habilita sanciones que antes no existían. Su plena vigencia comienza el 1 de diciembre de 2026. Este diagnóstico revisa las cinco áreas donde se concentran las obligaciones exigibles.",
  marcos: [
    "Ley 21.719 (Chile)",
    "Ley 19.628 (régimen previo)",
    "ISO/IEC 27701",
    "GDPR (referencia comparada)",
  ],
  escala: ESCALA,
  impacto:
    "El régimen sancionatorio distingue infracciones leves, graves y gravísimas, con multas que pueden llegar a 20.000 UTM y, en los casos más severos, suspensión de las operaciones de tratamiento. Contar con un modelo de prevención de infracciones acreditado opera como circunstancia atenuante.",
  advertencia:
    "Este simulador entrega una estimación referencial de preparación. No constituye asesoría legal ni sustituye una revisión de cumplimiento realizada por un profesional habilitado.",
  dimensiones: [
    {
      id: "gobernanza",
      nombre: "Gobernanza y responsabilidad proactiva",
      descripcion:
        "Quién responde por los datos personales y con qué evidencia se demuestra la diligencia.",
      preguntas: [
        {
          id: "pdp-gob-1",
          texto:
            "¿Existe una política de privacidad y protección de datos personales aprobada y vigente?",
          ayuda:
            "Un documento interno que define principios, roles, procedimientos y responsabilidades sobre datos personales.",
          peso: 3,
          referencia: "Ley 21.719 — Principio de responsabilidad",
          brecha:
            "Aprobar una política interna de protección de datos que cubra principios, roles, procedimientos de derechos, seguridad y gestión de brechas.",
        },
        {
          id: "pdp-gob-2",
          texto:
            "¿Hay una persona o área designada como responsable de la protección de datos personales?",
          ayuda:
            "Un delegado o encargado con funciones escritas, canal de contacto publicado y acceso a la dirección.",
          peso: 3,
          referencia: "Ley 21.719 — Delegado de protección de datos personales",
          brecha:
            "Designar formalmente al responsable o delegado de protección de datos, publicar su canal de contacto y dotarlo de tiempo y acceso a la alta dirección.",
        },
        {
          id: "pdp-gob-3",
          texto:
            "¿La organización cuenta con un modelo de prevención de infracciones en materia de datos personales?",
          ayuda:
            "Controles, capacitación, canal de denuncias y supervisión documentada; opera como atenuante frente a la Agencia.",
          peso: 2,
          referencia: "Ley 21.719 — Modelo de prevención de infracciones",
          brecha:
            "Estructurar un modelo de prevención con identificación de riesgos, controles, capacitación, canal de reportes y supervisión periódica documentada.",
        },
      ],
    },
    {
      id: "licitud",
      nombre: "Bases de licitud y consentimiento",
      descripcion:
        "Por qué la organización está autorizada a tratar cada dato personal.",
      preguntas: [
        {
          id: "pdp-lic-1",
          texto:
            "¿Está identificada la base de licitud que habilita cada tratamiento de datos personales?",
          ayuda:
            "Consentimiento, ejecución de contrato, obligación legal, interés legítimo u otra base prevista en la ley, documentada por tratamiento.",
          peso: 3,
          referencia: "Ley 21.719 — Licitud del tratamiento",
          brecha:
            "Documentar la base de licitud de cada tratamiento y revisar en particular aquellos que hoy se sostienen solo en un consentimiento genérico.",
        },
        {
          id: "pdp-lic-2",
          texto:
            "¿El consentimiento se obtiene de forma libre, informada, específica e inequívoca, y queda registrado?",
          ayuda:
            "Sin casillas premarcadas ni consentimientos agrupados; con registro de cuándo, cómo y para qué se otorgó.",
          peso: 3,
          referencia: "Ley 21.719 — Requisitos del consentimiento",
          brecha:
            "Rediseñar los puntos de captura de consentimiento (formularios, web, contratos) para que sea específico y revocable, y registrar la evidencia de cada otorgamiento.",
        },
        {
          id: "pdp-lic-3",
          texto:
            "¿Los datos sensibles y los de niñas, niños y adolescentes reciben tratamiento diferenciado y reforzado?",
          ayuda:
            "Salud, origen étnico, biometría, situación socioeconómica, entre otros; con controles adicionales y base de licitud reforzada.",
          peso: 3,
          referencia: "Ley 21.719 — Categorías especiales de datos",
          brecha:
            "Identificar dónde se tratan datos sensibles y de menores de edad, y aplicar controles reforzados de acceso, cifrado y base de licitud específica.",
        },
      ],
    },
    {
      id: "registro",
      nombre: "Registro de tratamientos e información al titular",
      descripcion:
        "Saber qué datos se tratan y decírselo a las personas de forma comprensible.",
      preguntas: [
        {
          id: "pdp-reg-1",
          texto:
            "¿Existe un registro de las actividades de tratamiento de datos personales?",
          ayuda:
            "Con finalidad, categorías de datos y titulares, destinatarios, plazos de conservación y medidas de seguridad.",
          peso: 3,
          referencia: "Ley 21.719 — Registro de actividades de tratamiento",
          brecha:
            "Levantar el registro de actividades de tratamiento por proceso de negocio: finalidad, datos, titulares, destinatarios, plazo de conservación y medidas de seguridad.",
        },
        {
          id: "pdp-reg-2",
          texto:
            "¿Los avisos de privacidad informan de forma clara la finalidad, el destinatario y los derechos del titular?",
          ayuda:
            "En la web, en los formularios y en el momento de la recolección, en lenguaje comprensible.",
          peso: 2,
          referencia: "Ley 21.719 — Principio de transparencia e información",
          brecha:
            "Actualizar los avisos de privacidad de todos los puntos de recolección, con finalidad, base de licitud, destinatarios, plazos y canal para ejercer derechos.",
        },
        {
          id: "pdp-reg-3",
          texto:
            "¿Se realizan evaluaciones de impacto en los tratamientos de alto riesgo?",
          ayuda:
            "Tratamientos masivos, de datos sensibles, con perfilamiento o decisiones automatizadas sobre personas.",
          peso: 2,
          referencia: "Ley 21.719 — Evaluación de impacto en protección de datos",
          brecha:
            "Definir el criterio de alto riesgo y ejecutar evaluaciones de impacto documentadas para esos tratamientos antes de iniciarlos.",
        },
      ],
    },
    {
      id: "derechos",
      nombre: "Derechos de los titulares (ARCOP)",
      descripcion:
        "Poder responder en plazo cuando una persona ejerce sus derechos.",
      preguntas: [
        {
          id: "pdp-der-1",
          texto:
            "¿Existe un canal formal y publicado para que los titulares ejerciten sus derechos?",
          ayuda:
            "Acceso, rectificación, cancelación o supresión, oposición, portabilidad y bloqueo, con canal visible y accesible.",
          peso: 3,
          referencia: "Ley 21.719 — Derechos del titular",
          brecha:
            "Habilitar y publicar un canal de ejercicio de derechos con formulario, acuse de recibo y verificación de identidad del solicitante.",
        },
        {
          id: "pdp-der-2",
          texto:
            "¿Hay un procedimiento interno con plazos definidos para responder esas solicitudes?",
          ayuda:
            "Con responsable, plazo, criterios de respuesta y registro de cada caso.",
          peso: 3,
          referencia: "Ley 21.719 — Procedimiento de ejercicio de derechos",
          brecha:
            "Documentar el procedimiento de atención de solicitudes con responsable, plazo máximo de respuesta, criterios de denegación y registro auditable.",
        },
        {
          id: "pdp-der-3",
          texto:
            "¿Los sistemas permiten localizar, exportar y eliminar los datos de una persona determinada?",
          ayuda:
            "Capacidad técnica real en todos los repositorios, incluidos respaldos y planillas locales.",
          peso: 2,
          referencia: "Ley 21.719 — Derechos de supresión y portabilidad",
          brecha:
            "Mapear todos los repositorios donde vive un dato personal y habilitar la capacidad de buscarlo, exportarlo en formato estructurado y eliminarlo.",
        },
      ],
    },
    {
      id: "seguridad",
      nombre: "Seguridad, brechas y transferencias",
      descripcion:
        "Proteger los datos, avisar cuando falla y controlar hacia dónde salen.",
      preguntas: [
        {
          id: "pdp-seg-1",
          texto:
            "¿Se aplican medidas de seguridad proporcionales al riesgo de los datos tratados?",
          ayuda:
            "Control de acceso, cifrado, respaldo, registro de actividad y revisión periódica de los controles.",
          peso: 3,
          referencia: "Ley 21.719 — Principio de seguridad",
          brecha:
            "Definir un estándar de seguridad por nivel de sensibilidad (acceso, cifrado, respaldo, trazabilidad) y verificar su aplicación en los sistemas que tratan datos personales.",
        },
        {
          id: "pdp-seg-2",
          texto:
            "¿Existe un procedimiento de detección y notificación de brechas de datos personales?",
          ayuda:
            "Con criterios para calificar la brecha, plazos, contenido del aviso a la Agencia y a los titulares afectados, y registro de incidentes.",
          peso: 3,
          referencia: "Ley 21.719 — Notificación de vulneraciones de seguridad",
          brecha:
            "Documentar el procedimiento de gestión de brechas: detección, evaluación, notificación a la Agencia y a los titulares, y registro de todos los incidentes aunque no sean notificables.",
        },
        {
          id: "pdp-seg-3",
          texto:
            "¿Los encargados de tratamiento y las transferencias internacionales están cubiertos por contratos o garantías adecuadas?",
          ayuda:
            "Contratos con proveedores que tratan datos por cuenta de la organización, y garantías para datos que salen del país o se alojan en el extranjero.",
          peso: 3,
          referencia: "Ley 21.719 — Encargados y transferencia internacional",
          brecha:
            "Inventariar proveedores que tratan datos personales y suscribir acuerdos de encargo; para transferencias internacionales, adoptar cláusulas contractuales u otra garantía admitida.",
        },
      ],
    },
  ],
};
