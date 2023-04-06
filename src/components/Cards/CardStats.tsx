import React from 'react';
import { Icon } from '@iconify/react';

interface CardStatsProps {
  icon: string;
  title: string;
  span: string;
}

export default function CardStats({ icon, title, span }: CardStatsProps) {
  return (
    <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
      <div className="px-4 py-6">
        <div className="flex items-start">
          <Icon
            className="flex-shrink-0 w-10 h-10 -mt-1 text-fontPrimary"
            icon={icon}
          />
          <div className="ml-4">
            <h4 className="text-base font-bold text-gray-900">{title}</h4>
            <p className="mt-1 text-sm font-medium leading-tight text-gray-500">
              {span}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
