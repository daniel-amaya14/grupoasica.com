import React from 'react';
import CardCursos from './CardCursos';

const certificaciones = [
  {
    title: 'Certified Bug Bounty Hunter',
    description: 'Hack the Box',
    href: '/cursos/bug-bounty-hunter',
  },
  {
    title: 'Certified Penetration Testing Specialist',
    description: 'Hack the Box',
    href: '/cursos/penetration-testing-specialist',
  },
];

export default function ContainerCertificaciones() {
  return (
    <section className="text-gray-600 body-font">
      <div className="flex flex-wrap -m-4">
        {certificaciones.map(({ title, description, href }) => {
          return (
            <div
              className="p-4 md:w-1/3"
              key={title}
            >
              <CardCursos
                title={title}
                description={description}
                href={href}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
