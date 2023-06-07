import React from 'react';
import Image from 'next/image';
import ImgGPM from '@/public/images/software/freebalance/GPM.svg';
import ImgPFM from '@/public/images/software/freebalance/PFM.svg';
import ImgPEM from '@/public/images/software/freebalance/PEM.svg';
import ImgGTM from '@/public/images/software/freebalance/GTM.svg';
import ImgGRM from '@/public/images/software/freebalance/GRM.svg';
import ImgCSM from '@/public/images/software/freebalance/CSM.svg';

const modulos = {
  gpm: {
    beneficios: [
      {
        title: 'Preparación del presupuesto',
        description: 'Elabora presupuestos descendentes y ascendentes',
      },
      {
        title: 'Preparación del presupuesto',
        description:
          'Planes de organización, aprobaciones y análisis de resultados',
      },
      {
        title: 'Ejecución y previsión del presupuesto',
        description:
          'Proporciona métricas de rendimiento de insumos, productos y resultados vinculadas a mandatos gubernamentales.',
      },
      {
        title: 'Gestión de la ayuda',
        description:
          'Vincula a los socios de la ayuda exterior y apoya la integración de la información "extrapresupuestaria".',
      },
      {
        title: 'Mejora del rendimiento y vinculación',
        description:
          'Recomienda mejoras en función de la evolución de las prioridades o de los indicadores de rendimiento.',
      },
      {
        title: 'Métricas y medición del rendimiento',
        description:
          'Desarrolla métricas de rendimiento para hacer un seguimiento de los mandatos y objetivos gubernamentales y departamentales.',
      },
    ],
    modulos: [
      {
        title: '(GPBB) Creador de libros de presupuesto',
        description:
          'Automatiza la recogida de datos históricos y de planificación presupuestaria.',
      },
      {
        title:
          '(GPPB) Presupuestación por resultados de las Administraciones Públicas',
        description:
          'Formulación de presupuestos plurianuales, previsiones, control de versiones y planificación de escenarios para la elaboración de presupuestos.',
      },
      {
        title: '(GPPM) Gestión del rendimiento gubernamental',
        description:
          'Gestiona adecuadamente la ejecución física del presupuesto y supervisa cada uno de los resultados previstos.',
      },
      {
        title: '(GPCE) Cuadro de mandos Presidente/Primer Ministro',
        description:
          'El cuadro de mandos proporciona cuadros de mando ejecutivos que pueden utilizarse para un análisis más profundo.',
      },
      {
        title: '(GPMD) Cuadro de mando del Ministro',
        description:
          'A partir de las transacciones realizadas por un ministerio concreto, el cuadro de mando ofrece cuadros de mando que pueden utilizarse de forma interactiva para un análisis más profundo.',
      },
      {
        title: '(GPIA) Gestión de Auditoría Interna',
        description:
          'Permite automatizar los procesos anuales de auditoría interna de la Administración.',
      },
      {
        title: '(GPMA) Alertas de gestión',
        description:
          'Proporciona al usuario información relacionada con las acciones o procesos realizados.',
      },
      {
        title: '(GPLR) Gestión jurídica y de riesgos',
        description:
          'Supervisa los litigios en curso y hace un seguimiento de los gastos e ingresos relacionados con cada caso. También calcula el resultado financiero potencial.',
      },
      {
        title: '(GPDM) FreeBalance Datamart',
        description:
          'Esta función organiza los datos para que puedan ser aprovechados por los cuadros de mando y las herramientas OLAP.',
      },
      {
        title: '(GPER) Portal eResults',
        description:
          'Permite a los gobiernos publicar información sobre resultados en tiempo real, incluida toda la información pertinente actualizada desde el GRP.',
      },
      {
        title: '(GPPR) Portal del Gobierno',
        description:
          'Este portal permite a los gobiernos realizar encuestas públicas, publicar noticias, documentos y contenidos jurídicos, así como mostrar actos institucionales.',
      },
      {
        title: '(GPTP) Portal de Transparencia',
        description:
          'Contribuye a aumentar la transparencia del gobierno y genera confianza al permitir que el público tenga a la vista la información publicada relacionada con la ejecución del presupuesto fiscal y el rendimiento del sector público.',
      },
      {
        title: '(GPCT) Seguimiento de casos judiciales',
        description:
          'Registra y gestiona automáticamente los casos judiciales y los anexos justificativos pertinentes.',
      },
      {
        title: '(GPCR) Informes personalizados',
        description:
          'Crea informes de datos personalizados sobre el rendimiento del sector público con seguridad de acceso a los datos.',
      },
      {
        title: '(GPMG) Cuadro de mando del gestor',
        description:
          'Otra herramienta de inteligencia empresarial para apoyar el proceso de toma de decisiones. El cuadro de mandos ofrece cuadros de mando ejecutivos interactivos que pueden utilizarse para un análisis más profundo.',
      },
    ],
  },
  pfm: {
    beneficios: [
      {
        title: 'Control presupuestario',
        description:
          'Los fondos presupuestarios se asignan al Plan General de Contabilidad en un nivel jerárquico predeterminado para el control fiscal agregado.',
      },
      {
        title: 'Reforma y modernización',
        description:
          'Moderniza la estructura de gestión financiera, como la migración a la contabilidad de ejercicio.',
      },
      {
        title: 'Controles de adjudicación multinivel',
        description:
          'Soporta créditos, órdenes o asignaciones, asignados a informes resumidos o detallados dentro del Plan Contable y a períodos fiscales.',
      },
      {
        title: 'Control de compromisos y obligaciones',
        description:
          'Apoya un compromiso blando de gasto o compromisos duros de obligaciones contractuales.',
      },
      {
        title: 'Libro mayor en tiempo real',
        description:
          'Equilibra los libros de contabilidad en tiempo real para garantizar que los presupuestos no se excedan.',
      },
    ],
    modulos: [
      {
        title: '(PFPF) Finanzas públicas básicas',
        description:
          'Los fundamentos básicos de la contabilidad gubernamental: controles presupuestarios, créditos, contabilidad de compromisos y Plan General de Contabilidad.',
      },
      {
        title: '(PFBC) Controles presupuestarios',
        description:
          'Integrados en los sistemas de registro FreeBalance Accountability Suite™ se encuentran los controles de presupuesto, créditos y compromisos.',
      },
      {
        title: '(PFBR) Solicitudes de transferencia presupuestaria',
        description:
          'Apoya a los usuarios que solicitan transferencias presupuestarias y gestiona las aprobaciones del flujo de trabajo.',
      },
      {
        title: '(PFCB) Libros de caja',
        description:
          'Sistema simplificado de libro mayor y libro de caja para una rápida implantación y necesidades autónomas de cobro.',
      },
      {
        title: '(PFFA) Activos fijos',
        description:
          'Soporta la contabilidad de activos fijos, la depreciación, las transacciones de custodia y la gestión de transferencias de activos.',
      },
      {
        title: '(PFFM) Gestión de flotas',
        description:
          'Una parte de la gestión general de activos que incluye las necesidades específicas de los vehículos: garantía, kilometraje, mantenimiento, uso y supervisión y seguimiento.',
      },
      {
        title: '(PFSI) Almacenes e inventarios',
        description:
          'Permite realizar compras en tiendas en el proceso de compra, vinculado al proceso de recepción.',
      },
      {
        title: '(PFSL) Subpréstamo',
        description:
          'Admite libros auxiliares como conjunto intermedio de cuentas vinculadas al libro mayor.',
      },
      {
        title: '(PFAA) Anticipos contables',
        description:
          'Proporciona una funcionalidad que apoya el control de los anticipos y garantiza la correcta aplicación y el control automático de la recuperación de los anticipos.',
      },
    ],
  },
  pem: {
    beneficios: [
      {
        title: 'Controles presupuestarios y de compromisos',
        description:
          'Garantizar que todos los gastos se aprueban y no superan el presupuesto o las asignaciones establecidas en el sistema.',
      },
      {
        title: 'Métodos de compra',
        description:
          'Desarrolla una serie de instrumentos de compra, como órdenes de compra locales, caja para gastos menores, contratos abiertos, ofertas permanentes y contratos especiales.',
      },
      {
        title: 'Gestión de proveedores',
        description:
          'Gestiona los proveedores, incluidas las autorizaciones, certificaciones y calificaciones.',
      },
      {
        title: 'Prestaciones sociales',
        description:
          'Apoya programas gubernamentales de asistencia sanitaria, pensiones, ayudas sociales y seguros de empleo.',
      },
      {
        title: 'Ciclo de compra',
        description:
          'Gestiona todo el ciclo de compras, incluidas las solicitudes de compra, los pedidos de compra, la entrada de mercancías y las devoluciones de mercancías.',
      },
      {
        title: 'Adquisiciones',
        description:
          'Gestiona la contratación pública, incluidos contratos, concursos, evaluación de licitaciones y litigios con proveedores.',
      },
      {
        title: 'Gestión de subvenciones',
        description:
          'frece ayudas en forma de subvenciones, préstamos y contribuciones a particulares, instituciones educativas, ONG y empresas.',
      },
      {
        title: 'Transferencias intergubernamentales',
        description: 'Gestiona los pagos de transferencias entre gobiernos.',
      },
    ],
    modulos: [
      {
        title: '(PECM) Gestión de contratos',
        description:
          'La gestión de contratos incluye funciones de pago para gestionar todos los aspectos de la contabilidad de pagos de contratos.',
      },
      {
        title: '(PECT) Gestión de catálogos',
        description:
          'Crea espacios de trabajo para la contratación con un número ilimitado de catálogos de proveedores de bienes y/o servicios.',
      },
      {
        title: '(PEEP) Sitio de contratación electrónica',
        description:
          'Ofrece transparencia sobre el proceso de contratación, los proveedores, los precios y las condiciones, lo que genera confianza en la Administración.',
      },
      {
        title: '(PEPM) Gestión de pagos',
        description:
          'Inicie procesos de pago y gestión de cobros por comprobante de gasto de cualquier origen.',
      },
      {
        title: '(PEGP) Contratación pública electrónica',
        description:
          'Apoya la disciplina en las finanzas de las adquisiciones públicas a gran escala, como licitaciones, contratación electrónica, contratos y gestión del gasto.',
      },
      {
        title: '(PEPR) Compras y Gastos',
        description:
          'Abarca el ciclo básico de compras y compromisos de las administraciones públicas: solicitudes, órdenes de compra, entrada de mercancías, devolución de mercancías, gastos y comprobantes de pago.',
      },
    ],
  },
  gtm: {
    beneficios: [
      {
        title: 'Gestión de tesorería y liquidez',
        description:
          'Predice las necesidades de tesorería para optimizar las reservas de efectivo.',
      },
      {
        title: 'Conciliación bancaria',
        description:
          'Concilia los libros de contabilidad con los ingresos en efectivo, así como los pagos en los bancos.',
      },
      {
        title: 'Gestión de la deuda',
        description: 'Gestiona todos los compromisos de deuda pública.',
      },
      {
        title: 'Cuenta Única del Tesoro',
        description:
          'Migra las cuentas bancarias a una única cuenta para gestionar eficazmente las reservas, las inversiones y la deuda.',
      },
      {
        title: 'Gestión de inversiones',
        description:
          'Gestiona todas las inversiones gubernamentales con instrumentos financieros.',
      },
    ],
    modulos: [
      {
        title: '(GTBR) Conciliación bancaria',
        description: 'Conciliación bancaria automática multidivisa.',
      },
      {
        title: '(GTBT) Transferencias de cuentas bancarias',
        description:
          'Proporciona la funcionalidad para ejecutar transferencias de cuentas bancarias individuales o agrupadas.',
      },
      {
        title: '(GTDM) Gestión de la deuda',
        description:
          'Modelos y planes de instrumentos de deuda a corto y largo plazo.',
      },
      {
        title: '(GTLN) Gestión de préstamos',
        description:
          'Gestiona la elegibilidad, las aprobaciones y la creación de préstamos emitidos tanto a particulares como a organizaciones.',
      },
      {
        title: '(GTCM) Gestión de tesorería',
        description:
          'Permite prever la disponibilidad de efectivo para reducir la deuda y aumentar los ingresos por inversiones.',
      },
      {
        title: '(GTIM) Gestión de inversiones',
        description:
          'Gestión de inversiones que soporta el libro auxiliar de inversiones, la ilustración de inversiones y se integra con la contabilidad gubernamental.',
      },
      {
        title: '(GTLM) Gestión de liquidez',
        description:
          'Prevé la administración y contabilidad de todas las transacciones relacionadas con los fondos de inversión.',
      },
    ],
  },
  grm: {
    beneficios: [
      {
        title: 'Fiscalidad',
        description:
          'Soporta impuestos sobre la renta, la propiedad, las aduanas, los impuestos especiales y las ventas.',
      },
      {
        title: 'Gestión de clientes y contribuyentes',
        description:
          'Gestiona la información y la identidad de ciudadanos y empresas en todos los sistemas de ingresos.',
      },
      {
        title: 'Ventas al Gobierno',
        description:
          'Gestiona la venta de todos los activos de la Administración.',
      },
      {
        title: 'Gestión de colecciones',
        description:
          'Apoya la gestión de recibos, cobros, facturación, extractos y reclamaciones.',
      },
      {
        title: 'Permisos y licencias',
        description:
          'Gestiona todos los procesos gubernamentales que recaudan ingresos: permisos, licencias, certificaciones, tasas de usuario y multas.',
      },
    ],
    modulos: [
      {
        title: '(GRRV) Gestión de ingresos públicos',
        description: 'Apoya los ingresos y la recaudación de impuestos.',
      },
      {
        title: '(GRCS) Caja',
        description:
          'Gestiona los medios de pago, los depósitos bancarios, imprime los recibos y genera las operaciones de ejecución del presupuesto de ingresos.',
      },
      {
        title: '(GRPL) Permisos y licencias',
        description:
          'Gestiona permisos y licencias académicas empresariales y profesionales.',
      },
      {
        title: '(GRCE) Fiscalidad aduanera',
        description:
          'Software de aduanas que facilita la tramitación de impuestos y tasas de importación.',
      },
      {
        title: '(GRCT) Administración del Impuesto de Sociedades',
        description:
          'Mejora la generación de ingresos y permite el seguimiento, al tiempo que reduce los problemas de fraude e incumplimiento.',
      },
      {
        title:
          '(GRPI) Administración del Impuesto sobre la Renta de las Personas Físicas',
        description:
          'Proporciona funciones de gestión de casos para ingresos, pagos y auditorías, y mejora la detección del fraude.',
      },
      {
        title: '(GRPT) Impuestos sobre bienes inmuebles',
        description:
          'Calcula los impuestos de sociedades y de bienes personales, con funciones de facturación, mantenimiento, cobros y distribuciones.',
      },
      {
        title: '(GRBP) Presentación de facturas',
        description:
          'dmite la presentación electrónica de facturas como extractos, facturas de servicios públicos y facturas hasta la fecha.',
      },
      {
        title: '(GRCM) Gestión de casos',
        description:
          'Ayuda a automatizar los cobros, la correspondencia y los detalles de los casos, y tiene un flujo de trabajo integrado.',
      },
      {
        title: '(GRCR) Gestión de las relaciones con los clientes',
        description:
          'Asiste en la funcionalidad de ventas y facturas electrónicas, e incluye la gestión de datos de clientes, el flujo de trabajo y la elaboración de informes.',
      },
      {
        title: '(GRUB) Facturación de servicios públicos',
        description:
          'Admite la facturación de servicios públicos como el agua y el gas y ofrece funciones de gestión automatizada de cobros.',
      },
    ],
  },
  csm: {
    beneficios: [
      {
        title: 'Gestión del personal de la función pública',
        description:
          'Gestiona la contratación, la evaluación del rendimiento, la gestión de litigios y las retenciones.',
      },
      {
        title: 'Nóminas y pensiones',
        description:
          'Gestiona los pagos al personal por horas y salarios, así como las pensiones de los antiguos funcionarios.',
      },
      {
        title: 'Planificación salarial',
        description:
          'Ofrece la posibilidad de modelizar los cambios de categoría salarial, las vacantes y los acuerdos sindicales.',
      },
      {
        title: 'Gestión de pagos y prestaciones',
        description:
          'Establece las categorías salariales y las escalas de puestos de la función pública.',
      },
      {
        title: 'Gestión de puestos y establecimientos',
        description:
          'Establece las categorías salariales y las escalas de puestos de la función pública.',
      },
      {
        title: 'Reforma de la función pública',
        description:
          'Mejora la productividad, eficacia y profesionalidad de la función pública',
      },
      {
        title: 'Gestión de la capacidad',
        description:
          'Aumentar la capacidad de la Administración mediante formación, programas de capacitación, planes de sucesión y remuneración por rendimiento.',
      },
      {
        title: 'Gestión de beneficios',
        description:
          'Apoya el seguro, las primas y los préstamos para los funcionarios',
      },
    ],
    modulos: [
      {
        title: '(CSBM) Gestión de beneficios',
        description:
          'Apoya el seguro, las primas, los pagos de formación y los préstamos para funcionarios.',
      },
      {
        title: '(CSCB) Desarrollo de capacidades y formación',
        description:
          'Mejora la capacidad de las administraciones públicas mediante la aplicación de programas de formación, capacitación, planificación de la sucesión y remuneración en función del rendimiento.',
      },
      {
        title: '(CSFD) Declaración financiera',
        description: 'Respalda la información financiera de los funcionarios.',
      },
      {
        title: '(CSMV) Movimiento de la Función Pública',
        description:
          'Apoya el movimiento de los empleados a través del ciclo de trabajo.',
      },
      {
        title: '(CSPA) Evaluación del rendimiento de la función pública',
        description:
          'Ofrece una perspectiva completa del historial de rendimiento, los planes de trabajo y los planes de desarrollo de los empleados.',
      },
      {
        title: '(CSPL) Planificación de la Función Pública',
        description:
          'Se encarga de la planificación de la función pública, la presupuestación y la previsión anual de la gestión de los gastos salariales.',
      },
      {
        title: '(CSPM) Gestión de pagos',
        description: 'Gestiona el proceso de aprobación de pagos.',
      },
      {
        title: '(CSPN) Gestión de pensiones',
        description:
          'Da soporte a todos los planes de jubilación de los empleados, con fechas de aprobación, estado, información sobre los empleados y planes de prestaciones.',
      },
      {
        title: '(CSBA) Gestión de Beneficios y Actuarios',
        description:
          'Respalda las prestaciones y los servicios a los afiliados al fondo de pensiones. Integrado con nóminas y valoraciones actuariales.',
      },
      {
        title: '(CSPR) Nómina',
        description:
          'Mantiene la integridad de la nómina a partir de escalas salariales vinculadas, asignaciones, bonificaciones y otros beneficios.',
      },
      {
        title: '(CSRC) Contratación de funcionarios',
        description:
          'Apoya todos los aspectos del ciclo de contratación interna y externa.',
      },
      {
        title: '(CSSS) Autoservicio del empleado',
        description:
          'Permite a los empleados un autoservicio completo: solicitudes de vacaciones, revisión de las vacaciones disponibles, presentación de solicitudes de viajes y vacaciones.',
      },
      {
        title: '(CSTA) Control de presencia',
        description:
          'Gestiona las horas extraordinarias, las vacaciones y el trabajo por turnos.',
      },
      {
        title: '(CSTM) Gestión del talento',
        description:
          'Ofrece a los empleados la oportunidad de explorar múltiples trayectorias profesionales.',
      },
      {
        title: '(CSTS) Viajes y dietas',
        description: 'Gestiona los viajes de negocios de los empleados.',
      },
      {
        title: '(CSWM) Gestión del personal',
        description:
          'Proporciona un eje central para la información de los empleados, como la descripción del puesto, los premios, las puntuaciones de las evaluaciones y los conflictos.',
      },
      {
        title: '(CSML) Gestión de préstamos a los miembros',
        description:
          'Gestión de préstamos de fondos de pensiones. Apoya los procesos básicos, incluida la solicitud de préstamos, el análisis de activación y la protocolización, la liquidación y la liberación de fondos.',
      },
      {
        title: '(CSAC) Afiliaciones y contribuciones',
        description:
          'Repositorio centralizado de todos los datos de ingresos de los fondos de pensiones. Controla el proceso de recaudación de cotizaciones y se integra con los módulos financieros para registrar los ingresos.',
      },
    ],
  },
};

