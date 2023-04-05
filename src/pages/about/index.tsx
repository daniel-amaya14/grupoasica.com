import React from 'react';
import AboutHome from './AboutHome';

export default function About() {
  return (
    <>
      <section className="flex flex-col justify-between overflow-hidden">
        <div className="py-6 px-8 xl:px-40 xl:py-10">
          <AboutHome />
        </div>
      </section>
    </>
  );
}
