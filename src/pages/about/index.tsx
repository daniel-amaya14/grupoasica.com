import React from 'react';
import RootLayout from '@/layout/RootLayout';
import { Icon } from '@iconify/react';
import AboutHome from './AboutHome';

const iconsAbout = [
  { icon: 'ph:folder-open-bold', title: '+400', span: 'Proyectos' },
  { icon: 'uil:users-alt', title: '+100', span: 'Clientes' },
  { icon: 'ic:round-star-outline', title: '+28 años', span: 'Experiencia' },
  { icon: 'ph:briefcase', title: '+37 partners', span: 'A nivel mundial' },
];

export default function About() {
  return (
    <RootLayout>
      <section className="flex flex-col justify-between overflow-hidden">
        <div className="py-6 px-8 xl:px-40 xl:py-10">
          <AboutHome />
        </div>
      </section>
    </RootLayout>
  );
}
