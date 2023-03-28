import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardPartnerProps {
  name: string;
  src: React.ReactNode;
  url: string;
  alt: string;
}

export default function CardPartner({ name, src, url, alt }: CardPartnerProps) {
  return (
    <Link
      href={url}
      className="bg-slate-300 rounded-lg flex justify-center items-center p-6 hover:transform hover:scale-105 transition-all duration-300"
    >
      <Image
        className="w-1/2"
        src={src}
        alt={alt}
      />
    </Link>
  );
}
