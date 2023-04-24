import React from 'react';
import CardCursos from './CardCursos';
import ImgOffice from '@/public/images/logo-office.png';
import ImgManagement from '@/public/images/management.webp';
import ImgWellness from '@/public/images/wellness.jpg';

const capacitaciones = [
  {
    title: 'Gestión (Diplomado)',
    image: ImgWellness,
    description:
      'Fortalece tus habilidades en gestión y liderazgo con nuestro diplomado especializado. Desarrolla tu capacidad para liderar equipos y alcanzar objetivos organizacionales. ',
    href: '/cursos/gestion',
  },
  {
    title: 'Coaching Bienestar',
    image: ImgManagement,
    description:
      'Aprenderás las mejores prácticas en coaching y técnicas para promover hábitos saludables y positivos en la vida de tus clientes.',
    href: '/cursos/coaching',
  },
  {
    title: 'Microsoft Office',
    image: ImgOffice,
    description:
      'Aprenderás a crear y editar documentos profesionales en Word, a organizar y analizar datos en Excel, a crear presentaciones impactantes en PowerPoint y a gestionar eficazmente tu correo electrónico en Outlook.',
    href: '/cursos/office',
  },
];

export default function ContainerCapacitaciones() {
  return (
    <section className="text-gray-600 body-font">
      <div className="flex flex-wrap -m-4">
        {capacitaciones.map(({ title, image, description, href }) => {
          return (
            <div
              className="p-4 md:w-1/3"
              key={title}
            >
              <CardCursos
                title={title}
                image={image}
                href={href}
                description={description}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
