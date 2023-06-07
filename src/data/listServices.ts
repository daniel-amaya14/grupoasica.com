import * as ICON from '@/components/Icons';

export const SERVICIOS = Object.freeze({
  gobierno: {
    title: 'Gobierno',
    description:
      'Automatiza, inventaría, gestiona presupuestos de activos. Entro otros',
    href: '/servicios/gobierno',
    color: 'border-cyan-50 bg-cyan-100 text-cyan-600',
    icon: ICON.IconGovernment,
  },
  corporacion: {
    title: 'Corporación',
    description:
      'Soluciones completas para alcanzar objetivos tecnológicos empresariales.',
    href: '/servicios/corporacion',
    color: 'border-orange-50 bg-orange-100 text-orange-600',
    icon: ICON.IconCorporation,
  },
  pymes: {
    title: 'Pymes',
    description:
      'Aumenta ventas, controla inventario, protégete. Descubre soluciones para PYMES.',
    href: '/servicios/pymes',
    color: 'border-purple-50 bg-purple-100 text-purple-600',
    icon: ICON.IconPymes,
  },
  banca: {
    title: 'Banca y Finanzas',
    description:
      'IA moldea el mundo. Grupo ASICA te lleva a la vanguardia financiera.',
    href: '/servicios/banca',
    color: 'border-green-50 bg-green-100 text-green-600',
    icon: ICON.IconBank,
  },
  salud: {
    title: 'Salud',
    description:
      'Mejora atención médica, genera ingresos. Descubre nuestras soluciones clínicas.',
    href: '/servicios/salud',
    color: 'border-blue-50 bg-blue-100 text-blue-600',
    icon: ICON.IconHealthLogo,
  },
  educacion: {
    title: 'Educación',
    description: 'Grupo ASICA: guía eficiente en el mundo de TI. ¡Únete!',
    href: '/servicios/educacion',
    color: 'border-teal-50 bg-teal-100 text-teal-600',
    icon: ICON.IconStudent,
  },
});

export const SOLUCIONES = Object.freeze({
  digitalizar: {
    title: 'Digitalización',
    description: 'Estandariza el proceso de gestión de documentos.',
    href: '/aprotecsa',
    icon: ICON.IconDigitalization,
  },

  automatizacion: {
    title: 'Automatización',
    description: 'Elimina burocracia con procesos eficientes.',
    href: '/freebalance',
    icon: ICON.IconAutomation,
  },

  proteccion_de_activos: {
    title: 'Protección de Activos',
    description:
      'Soluciones de ciberseguridad para detener la exfiltración de datos.',
    href: '/seguridad',
    icon: ICON.IconSecurity,
  },

  endpoint_detection_and_response: {
    title: 'Endpoint Detection and Response',
    description: 'Detección y respuesta avanzada contra todo tipo de Malware.',
    href: '/huntress',
    icon: ICON.IconEdr,
  },

  transformacion: {
    title: 'Transformación',
    description:
      'Eficiencia en procesos administrativos y contables para participación ciudadana.',
    href: '/freebalance',
    icon: ICON.IconTransformation,
  },

  consultoria_ti: {
    title: 'Consultoría IT',
    description: 'Contrata ingenieros capacitados en Informática.',
    href: '/consultoria',
    icon: ICON.IconConsulting,
  },

  analitica_avanzada: {
    title: 'Analítica Avanzada',
    description: 'Aplica Inteligencia Artificial a análisis de datos.',
    href: '/sas',
    icon: ICON.IconAnalytics,
  },

  facturacion: {
    title: 'Facturación',
    description: 'Gestión eficiente y amigable de inventarios y facturas.',
    href: '/psk',
    icon: ICON.IconBilling,
  },

  inventario: {
    title: 'Inventario',
    description: 'Gestión eficiente y amigable de inventarios y facturas.',
    href: '/psk',
    icon: ICON.IconInventory,
  },

  contabilidad: {
    title: 'Contabilidad',
    description: 'Gestión eficiente, asequible y amigable de contabilidad.',
    href: '/psk',
    icon: ICON.IconAccounting,
  },

  proteccion_de_hardware: {
    title: 'Protección de Hardware',
    description: 'Controla el acceso indebido a activos dentro de tu red.',
    href: '/jumpcloud',
    icon: ICON.IconHardware,
  },

  identidad_digital: {
    title: 'Identidad Digital',
    description: 'Identificación de clientes con tecnología de punta.',
    href: '/servicios/identidad-digital',
    icon: ICON.IconDigitalIdentity,
  },

  niif9: {
    title: 'NIFF 9',
    description:
      'Cumple con la nueva regulación IRFS 9 con Analítica Avanzada.',
    href: '/sas/niif9  ',
    icon: ICON.IconNiif,
  },

  riesgos: {
    title: 'Riesgos',
    description: 'Análisis de riesgos y toma de decisiones inteligentes.',
    href: '/sas/riesgos',
    icon: ICON.IconRisks,
  },

  ciberseguridad: {
    title: 'Ciberseguridad',
    description:
      'Asegura tus activos con soluciones automatizadas y asequibles.',
    href: '/seguridad',
    icon: ICON.IconSecurity,
  },

  inteligencia_artificial: {
    title: 'Inteligencia Artificial',
    description:
      'Cálculos complejos y modelos predictivos para casos financieros.',
    href: '/sas',
    icon: ICON.IconAI,
  },

  crontrol_de_pacientes: {
    title: 'Control de Pacientes',
    description: 'Mejora y analiza tu postura ante casos médicos.',
    href: '/imedical',
    icon: ICON.IconPatient,
  },

  inventario_de_farmacia: {
    title: 'Inventario de Farmacia',
    description: 'Entrega de medicinas con sistemas inteligentes.',
    href: '/imedical',
    icon: ICON.IconPharmacyInventory,
  },

  practica_pasantia: {
    title: 'Practicante y Pasante',
    description: 'Realiza tu práctica profesional en Grupo ASICA.',
    href: '/servicios/educacion',
    icon: ICON.IconStudent2,
  },

  entrenamiento: {
    title: 'Entrenamiento',
    description: 'Programas de entrenamiento prácticos y significativos.',
    href: '/servicios/entrenamientos',
    icon: ICON.IconTraining,
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
