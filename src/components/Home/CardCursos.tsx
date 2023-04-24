import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface CardCursosProps {
  title: string;
  description: string;
  href?: string;
  image?: StaticImageData;
}

export default function CardCursos({
  title,
  description,
  href = '/#',
  image,
}: CardCursosProps) {
  return (
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col transition duration-300 hover:shadow-lg">
      {image ? (
        <Image
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={image}
          alt="blog"
        />
      ) : null}
      <div className="p-6 h-full flex flex-col">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-bookmark"
          width={24}
          height={24}
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M248 128a56 56 0 1 0-96 39.14V224a8 8 0 0 0 11.58 7.16L192 216.94l28.42 14.22A8 8 0 0 0 232 224v-56.86A55.81 55.81 0 0 0 248 128Zm-56-40a40 40 0 1 1-40 40a40 40 0 0 1 40-40Zm3.58 112.84a8 8 0 0 0-7.16 0L168 211.06v-32.47a55.94 55.94 0 0 0 48 0v32.47ZM136 192a8 8 0 0 1-8 8H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16a8 8 0 0 1-16 0H40v128h88a8 8 0 0 1 8 8Zm-16-56a8 8 0 0 1-8 8H72a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8Zm0-32a8 8 0 0 1-8 8H72a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8Z"
          />
        </svg>
        <h4 className="title-font text-lg font-medium text-gray-900 mb-3 mt-2">
          {title}
        </h4>
        <p className="leading-relaxed mb-3 text-justify">{description}</p>
        <div className="mt-auto">
          <Link
            href={href}
            className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
          >
            Más información
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
