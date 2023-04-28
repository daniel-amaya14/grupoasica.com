import React from 'react';
import Link from 'next/link';

interface CardSolucionesProps {
  title: string;
  description: string;
  href?: string;
}

export default function CardSoluciones({
  title,
  description,
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
          />
        </Link>
      ) : (
        <div className="flex flex-col justify-between overflow-hidden text-left border border-gray-100 bg-white rounded shadow-sm group transition-all duration-500 hover:shadow-md hover:-translate-y-2">
          <Content
            title={title}
            description={description}
          />
        </div>
      )}
    </>
  );
}

const Content = ({ title, description }: CardSolucionesProps) => {
  return (
    <>
      <div className="p-5">
        <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
          <svg
            className="w-8 h-8"
            stroke="currentColor"
            viewBox="0 0 52 52"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon
              fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg>
        </div>
        <p className="mb-2 font-bold text-fontPrimary">{title}</p>
        <p className="text-sm leading-5 text-gray-900 text-justify">
          {description}
        </p>
      </div>
      <div className="w-full h-1 ml-auto duration-500 origin-left transform scale-x-0 bg-fontPrimary/70 group-hover:scale-x-100" />
    </>
  );
};
