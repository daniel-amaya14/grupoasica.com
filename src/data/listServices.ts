export const SERVICIOS = Object.freeze({
  gobierno: {
    title: 'Gobierno',
    href: '/servicios/gobierno',
  },
  corporacion: {
    title: 'Corporación',
    href: '/servicios/corporacion',
  },
  pymes: {
    title: 'PYMES',
    href: '/servicios/pymes',
  },
  banca: {
    title: 'Banca y Finanzas',
    href: '/servicios/banca-finanzas',
  },
  salud: {
    title: 'Salud',
    href: '/servicios/salud',
  },
  educacion: {
    title: 'Educación',
    href: '/servicios/educacion',
  },
});

export const SOLUCIONES = Object.freeze({
  digitalizar: {
    title: 'Digitalizar',
    description: 'Recupera y sanear documentos de manera digital.',
    href: '/aprotecsa',
  },

  automatizacion: {
    title: 'Automatización',
    description: 'Elimina burocracia con procesos eficientes.',
    href: '/freebalance',
  },

  proteccion_de_activos: {
    title: 'Protección de Activos',
    description:
      'Soluciones de ciberseguridad para detener la exfiltración de datos.',
    href: '/seguridad',
  },

  endpoint_detection_and_response: {
    title: 'Endpoint Detection and Response',
    description: 'Detección y respuesta avanzada contra todo tipo de Malware.',
    href: '/huntress',
  },

  transformacion: {
    title: 'Transformación',
    description:
      'Eficiencia en procesos administrativos y contables para participación ciudadana.',
    href: '/freebalance',
  },

  consultoria_ti: {
    title: 'Consultoría IT',
    description: 'Contrata ingenieros capacitados en Informática.',
    href: '/consultoria',
  },

  analitica_avanzada: {
    title: 'Analítica Avanzada',
    description: 'Aplica Inteligencia Artificial a análisis de datos.',
    href: '/sas',
  },

  facturacion: {
    title: 'Facturación',
    description: 'Gestión eficiente y amigable de inventarios y facturas.',
    href: '/psk',
  },

  inventario: {
    title: 'Inventario',
    description: 'Gestión eficiente y amigable de inventarios y facturas.',
    href: '/psk',
  },

  contabilidad: {
    title: 'Contabilidad',
    description: 'Gestión eficiente, asequible y amigable de contabilidad.',
    href: '/psk',
  },

  proteccion_de_hardware: {
    title: 'Protección de Hardware',
    description: 'Controla el acceso indebido a activos dentro de tu red.',
    href: '/jumpcloud',
  },

  identidad_digital: {
    title: 'Identidad Digital',
    description: 'Identificación de clientes con tecnología de punta.',
    href: '/servicios/identidad-digital',
  },

  niif9: {
    title: 'NIFF 9',
    description:
      'Cumple con la nueva regulación IRFS 9 con Analítica Avanzada.',
    href: '/sas/niif9  ',
  },

  riesgos: {
    title: 'Riesgos',
    description: 'Análisis de riesgos y toma de decisiones inteligentes.',
    href: '/sas/riesgos',
  },

  ciberseguridad: {
    title: 'Ciberseguridad',
    description:
      'Asegura tus activos con soluciones automatizadas y asequibles.',
    href: '/seguridad',
  },

  inteligencia_artificial: {
    title: 'Inteligencia Artificial',
    description:
      'Cálculos complejos y modelos predictivos para casos financieros.',
    href: '/sas',
  },

  crontrol_de_pacientes: {
    title: 'Control de Pacientes',
    description: 'Mejora y analiza tu postura ante casos médicos.',
    href: '/imedical',
  },

  inventario_de_farmacia: {
    title: 'Inventario de Farmacia',
    description: 'Entrega de medicinas con sistemas inteligentes.',
    href: '/imedical',
  },

  practica_pasantia: {
    title: 'Practicante y Pasante',
    description: 'Realiza tu práctica profesional en Grupo ASICA.',
    href: '/servicios/educacion',
  },

  entrenamiento: {
    title: 'Entrenamiento',
    description: 'Programas de entrenamiento prácticos y significativos.',
    href: '/servicios/entrenamientos',
  },
});

export const solucionesGobierno = [
  { ...SOLUCIONES.digitalizar },
  { ...SOLUCIONES.automatizacion },
  { ...SOLUCIONES.proteccion_de_activos },
  { ...SOLUCIONES.endpoint_detection_and_response },
  { ...SOLUCIONES.transformacion },
  { ...SOLUCIONES.entrenamiento },
];

export const solucionesCorporacion = [
  { ...SOLUCIONES.proteccion_de_activos },
  { ...SOLUCIONES.analitica_avanzada },
  { ...SOLUCIONES.consultoria_ti },
  { ...SOLUCIONES.endpoint_detection_and_response },
  { ...SOLUCIONES.entrenamiento },
];

export const solucionesPymes = [
  { ...SOLUCIONES.facturacion },
  { ...SOLUCIONES.inventario },
  { ...SOLUCIONES.contabilidad },
  { ...SOLUCIONES.proteccion_de_hardware },
  { ...SOLUCIONES.identidad_digital },
  { ...SOLUCIONES.entrenamiento },
];

export const solucionesBanca = [
  { ...SOLUCIONES.niif9 },
  { ...SOLUCIONES.riesgos },
  { ...SOLUCIONES.ciberseguridad },
  { ...SOLUCIONES.inteligencia_artificial },
  { ...SOLUCIONES.entrenamiento },
];

export const solucionesSalud = [
  { ...SOLUCIONES.crontrol_de_pacientes },
  { ...SOLUCIONES.inventario_de_farmacia },
  { ...SOLUCIONES.analitica_avanzada },
  { ...SOLUCIONES.identidad_digital },
  { ...SOLUCIONES.ciberseguridad },
  { ...SOLUCIONES.entrenamiento },
];

export const solucionesEducacion = [
  { ...SOLUCIONES.practica_pasantia },
  { ...SOLUCIONES.entrenamiento },
];
