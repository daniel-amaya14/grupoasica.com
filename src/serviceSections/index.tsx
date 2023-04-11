import React from 'react';
import Link from 'next/link';

interface FeatureProps {
  id: string;
  title: string;
  href: string;
  children?: React.ReactNode;
  items: string[][];
}

export default function Feature({
  title,
  href,
  children = '',
  items,
}: FeatureProps) {
  return (
    <section className="px-4 py-20 mx-auto max-w-7xl">
      <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-32 gap-x-10 lg:gap-x-24">
        <div>
          <h2 className="mb-3 text-2xl font-extrabold leading-tight tracking-tight text-black">
            {title}
          </h2>
          <p className="mb-6 text-base text-gray-600 text-justify">
            {children}
          </p>
          <Link
            href={href}
            className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Ver soluciones
          </Link>
        </div>
        <div className="flex flex-col flex-grow space-y-5">
          {items.map((item: any) => (
            <div
              className="flex items-start"
              key={item}
            >
              <ItemsContent text={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ItemsContentProps {
  text: string[];
}

const ItemsContent = ({ text }: ItemsContentProps) => {
  return (
    <>
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        className="flex-none w-5 h-5 mt-1 mr-2 text-indigo-700"
      >
        <path
          fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <p className="text-sm text-gray-700">{text}</p>
    </>
  );
};
