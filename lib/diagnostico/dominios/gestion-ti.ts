import type { Dominio, Escala } from "../tipos";

const ESCALA: Escala = [
  "No existe",
  "Informal, sin registro",
  "Definido en papel",
  "Aplicado de forma consistente",
  "Medido y en mejora continua",
];

export const gestionTI: Dominio = {
  slug: "gestion-ti",
  nombre: "Gestión de Servicios de TI",
  nombreCorto: "Gestión de TI",
  resumen:
    "Evalúa la operación diaria: cómo se atienden incidentes, cambios y solicitudes, y si el servicio se puede sostener.",
  descripcion:
    "Aquí se juega la percepción real del área de TI. Este diagnóstico revisa las prácticas de ITIL 4 e ISO/IEC 20000 que sostienen la operación cotidiana: atención, cambios, problemas, conocimiento y mejora.",
  marcos: ["ITIL 4", "ISO/IEC 20000-1:2018", "COBIT 2019 (dominio DSS)"],
  escala: ESCALA,
  impacto:
    "Una operación sin práctica formal se reconoce por tres señales: los mismos incidentes se repiten, los cambios se hacen de noche y sin aviso, y nadie sabe cuánto tarda realmente en resolverse un ticket.",
  dimensiones: [
    {
      id: "soporte",
      nombre: "Mesa de servicio e incidentes",
      descripcion:
        "El punto de contacto con los usuarios y la forma de restablecer el servicio.",
      preguntas: [
        {
          id: "mti-sop-1",
          texto:
            "¿Existe un punto único de contacto donde se registran todas las solicitudes e incidentes?",
          ayuda:
            "Todo entra por el mismo canal y queda registrado, incluso lo que llega por teléfono o mensaje directo.",
          peso: 3,
          referencia: "ITIL 4 — Práctica: Service Desk",
          brecha:
            "Habilitar un punto único de contacto y una regla firme: lo que no está registrado, no existe. Registrar también lo que llega por canales informales.",
        },
        {
          id: "mti-sop-2",
          texto:
            "¿Los incidentes se clasifican por prioridad según impacto y urgencia definidos?",
          ayuda:
            "Una matriz de prioridad conocida, no el criterio de quien recibe el ticket.",
          peso: 2,
          referencia: "ITIL 4 — Práctica: Incident Management",
          brecha:
            "Definir una matriz de impacto y urgencia con tiempos objetivo por prioridad, y aplicarla a todo ticket desde su registro.",
        },
        {
          id: "mti-sop-3",
          texto:
            "¿Existe un procedimiento de escalamiento definido para incidentes mayores?",
          ayuda:
            "Se sabe a quién llamar, en qué plazo y cómo se comunica a los usuarios afectados.",
          peso: 2,
          referencia: "ISO/IEC 20000-1 §8.6.2 — Gestión de incidentes",
          brecha:
            "Documentar el procedimiento de incidente mayor: criterios de activación, roles, cadena de escalamiento y plan de comunicación.",
        },
      ],
    },
    {
      id: "cambios",
      nombre: "Solicitudes, cambios y despliegues",
      descripcion:
        "Cómo entra una modificación al ambiente productivo sin romperlo.",
      preguntas: [
        {
          id: "mti-cam-1",
          texto:
            "¿Todo cambio en producción pasa por un proceso de autorización registrado?",
          ayuda:
            "Solicitud, evaluación de riesgo, aprobación y registro; incluye cambios de configuración y parches.",
          peso: 3,
          referencia: "ITIL 4 — Práctica: Change Enablement",
          brecha:
            "Instalar un proceso de autorización de cambios con evaluación de riesgo, ventana de ejecución y registro; sin excepción para cambios urgentes, que se registran después.",
        },
        {
          id: "mti-cam-2",
          texto: "¿Los cambios cuentan con plan de reversión antes de ejecutarse?",
          ayuda:
            "Un plan escrito de cómo volver atrás y quién decide hacerlo.",
          peso: 2,
          referencia: "ISO/IEC 20000-1 §8.5.1 — Gestión de cambios",
          brecha:
            "Exigir plan de reversión y criterio de decisión (quién y cuándo aborta) como requisito de aprobación para cambios de riesgo medio y alto.",
        },
        {
          id: "mti-cam-3",
          texto:
            "¿Las solicitudes de servicio frecuentes tienen un flujo estandarizado y tiempos comprometidos?",
          ayuda:
            "Altas de usuario, accesos, equipos: con catálogo, flujo y plazo conocido.",
          peso: 2,
          referencia: "ITIL 4 — Práctica: Service Request Management",
          brecha:
            "Publicar un catálogo de solicitudes frecuentes con flujo de aprobación y tiempo comprometido para cada una.",
        },
      ],
    },
    {
      id: "problemas",
      nombre: "Problemas, disponibilidad y capacidad",
      descripcion:
        "Atacar la causa y no solo el síntoma, y anticipar la caída antes de que ocurra.",
      preguntas: [
        {
          id: "mti-pro-1",
          texto:
            "¿Se investigan las causas raíz de los incidentes recurrentes o de alto impacto?",
          ayuda:
            "Un análisis documentado que termina en una acción correctiva con responsable y plazo.",
          peso: 3,
          referencia: "ITIL 4 — Práctica: Problem Management",
          brecha:
            "Instalar análisis de causa raíz obligatorio para incidentes mayores y recurrentes, con acción correctiva, responsable y verificación de cierre.",
        },
        {
          id: "mti-pro-2",
          texto:
            "¿Se monitorea la disponibilidad de los servicios críticos con alertas automáticas?",
          ayuda:
            "El sistema avisa antes que el usuario. Con umbrales definidos y alguien que recibe la alerta.",
          peso: 3,
          referencia: "ITIL 4 — Práctica: Monitoring and Event Management",
          brecha:
            "Implementar monitoreo con alertas sobre los servicios críticos, con umbrales, destinatario definido y procedimiento de respuesta.",
        },
        {
          id: "mti-pro-3",
          texto:
            "¿Se planifica la capacidad (almacenamiento, licencias, cómputo) con anticipación?",
          ayuda:
            "Proyección basada en consumo histórico, no compras de emergencia cuando algo se llena.",
          peso: 2,
          referencia: "ITIL 4 — Práctica: Capacity and Performance Management",
          brecha:
            "Proyectar consumo de capacidad y licencias con al menos dos trimestres de anticipación y llevarlo al ciclo presupuestario.",
        },
      ],
    },
    {
      id: "activos",
      nombre: "Configuración, activos y conocimiento",
      descripcion:
        "Saber qué hay, de quién es y dónde está escrito cómo se opera.",
      preguntas: [
        {
          id: "mti-act-1",
          texto:
            "¿Existe un inventario actualizado de activos de TI (equipos, licencias, servicios en la nube)?",
          ayuda:
            "Actualizado y conciliado con la realidad, no una planilla de hace dos años.",
          peso: 3,
          referencia: "ITIL 4 — Práctica: IT Asset Management",
          brecha:
            "Levantar el inventario de activos con responsable, ubicación, licencia y fecha de término; definir ciclo de conciliación periódica.",
        },
        {
          id: "mti-act-2",
          texto:
            "¿Están documentadas las relaciones y dependencias entre los componentes que sostienen cada servicio?",
          ayuda:
            "Se puede responder qué se cae si un servidor, un enlace o un servicio externo falla.",
          peso: 2,
          referencia: "ITIL 4 — Práctica: Service Configuration Management",
          brecha:
            "Mapear las dependencias de los servicios críticos (aplicación, base de datos, red, proveedores) y mantener el mapa junto al inventario.",
        },
        {
          id: "mti-act-3",
          texto:
            "¿Existe una base de conocimiento con procedimientos y soluciones conocidas?",
          ayuda:
            "Accesible al equipo y a los usuarios cuando corresponde, y usada de verdad.",
          peso: 2,
          referencia: "ITIL 4 — Práctica: Knowledge Management",
          brecha:
            "Crear una base de conocimiento partiendo por los 10 incidentes más frecuentes, con la regla de documentar cada solución nueva al cerrarla.",
        },
      ],
    },
    {
      id: "mejora",
      nombre: "Niveles de servicio y mejora continua",
      descripcion:
        "Compromisos explícitos con el negocio y un ciclo que corrige lo que no funciona.",
      preguntas: [
        {
          id: "mti-mej-1",
          texto:
            "¿Existen acuerdos de nivel de servicio (SLA) acordados con las áreas usuarias?",
          ayuda:
            "Compromisos conversados y aceptados por el negocio, no fijados unilateralmente por TI.",
          peso: 3,
          referencia: "ITIL 4 — Práctica: Service Level Management",
          brecha:
            "Acordar niveles de servicio por servicio crítico con el área usuaria, en lenguaje de negocio y con métrica verificable.",
        },
        {
          id: "mti-mej-2",
          texto:
            "¿Se mide la satisfacción de los usuarios con el servicio de TI?",
          ayuda:
            "Encuesta al cierre del ticket o medición periódica, con resultados que se revisan.",
          peso: 2,
          referencia: "ISO/IEC 20000-1 §9.1 — Seguimiento y medición",
          brecha:
            "Activar una encuesta breve al cierre de tickets y revisar el resultado mensualmente junto con los indicadores operacionales.",
        },
        {
          id: "mti-mej-3",
          texto:
            "¿Existe un registro de mejoras con responsables y seguimiento de su implementación?",
          ayuda:
            "Las mejoras identificadas se registran, se priorizan y alguien responde por ellas.",
          peso: 2,
          referencia: "ITIL 4 — Práctica: Continual Improvement",
          brecha:
            "Abrir un registro de mejora continua alimentado por incidentes, encuestas y auditorías, revisado en una reunión mensual fija.",
        },
      ],
    },
  ],
};
