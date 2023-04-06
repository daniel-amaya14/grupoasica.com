import React from 'react';
import { Icon } from '@iconify/react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface CardLargeProps {
  title: string;
  children: React.ReactNode;
  src?: StaticImageData;
}

export default function CardLarge({ title, children, src }: CardLargeProps) {
  return (
    <div className="max-w-sm bg-white rounded-md shadow">
      {src ? (
        <Link href="#">
          <Image
            className="rounded-t-lg"
            src={src}
            loading="lazy"
            alt=""
          />
        </Link>
      ) : null}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex justify-center items-center rounded-full w-8 aspect-square bg-[#F0F0F0]">
            <Icon
              className="text-fontPrimary w-5"
              fill="currentColor"
              icon="tabler:certificate"
              width="full"
            />
          </div>
          <Link href="#">
            <h5 className="flex items-center text-md font-semibold ">
              {title}
            </h5>
          </Link>
        </div>
        {children}
      </div>
    </div>

    // <article className="bg-white rounded-md shadow-md overflow-hidden">
    //   <header className="flex flex-col gap-4 mb-1">
    //     {src ? (
    //       <figure>
    //         <Image
    //           className="object-cover object-center"
    //           width={400}
    //           src={src}
    //           alt={alt}
    //         />
    //       </figure>
    //     ) : null}
    //     <div className="flex items-center px-4 gap-4">
    //       <div className="flex justify-center items-center rounded-full w-10 aspect-square bg-[#F0F0F0]">
    //         <Icon
    //           className="text-[#00D1FF] w-7"
    //           fill="currentColor"
    //           icon="tabler:certificate"
    //           width="full"
    //         />
    //       </div>
    //       <h4 className="text-base font-semibold">{title}</h4>
    //     </div>
    //   </header>
    //   <footer className="p-4">{children}</footer>
    // </article>
  );
}
