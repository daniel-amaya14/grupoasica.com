import React from 'react';
import { Icon } from '@iconify/react';

const ListItemsGovernment = [
  {
    icon: 'material-symbols:scan-outline',
    title: 'Digitalizar',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus facilis cum quaerat perferendis ad, voluptatum',
  },
  {
    icon: 'material-symbols:scan-outline',
    title: 'Automatizar procesos',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus facilis cum quaerat perferendis ad, voluptatum',
  },
  {
    icon: 'material-symbols:scan-outline',
    title: 'Proteger activos',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus facilis cum quaerat perferendis ad, voluptatum',
  },
  {
    icon: 'material-symbols:scan-outline',
    title: 'TDR',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus facilis cum quaerat perferendis ad, voluptatum',
  },
  {
    icon: 'material-symbols:scan-outline',
    title: 'Transformación',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus facilis cum quaerat perferendis ad, voluptatum',
  },
];

const ListItemsCor = [
  {
    icon: 'material-symbols:scan-outline',
    title: 'ERD',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus facilis cum quaerat perferendis ad, voluptatum',
  },
  {
    icon: 'material-symbols:scan-outline',
    title: 'Proteger activos',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus facilis cum quaerat perferendis ad, voluptatum',
  },
  {
    icon: 'material-symbols:scan-outline',
    title: 'Consultoria TI',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus facilis cum quaerat perferendis ad, voluptatum',
  },
  {
    icon: 'material-symbols:scan-outline',
    title: 'Analítica avanzada',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus facilis cum quaerat perferendis ad, voluptatum',
  },
];

const ListItemsPymes = [
  {
    icon: 'material-symbols:scan-outline',
    title: 'Facturación',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus facilis cum quaerat perferendis ad, voluptatum',
  },
  {
    icon: 'material-symbols:scan-outline',
    title: 'Inventario',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus facilis cum quaerat perferendis ad, voluptatum',
  },
  {
    icon: 'material-symbols:scan-outline',
    title: 'Contabilidad',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus facilis cum quaerat perferendis ad, voluptatum',
  },
  {
    icon: 'material-symbols:scan-outline',
    title: 'Seguridad',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus facilis cum quaerat perferendis ad, voluptatum',
  },
  {
    icon: 'material-symbols:scan-outline',
    title: 'Identidad digital',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus facilis cum quaerat perferendis ad, voluptatum',
  },
];

const ListItemsBanca = [
  {
    icon: 'material-symbols:scan-outline',
    title: 'NIFF 9',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus facilis cum quaerat perferendis ad, voluptatum',
  },
  {
    icon: 'material-symbols:scan-outline',
    title: 'Riesgos',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus facilis cum quaerat perferendis ad, voluptatum',
  },
  {
    icon: 'material-symbols:scan-outline',
    title: 'Cash management',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus facilis cum quaerat perferendis ad, voluptatum',
  },
  {
    icon: 'material-symbols:scan-outline',
    title: 'Ciberseguridad',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus facilis cum quaerat perferendis ad, voluptatum',
  },
  {
    icon: 'material-symbols:scan-outline',
    title: 'Inteligencia artificial',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus facilis cum quaerat perferendis ad, voluptatum',
  },
];

const ListItemsHealt = [
  {
    icon: 'material-symbols:scan-outline',
    title: 'Control de pacientes',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus facilis cum quaerat perferendis ad, voluptatum',
  },
  {
    icon: 'material-symbols:scan-outline',
    title: 'Inventario farmacia',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus facilis cum quaerat perferendis ad, voluptatum',
  },
  {
    icon: 'material-symbols:scan-outline',
    title: 'Contabilidad',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus facilis cum quaerat perferendis ad, voluptatum',
  },
  {
    icon: 'material-symbols:scan-outline',
    title: 'Identidad digital',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus facilis cum quaerat perferendis ad, voluptatum',
  },
  {
    icon: 'material-symbols:scan-outline',
    title: 'Analítica anavanzada',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus facilis cum quaerat perferendis ad, voluptatum',
  },
];

