import React from 'react';
import CardLarge from '../CardLarge';

const ItemsCredenciales = [
  { name: 'Certificación DD' },
  { name: 'Gremlin' },
  { name: 'JumpCloud' },
  { name: 'CATO' },
  { name: 'Acumatica' },
];

export default function ListCardsCredenciales() {
  return (
    <div className="grid grid-cols-auto-layout-16 auto-rows-auto grid-flow-dense place-items-center gap-4">
      {ItemsCredenciales.map(({ name }) => (
        <CardLarge
          title={name}
          key={name.toLowerCase().replaceAll(' ', '-')}
        >
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sed finibus libero. Nullam vitae sodales est. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </CardLarge>
      ))}
    </div>
  );
}
