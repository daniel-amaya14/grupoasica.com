import React from 'react';
import { Icon } from '@iconify/react';

interface CardLargeProps {
  title: string;
  children: React.ReactNode;
}

export default function CardLarge({ title, children }: CardLargeProps) {
  return (
    <article className="bg-white  p-4 rounded-md shadow-md">
      <header className="flex items-center gap-4 mb-4">
        <div className="flex justify-center items-center rounded-full w-10 aspect-square bg-[#F0F0F0]">
          <Icon
            className="text-[#00D1FF] w-7"
            fill="currentColor"
            icon="tabler:certificate"
            width="full"
          />
        </div>
        <h4 className="text-base font-semibold">{title}</h4>
      </header>
      <main>{children}</main>
    </article>
  );
}
