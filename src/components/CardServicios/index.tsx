import React from 'react';
import { Icon } from '@iconify/react';

interface CardServiciosProps {
  title: string;
  icon: string;
}

export default function CardServicios({ title, icon }: CardServiciosProps) {
  return (
    <div className="group bg-white flex flex-col gap-2 items-center justify-center w-[120px] aspect-square rounded-lg drop-shadow-md hover:bg-[#00D1FF] md:w-[160px] xl:w-[180px]">
      <Icon
        className="text-[#00D1FF] group-hover:text-white"
        icon={icon}
        width={64}
      />
      <h3 className="font-bold text-center text-xs text-[#404143] xl:text-base">
        {title}
      </h3>
    </div>
  );
}
