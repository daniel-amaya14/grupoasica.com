import React from 'react';
import RootLayout from '@/layout/RootLayout';

export async function getServerSideProps(context: { query: { id: any } }) {
  const id = context.query.id;

  return {
    props: {
      id,
    },
  };
}

interface ServiceIDProps {
  id: string;
}

export default function ServiceID({ id }: ServiceIDProps) {
  return (
    <RootLayout>
      <section className="flex flex-col justify-between overflow-hidden">
        <div className="py-6 px-8 xl:px-40 xl:py-10">
          <h2 className="text-2xl font-bold text-fontPrimary text-justify pb-4 md:text-4xl">
            {id.toUpperCase().replaceAll('-', ' ')}
          </h2>
          <p className="text-sm pb-6 md:text-base md:pb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eum
            temporibus, aliquam doloremque nihil quam placeat itaque autem
            natus. Minima odit quo maxime reprehenderit aperiam. Commodi eum
            odit maiores culpa?
          </p>
        </div>
      </section>
    </RootLayout>
  );
}