interface ListtItemsProps {
  items: { title: string; description: string }[];
}

const ListItems = ({ items }: ListtItemsProps) => {
  return (
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {items.map(({ title, description }) => {
        return (
          <li
            key={title}
            className="flex gap-2 items-start"
          >
            <span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth={2}
                className="w-5 h-5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M0 0h24v24H0z"
                  fill="none"
                  stroke="none"
                ></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M9 12l2 2l4 -4"></path>
              </svg>
            </span>
            <p>
              <strong className="text-primary">{title}</strong>
              <br />
              <span className="max-w-lg inline-flex text-justify">
                {description}
              </span>
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default function Tab() {
  return (
    <section className="">
      <ul
        className="relative z-0 flex overflow-hidden rounded-xl border"
        aria-label="Tabs"
        role="tablist"
      >
        <button
          type="button"
          className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 relative min-w-0 flex-1 overflow-hidden border-b-2 border-l bg-white px-4 py-4 text-center text-sm font-medium text-gray-500 first:border-l-0 hover:bg-gray-50 hover:text-gray-700 focus:z-10"
          id="bar-with-underline-item-1"
          data-hs-tab="#gpm"
          aria-controls="gpm"
          role="tab"
        >
          GPM
        </button>
        <button
          type="button"
          className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 relative min-w-0 flex-1 overflow-hidden border-b-2 border-l bg-white px-4 py-4 text-center text-sm font-medium text-gray-500 first:border-l-0 hover:bg-gray-50 hover:text-gray-700 focus:z-10"
          id="bar-with-underline-item-2"
          data-hs-tab="#pfm"
          aria-controls="pfm"
          role="tab"
        >
          PFM
        </button>
        <button
          type="button"
          className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 relative min-w-0 flex-1 overflow-hidden border-b-2 border-l bg-white px-4 py-4 text-center text-sm font-medium text-gray-500 first:border-l-0 hover:bg-gray-50 hover:text-gray-700 focus:z-10"
          id="bar-with-underline-item-3"
          data-hs-tab="#pem"
          aria-controls="pem"
          role="tab"
        >
          PEM
        </button>
        <button
          type="button"
          className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 relative min-w-0 flex-1 overflow-hidden border-b-2 border-l bg-white px-4 py-4 text-center text-sm font-medium text-gray-500 first:border-l-0 hover:bg-gray-50 hover:text-gray-700 focus:z-10"
          id="bar-with-underline-item-3"
          data-hs-tab="#gtm"
          aria-controls="gtm"
          role="tab"
        >
          GTM
        </button>
        <button
          type="button"
          className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 relative min-w-0 flex-1 overflow-hidden border-b-2 border-l bg-white px-4 py-4 text-center text-sm font-medium text-gray-500 first:border-l-0 hover:bg-gray-50 hover:text-gray-700 focus:z-10"
          id="bar-with-underline-item-3"
          data-hs-tab="#grm"
          aria-controls="grm"
          role="tab"
        >
          GRM
        </button>
        <button
          type="button"
          className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 relative min-w-0 flex-1 overflow-hidden border-b-2 border-l bg-white px-4 py-4 text-center text-sm font-medium text-gray-500 first:border-l-0 hover:bg-gray-50 hover:text-gray-700 focus:z-10"
          id="bar-with-underline-item-3"
          data-hs-tab="#csm"
          aria-controls="csm"
          role="tab"
        >
          CSM
        </button>
      </ul>
      <div className="mt-3">
        {/* gpm */}
        <div
          id="gpm"
          role="tabpanel"
          aria-labelledby="bar-with-underline-item-1"
        >
          <div className="py-3 md:p-4 lg:p-6">
            <div className="flex items-center gap-4">
              <Image
                src={ImgGPM}
                alt="GPM"
                className="w-14 aspect-square object-cover"
              />
              <h2 className="text-xl max-w-xs">
                Gestión del rendimiento de la Administración
              </h2>
            </div>
            <div className="mt-6 flex flex-col gap-6">
              <p className="text-justify">
                (GPM) permite a las administraciones públicas obtener mejores
                resultados gracias al acceso a datos y métricas. La capacidad de
                vincular el rendimiento directamente a la presupuestación
                permite mejorar los resultados de los departamentos del sector
                público.
              </p>
              <p>
                <strong>Algunos de los beneficios</strong> de una solución
                unificada de Gestión del Desempeño Gubernamental como
                FreeBalance Accountability Suite™ incluyen:
              </p>
              <ListItems items={modulos.gpm.beneficios} />
              <p>
                <strong> Se compone de una serie de módulos</strong> que pueden
                implantarse individualmente o como parte de una solución
                unificada:
              </p>
              <ListItems items={modulos.gpm.modulos} />
            </div>
          </div>
        </div>

        {/* pfm */}
        <div
          id="pfm"
          className="hidden"
          role="tabpanel"
          aria-labelledby="bar-with-underline-item-2"
        >
          <div className="py-3 md:p-4 lg:p-6">
            <div className="flex items-center gap-4">
              <Image
                src={ImgPFM}
                alt="PFM"
                className="w-14 aspect-square object-cover"
              />
              <h2 className="text-xl max-w-xs">
                Gestión de las finanzas públicas
              </h2>
            </div>
            <div className="mt-6 flex flex-col gap-6">
              <p className="text-justify">
                (PFM) apoya los requisitos presupuestarios específicos del
                sector público y ofrece funciones como la contabilidad de
                compromisos y la gestión presupuestaria. Los módulos pueden
                combinarse y configurarse de cualquier manera y pueden activarse
                progresivamente de acuerdo con un programa secuenciado de
                reforma de la PFM.
              </p>
              <p>
                <strong>Algunas de las características y ventajas son:</strong>
              </p>
              <ListItems items={modulos.pfm.beneficios} />
              <p>
                <strong> Se compone de una serie de módulos</strong> que pueden
                implantarse individualmente o como parte de una solución
                unificada:
              </p>
              <ListItems items={modulos.pfm.modulos} />
            </div>
          </div>
        </div>

        {/* pem */}
        <div
          id="pem"
          className="hidden"
          role="tabpanel"
          aria-labelledby="bar-with-underline-item-3"
        >
          <div className="py-3 md:p-4 lg:p-6">
            <div className="flex items-center gap-4">
              <Image
                src={ImgPEM}
                alt="PEM"
                className="w-14 aspect-square object-cover"
              />
              <h2 className="text-xl max-w-xs">Gestión del gasto público</h2>
            </div>
            <div className="mt-6 flex flex-col gap-6">
              <p className="text-justify">
                (PEM) Gestión del Gasto Público gestiona todas las funciones
                relacionadas con el gasto público y el control del gasto
                público. Debido a las necesidades exclusivas de las
                administraciones públicas -incluidos los controles
                presupuestarios y de compromisos-, esta función supera las
                funciones típicas de las cuentas por pagar habituales en el
                sector privado.
              </p>
              <p>
                <strong>Algunas de las características y ventajas</strong> de
                una solución unificada de Gestión del Gasto Público como
                FreeBalance Accountability Suite™ son:
              </p>
              <ListItems items={modulos.pem.beneficios} />
              <p>
                <strong> Se compone de una serie de módulos</strong> que pueden
                implantarse individualmente o como parte de una solución
                unificada:
              </p>
              <ListItems items={modulos.pem.modulos} />
            </div>
          </div>
        </div>

        {/* gtm */}
        <div
          id="gtm"
          className="hidden"
          role="tabpanel"
          aria-labelledby="bar-with-underline-item-4"
        >
          <div className="py-3 md:p-4 lg:p-6">
            <div className="flex items-center gap-4">
              <Image
                src={ImgGTM}
                alt="GTM"
                className="w-14 aspect-square object-cover"
              />
              <h2 className="text-xl max-w-xs">Gestión del tesoro público</h2>
            </div>
            <div className="mt-6 flex flex-col gap-6">
              <p className="text-justify">
                (GTM) apoya la conciliación bancaria y gestiona el efectivo, la
                deuda y las inversiones. El sistema armoniza las operaciones de
                tesorería en todos los niveles de la Administración, mitiga el
                riesgo fiscal y maximiza los fondos públicos mediante una
                previsión eficaz.
              </p>
              <p>
                Una solución integrada y unificada de gestión de la tesorería
                del sector público como la FreeBalance Accountability Suite™
                permite a un gobierno armonizar eficazmente todas sus
                operaciones de tesorería en todos los niveles de gobierno,
                mitigar el riesgo fiscal y maximizar el gasto mediante una
                previsión eficaz.{' '}
                <strong>Entre las ventajas se incluyen:</strong>
              </p>
              <ListItems items={modulos.gtm.beneficios} />
              <p>
                <strong> Se compone de una serie de módulos</strong> que pueden
                implantarse individualmente o como parte de una solución
                unificada:
              </p>
              <ListItems items={modulos.gtm.modulos} />
            </div>
          </div>
        </div>

        {/* grm */}
        <div
          id="grm"
          className="hidden"
          role="tabpanel"
          aria-labelledby="bar-with-underline-item-5"
        >
          <div className="py-3 md:p-4 lg:p-6">
            <div className="flex items-center gap-4">
              <Image
                src={ImgGRM}
                alt="GRM"
                className="w-14 aspect-square object-cover"
              />
              <h2 className="text-xl max-w-xs">Gestión de ingresos públicos</h2>
            </div>
            <div className="mt-6 flex flex-col gap-6">
              <p className="text-justify">
                El programa informático de gestión de ingresos públicos (GRM)
                permite utilizar los mecanismos exclusivos de recaudación de
                ingresos públicos, como los impuestos. Los módulos pueden
                combinarse y configurarse de cualquier manera y pueden activarse
                progresivamente de acuerdo con un programa secuenciado de
                reforma de la gestión de las finanzas públicas.
              </p>
              <p>
                Muchas administraciones públicas disponen de sistemas de gestión
                de ingresos para gestionar la recaudación de impuestos y otros
                ingresos. Sin embargo, los programas informáticos de gestión de
                ingresos autónomos presentan numerosos retos y la importancia de
                contar con todas las funciones de gestión financiera integradas
                en un único sistema unificado es primordial.{' '}
                <strong>
                  Entre las ventajas de los módulos de gestión de ingresos
                  públicos de FreeBalance se incluyen:
                </strong>
              </p>
              <ListItems items={modulos.grm.beneficios} />
              <p>
                <strong> Se compone de una serie de módulos</strong> que pueden
                implantarse individualmente o como parte de una solución
                unificada:
              </p>
              <ListItems items={modulos.grm.modulos} />
            </div>
          </div>
        </div>

        {/* csm */}
        <div
          id="csm"
          className="hidden"
          role="tabpanel"
          aria-labelledby="bar-with-underline-item-6"
        >
          <div className="py-3 md:p-4 lg:p-6">
            <div className="flex items-center gap-4">
              <Image
                src={ImgCSM}
                alt="CSM"
                className="w-14 aspect-square object-cover"
              />
              <h2 className="text-xl max-w-xs">
                Gestión de la función pública
              </h2>
            </div>
            <div className="mt-6 flex flex-col gap-6">
              <p className="text-justify">
                (CSM) Civil Service Management ofrece un sistema web totalmente
                integrado de gestión de la información sobre recursos humanos y
                nóminas diseñado exclusivamente para las administraciones
                públicas. Desde la contratación hasta la jubilación, Civil
                Service Management ofrece una solución completa de recursos
                humanos para la administración pública.
              </p>
              <p>
                Utilización de programas informáticos específicos para la
                administración pública, como FreeBalance (CSM) los módulos de
                Gestión de la Función Pública ofrecen las siguientes{' '}
                <strong>características y ventajas al sector público:</strong>
              </p>
              <ListItems items={modulos.csm.beneficios} />
              <p>
                <strong> Se compone de una serie de módulos</strong> que pueden
                implantarse individualmente o como parte de una solución
                unificada:
              </p>
              <ListItems items={modulos.csm.modulos} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
