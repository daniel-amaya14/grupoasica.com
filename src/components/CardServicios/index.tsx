import React from 'react';
import { Icon } from '@iconify/react';

interface CardServiciosProps {
  title: string;
  icon: string;
}

export default function CardServicios({ title, icon }: CardServiciosProps) {
  return (
    <div className="group bg-white flex flex-col gap-2 items-center justify-center w-[140px] h-[140px] hover:bg-[#00D1FF] md:w-[160px] md:h-[160px] xl:w-[180px] xl:h-[180px] aspect-auto rounded-lg drop-shadow-md">
      <Icon
        className="text-[#00D1FF] group-hover:text-white"
        icon={icon}
        width={64}
      />
      <h3 className="font-bold text-center text-sm text-[#404143]">{title}</h3>
    </div>
  );
}
