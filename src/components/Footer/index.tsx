import React from 'react';
import { Icon } from '@iconify/react';

const listaServicios = [
  { name: 'eGovernment', href: '' },
  { name: 'Comercio e Indistria', href: '' },
  { name: 'Administración de Proyectos', href: '' },
  { name: 'Capacitaciones', href: '' },
  { name: 'Soporte técnico', href: '' },
];

const listaProductos = [
  { name: 'Inteligencia Artificial', href: '' },
  { name: 'Administración', href: '' },
  { name: 'Banca y Finanzas', href: '' },
  { name: 'Ciberseguridad', href: '' },
  { name: 'PYMES', href: '' },
];

const listaAyuda = [
  { name: 'Contacto', href: '' },
  { name: 'Abrir ticket de soporte técnico', href: '' },
  { name: 'Legal', href: '' },
];

const listaRedes = [
  { name: 'WhatsApp', icon: 'ic:outline-whatsapp', href: '', color: '25D366' },
  { name: 'Gmail', icon: 'bxl:gmail', href: '', color: 'EA4335' },
  { name: 'LinkedIn', icon: 'mdi:linkedin', href: '', color: '0A66C2' },
  { name: 'Twitter', icon: 'uil:twitter', href: '', color: '1DA1F2' },
  { name: 'Facebook', icon: 'ic:outline-facebook', href: '', color: '1877F2' },
  { name: 'Instagram', icon: 'mdi:instagram', href: '', color: 'E4405F' },
  { name: 'Youtube', icon: 'bi:youtube', href: '', color: 'FF0000' },
];

const ListarItems = ({ listaItems, title }) => {
  return (
    <div>
      <h4 className="font-bold mb-3 text-[#404143] text-base">{title}</h4>
      <ul className="flex flex-col gap-2">
        {listaItems.map(({ name, href, icon = '', color = '' }) => (
          <li
            key={name.toLowerCase().replaceAll(' ', '-')}
            className="text-xs"
          >
            {icon ? <Icon icon={icon} /> : name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="bg-white px-6 py-10 xl:px-20 xl:pt-16">
      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-6 md:flex-row justify-center xl:gap-20">
          {/* lista-servicios */}
          <ListarItems
            listaItems={listaServicios}
            title="Servicios"
          />

          {/* lista-productos */}
          <ListarItems
            listaItems={listaProductos}
            title="Productos"
          />

          {/* lista-ayuda */}
          <ListarItems
            listaItems={listaAyuda}
            title="Ayuda"
          />

          {/* lista información */}
          <div>
            <h4 className="font-bold mb-3 text-[#404143] text-base">
              Información
            </h4>
            <p className="leading-6 mb-3 text-xs">
              Colonia Payaquí, Calle principal, casa N°1650, Tegucigalpa M.D.C.{' '}
              <br />
              Honduras, C.A. <br />
              ventas@grupoasica.com <br />
              PBX : (+504) 2203-6275
            </p>
            <ul className="flex flex-wrap items-center gap-3 md:gap-4">
              {listaRedes.map(({ name, icon, href, color }) => (
                <li
                  key={name.toLowerCase()}
                  className={`text-slate-700 hover:text-[#${color}] w-5  aspect-square cursor-pointer`}
                >
                  <Icon
                    className={`text-slate-700 hover:text-[#${color}]`}
                    fill="currentColor"
                    icon={icon}
                    width="full"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-center text-base">© 2023 Grupo ASICA</p>
      </section>
    </footer>
  );
}
