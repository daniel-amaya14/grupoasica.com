import React from 'react';
import CardLarge from '../CardLarge';

import IMGOffice from '@/public/images/office365.png';
import IMGManagement from '@/public/images/management.webp';
import IMGWellness from '@/public/images/wellness.jpg';

const itemsCapacitaciones = [
  { name: 'Gestión (Diplomado)', img: IMGWellness },
  { name: 'Coaching Bienestar', img: IMGManagement },
  { name: 'Microsoft Office', img: IMGOffice },
];

export default function ListOfTrainings() {
  return (
    <div className="grid grid-cols-auto-layout-16 auto-rows-auto grid-flow-dense place-items-center gap-4">
      {itemsCapacitaciones.map(({ name, img }) => (
        <CardLarge
          key={name}
          title={name}
          src={img}
        >
          <p className="text-xs text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sed finibus libero. Nullam vitae sodales est. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </CardLarge>
      ))}
    </div>
  );
}
