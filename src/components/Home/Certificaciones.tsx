import React from 'react';
import CardCursos from './CardCursos';

const certificaciones = [
  {
    title: 'HTB Certified Bug Bounty Hunter',
    description: 'Hack the Box',
  },
  {
    title: 'Certified Penetration Testing Specialist',
    description: 'Hack the Box',
  },
];

export default function ContainerCertificaciones() {
  return (
    <section className="text-gray-600 body-font">
      <div className="flex flex-wrap -m-4">
        {certificaciones.map(({ title, description }) => {
          return (
            <div
              className="p-4 md:w-1/3"
              key={title}
            >
              <CardCursos
                title={title}
                description={description}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
