import React from 'react';
import CardServicios from '@/components/CardServicios';

interface ListCardsProps {
  listItems: { name: string; href: string; icon: string }[]; // Esto es lo mismo que CardServiciosProps
}

export default function ListCards({ listItems }: ListCardsProps) {
  return (
    <div className="flex justify-center gap-4 flex-wrap md:gap-6">
      {listItems.map(({ name, href, icon }) => (
        <CardServicios
          key={name.toLowerCase().replaceAll(' ', '-')}
          title={name}
          icon={icon}
          href={href}
        />
      ))}
    </div>
  );
}
