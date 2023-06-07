import React from 'react';
import Link from 'next/link';

interface CardSolucionesProps {
  title: string;
  description: string;
  icon: any;
  href?: string;
}

export default function CardSoluciones({
  title,
  description,
  icon,
  href,
}: CardSolucionesProps) {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className="flex flex-col justify-between overflow-hidden text-left border border-gray-100 bg-white rounded shadow-sm group transition-all duration-500 hover:shadow-md hover:-translate-y-2"
        >
          <Content
            title={title}
            description={description}
            icon={icon}
          />
        </Link>
      ) : (
        <div className="flex flex-col justify-between overflow-hidden text-left border border-gray-100 bg-white rounded shadow-sm group transition-all duration-500 hover:shadow-md hover:-translate-y-2">
          <Content
            title={title}
            description={description}
            icon={icon}
          />
        </div>
      )}
    </>
  );
}

const Content = ({ title, description, icon }: CardSolucionesProps) => {
  return (
    <>
      <div className="p-5">
        <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
          {React.createElement(icon, { className: 'w-5 h-5 text-black' })}
        </div>
        <p className="mb-2 font-bold text-primary">{title}</p>
        <p className="text-sm leading-5 text-gray-900 text-justify">
          {description}
        </p>
      </div>
      <div className="w-full h-1 ml-auto duration-500 origin-left transform scale-x-0 bg-primary/70 group-hover:scale-x-100" />
    </>
  );
};
