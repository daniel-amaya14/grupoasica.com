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
    description:
      '¿Estas cansado de tener todo en papel? ¿Necesitas recuperar y sanear documentos?',
    href: '/arprotecsa',
  },

  automatizacion: {
    title: 'Automatización',
    description:
      '¿Deseas eliminar burocracia apostandole a la eficiencia de procesos?',
    href: '/freebalance',
  },

  proteccion_de_activos: {
    title: 'Protección de Activos',
    description:
      'Deten la exfiltarción de datos con nuestras soluciones de ciberseguridad',
    href: '/seguridad',
  },

  endpoint_detection_and_response: {
    title: 'Endpoint Detection and Response',
    description:
      'EDR y Windows Defender Administrado, contrata nuestros especialistas de seguridad IT de detección y respuesta a nivel de punto final, para que tengas defensa de última generación contra todo tipo de Malware.',
    href: '/huntress',
  },

  transformacion: {
    title: 'Transformación',
    description:
      'Implementa eficiencia en los procesos adminstrativos y contables para facilitar la participacion ciudadana. ',
    href: '/freebalance',
  },

  consultoria_ti: {
    title: 'Consultoría IT',
    description: 'Contrata ingenieros capacitados en área de Informática.',
    href: '/consultoria',
  },

  analitica_avanzada: {
    title: 'Analítica Avanzada',
    description:
      'Aplica Inteligencia Artificial a tus procesos de analisis de datos para producir analisis predictivos, y tomar decisiones claves de tu negocio (de un tratamiento).',
    href: '/sas',
  },

  facturacion: {
    title: 'Facturación',
    description:
      'Lleva inventarios y factura de manera eficiente, asequible y amigable.',
    href: '/psk',
  },

  inventario: {
    title: 'Inventario',
    description:
      'Lleva inventarios y factura de manera eficiente, asequible y amigable.',
    href: '/psk',
  },

  contabilidad: {
    title: 'Contabilidad',
    description:
      'Lleva tu contabilidad de manera eficiente, asequible y amigable.',
    href: '/psk',
  },

  proteccion_de_hardware: {
    title: 'Protección de Hardware',
    description:
      'Lleva inventarios de tus activos dentro de tu red, para protegerlos de accesos indebidos.',
    href: '/jumpcloud',
  },

  identidad_digital: {
    title: 'Identidad Digital',
    description: 'Identifica a tus clientes con tecnología de punta.',
    href: '/soluciones/identidad-digital',
  },

  niif9: {
    title: 'NIFF 9',
    description:
      'Entra en la nueva regulación IRFS 9 con el líder mundial de Analitica Avanzada.',
    href: '/sas/niif9  ',
  },

  riesgos: {
    title: 'Riesgos',
    description:
      'Analiza los riesgos asociados a una variable, y toma decisiones inteligentes.',
    href: '/sas/riesgos',
  },

  cash_management: {
    title: 'Cash management',
    description:
      'Controla el manejo de efectivo, y modela predictivamente como se comportan tus ATMs.',
    href: '/soluciones/cash-management',
  },

  ciberseguridad: {
    title: 'Ciberseguridad',
    description:
      'Asegura tus activos con nuestras soluciones de ciberseguridad automatizadas y asequibles.',
    href: '/seguridad',
  },

  inteligencia_artificial: {
    title: 'Inteligencia Artificial',
    description:
      'Calcula y resuelve en segundos calculos complejos, y crea modelos predictivos para cualquier caso de uso financiero.',
    href: '/sas',
  },

  crontrol_de_pacientes: {
    title: 'Control de Pacientes',
    description:
      'Mejora y analiza tu postura ante un caso médico llevando controles.',
    href: '/imedical',
  },

  inventario_de_farmacia: {
    title: 'Inventario de Farmacia',
    description:
      'Facilita la entrega de medicinas con sistemas automatizados e inteligentes.',
    href: '/imedical',
  },

  pasante: {
    title: 'Pasante',
    description:
      'Buscamos estudiantes apasionados que quieran ganar experiencia práctica en la industria tecnológica. Únete a nuestro equipo como pasante y trabaja en proyectos desafiantes mientras aprendes de expertos en la industria.',
    href: '/servicios/educacion',
  },

  practicante: {
    title: 'Practicante',
    description:
      'Si eres un estudiante interesado en la tecnología y en busca de oportunidades de realizar tu práctica profesional, Grupo ASICA es el lugar perfecto para ti.',
    href: '/servicios/educacion',
  },

  entrenamiento: {
    title: 'Entrenamiento',
    description:
      'En Grupo ASICA, ofrecemos programas de entrenamiento prácticos y significativos para aquellos que buscan mejorar sus habilidades técnicas y profesionales.',
    href: '/soluciones/entrenamiento',
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
  { ...SOLUCIONES.cash_management },
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
  { ...SOLUCIONES.practicante },
  { ...SOLUCIONES.pasante },
  { ...SOLUCIONES.entrenamiento },
];
