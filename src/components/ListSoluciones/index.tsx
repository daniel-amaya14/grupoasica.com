import React from 'react';
import { SOLUCIONES } from '@/data/listServices';
import CardSoluciones from '@/components/Cards/CardSoluciones';

export default function ListSoluciones() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 content-center">
      {Object.values(SOLUCIONES).map(({ title, description, href }) => (
        <CardSoluciones
          key={title}
          title={title}
          description={description}
          href={href}
        />
      ))}
    </div>
  );
}