const ListItemsStudent = [
  {
    icon: 'material-symbols:scan-outline',
    title: 'Pasante',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus facilis cum quaerat perferendis ad, voluptatum',
  },
  {
    icon: 'material-symbols:scan-outline',
    title: 'Practicante',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus facilis cum quaerat perferendis ad, voluptatum',
  },
];

export const ListOfGovernmentServices = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Gobierno</h2>
      <div className="grid auto-rows-[12rem] sm:auto-rows-[15rem] sm:grid-cols-auto-layout-itemsGovernment gap-2">
        {ListItemsGovernment.map(({ icon, title, description }) => (
          <article
            key={title}
            className="bg-white shadow rounded-t p-4 border-t-4 border-indigo-500"
          >
            <header className="mb-3">
              <Icon
                icon={icon}
                width={32}
              />
            </header>
            <footer>
              <h3 className="text-base font-semibold mb-3">{title}</h3>
              <p className="text-sm">{description}</p>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
};

export const ListOfCorServices = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Corporación</h2>
      <div className="grid auto-rows-[12rem] sm:auto-rows-[15rem] sm:grid-cols-auto-layout-itemsGovernment gap-2 ">
        {ListItemsCor.map(({ icon, title, description }) => (
          <article
            key={title}
            className="bg-white shadow rounded-t p-4 border-t-4 border-indigo-500"
          >
            <header className="mb-3">
              <Icon
                icon={icon}
                width={32}
              />
            </header>
            <footer>
              <h3 className="text-base font-semibold mb-3">{title}</h3>
              <p className="text-sm">{description}</p>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
};

export const ListOfPymesServices = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-3">PYMES</h2>
      <div className="grid auto-rows-[12rem] sm:auto-rows-[15rem] sm:grid-cols-auto-layout-itemsGovernment gap-2 ">
        {ListItemsPymes.map(({ icon, title, description }) => (
          <article
            key={title}
            className="bg-white shadow rounded-t p-4 border-t-4 border-indigo-500"
          >
            <header className="mb-3">
              <Icon
                icon={icon}
                width={32}
              />
            </header>
            <footer>
              <h3 className="text-base font-semibold mb-3">{title}</h3>
              <p className="text-sm">{description}</p>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
};

export const ListOfBancaServices = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Banca y Finanzas</h2>
      <div className="grid auto-rows-[12rem] sm:auto-rows-[15rem] sm:grid-cols-auto-layout-itemsGovernment gap-2 ">
        {ListItemsBanca.map(({ icon, title, description }) => (
          <article
            key={title}
            className="bg-white shadow rounded-t p-4 border-t-4 border-indigo-500"
          >
            <header className="mb-3">
              <Icon
                icon={icon}
                width={32}
              />
            </header>
            <footer>
              <h3 className="text-base font-semibold mb-3">{title}</h3>
              <p className="text-sm">{description}</p>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
};

export const ListOfHealthtServices = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Salud</h2>
      <div className="grid auto-rows-[12rem] sm:auto-rows-[15rem] sm:grid-cols-auto-layout-itemsGovernment gap-2 ">
        {ListItemsHealt.map(({ icon, title, description }) => (
          <article
            key={title}
            className="bg-white shadow rounded-t p-4 border-t-4 border-indigo-500"
          >
            <header className="mb-3">
              <Icon
                icon={icon}
                width={32}
              />
            </header>
            <footer>
              <h3 className="text-base font-semibold mb-3">{title}</h3>
              <p className="text-sm">{description}</p>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
};

export const ListOfStudentServices = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Estudiante</h2>
      <div className="grid auto-rows-[12rem] sm:auto-rows-[15rem] sm:grid-cols-auto-layout-itemsGovernment gap-2 ">
        {ListItemsStudent.map(({ icon, title, description }) => (
          <article
            key={title}
            className="bg-white shadow rounded-t p-4 border-t-4 border-indigo-500"
          >
            <header className="mb-3">
              <Icon
                icon={icon}
                width={32}
              />
            </header>
            <footer>
              <h3 className="text-base font-semibold mb-3">{title}</h3>
              <p className="text-sm">{description}</p>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
};
