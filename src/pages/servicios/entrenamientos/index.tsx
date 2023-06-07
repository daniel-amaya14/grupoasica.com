import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import BannerContacto from '@/components/BannerContacto';
import Certificado from '@/components/Home/Certificados';

export default function Entrenamientos() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-96 left-1/2 flex -translate-x-1/2 transform"
      >
        <div className="h-[44rem] w-[25rem] -translate-x-[10rem] rotate-[-60deg] transform bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl"></div>
        <div className="rounded-fulls h-[50rem] w-[90rem] origin-top-left -translate-x-[15rem] -rotate-12 bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl px-4 py-10 mx-auto space-y-36 sm:px-6 lg:px-8 lg:py-14">
        {/* Hero */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mt-5 max-w-2xl">
            <h1 className="block text-4xl font-semibold text-gray-800 md:text-5xl lg:text-5xl">
              Entrenamientos
            </h1>
          </div>
          <div className="mt-5 max-w-3xl">
            <p className="text-lg">
              Grupo ASICA ha forjado el futuro tecnológico de Centroamérica con
              su programa de entrenamientos y practicas. Aprende a ser un gran
              profesional de la informática, con nuestros cursos y métodos de
              estudio.
            </p>
          </div>
        </div>

        {/*  */}
        <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-12 items-center gap-2 sm:gap-6 lg:-translate-x-10">
              <div className="col-span-4">
                <Image
                  className="rounded-xl h-full w-full"
                  width={1981}
                  height={100}
                  src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80"
                  alt="Image Description"
                />
              </div>

              <div className="col-span-3">
                <Image
                  className="rounded-xl h-full w-full"
                  width={987}
                  height={100}
                  src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                  alt="Image Description"
                />
              </div>

              <div className="col-span-5">
                <Image
                  className="rounded-xl h-full w-full"
                  width={987}
                  height={100}
                  src="https://images.unsplash.com/photo-1600194992440-50b26e0a0309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                  alt="Image Description"
                />
              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-10 lg:col-span-5 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl">
                  Formación experta para el éxito empresarial
                </h2>
                <p className="text-gray-500">
                  Nos especializamos en brindar servicios de entrenamiento en
                  áreas clave como:
                </p>
              </div>

              <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
                <li className="flex space-x-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fillOpacity={0.1}
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>

                  <span className="text-sm sm:text-base">Gobierno</span>
                </li>

                <li className="flex space-x-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fillOpacity={0.1}
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>

                  <span className="text-sm sm:text-base">Corporación</span>
                </li>

                <li className="flex space-x-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fillOpacity={0.1}
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>

                  <span className="text-sm sm:text-base">Pymes</span>
                </li>

                <li className="flex space-x-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fillOpacity={0.1}
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>

                  <span className="text-sm sm:text-base">Salud</span>
                </li>

                <li className="flex space-x-3 md:col-span-2">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fillOpacity={0.1}
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>

                  <span className="text-sm sm:text-base">Banca y Finanas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*  */}
        <div>
          <div className="w-full h-[500px] overflow-hidden rounded-xl">
            <Image
              className="rounded-xl w-full h-full object-cover"
              width={1260}
              height={100}
              src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="img"
            />
          </div>

          <div className="mt-5 grid gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
                Entrenamientos personalizados
              </h2>
              <p className="mt-2 md:mt-4">
                Nuestros servicios de entrenamiento se adaptan a tus necesidades
                específicas. Con un enfoque práctico y centrado en el cliente,
                trabajamos de cerca contigo para comprender tus desafíos y
                objetivos. Creamos programas de entrenamiento personalizados que
                abordan tus puntos clave.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="grid gap-8 sm:grid-cols-2 md:gap-12">
                <div className="flex gap-x-5">
                  <svg
                    className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fillOpacity={0.1}
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Flexibilidad adaptativa
                    </h3>
                    <p className="mt-1">
                      Nuestros servicios de entrenamiento se ajustan a tus
                      necesidades cambiantes, brindando opciones flexibles para
                      adaptarse a tu horario y requisitos específicos.
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-5">
                  <svg
                    className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fillOpacity={0.1}
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Enfoque práctico
                    </h3>
                    <p className="mt-1">
                      Nuestros programas de entrenamiento se centran en la
                      aplicación práctica de conocimientos y habilidades, para
                      que puedas aplicar lo aprendido de inmediato en tu entorno
                      laboral.
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-5">
                  <svg
                    className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fillOpacity={0.1}
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Personalización integral
                    </h3>
                    <p className="mt-1">
                      Creamos programas de entrenamiento personalizados que se
                      adaptan a tus desafíos y objetivos específicos, brindando
                      una experiencia de aprendizaje individualizada y
                      relevante.
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-5">
                  <svg
                    className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fillOpacity={0.1}
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Colaboración cercana
                    </h3>
                    <p className="mt-1">
                      Trabajamos de cerca contigo, colaborando estrechamente
                      para comprender tus necesidades y diseñar soluciones de
                      entrenamiento efectivas que impulsen tu crecimiento y
                      desarrollo profesional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div className="md:order-2">
            <Image
              className="rounded-xl h-full w-full"
              width={900}
              height={100}
              src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80"
              alt="Image Description"
            />
          </div>

          <div className="mt-5 sm:mt-10 md:order-1 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl">
                  Experiencia y Conocimiento Aplicados
                </h2>
                <p>
                  Elige Grupo ASICA para tus necesidades de entrenamiento y
                  obtendrás beneficios significativos. Nuestra amplia
                  experiencia en diversas áreas garantiza conocimiento
                  especializado y actualizado. Nuestros entrenadores, expertos
                  en sus campos, combinan sólidos conocimientos teóricos con
                  experiencia práctica para brindarte una perspectiva valiosa.
                </p>
              </div>

              <ul className="space-y-2 sm:space-y-4">
                <li className="flex space-x-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fillOpacity={0.1}
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>

                  <span className="text-sm sm:text-base">
                    Enfoque interactivo y práctico
                  </span>
                </li>

                <li className="flex space-x-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fillOpacity={0.1}
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>

                  <span className="text-sm sm:text-base">
                    Programas de entrenamiento de alto nivel
                  </span>
                </li>

                <li className="flex space-x-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-blue-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fillOpacity={0.1}
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>

                  <span className="text-sm sm:text-base">
                    Compromiso con el éxito del cliente
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*  */}
        <div>
          <h2 className="text-3xl font-bold max-w-[58rem] text-gray-800 mb-6 lg:text-4xl">
            Formate en ciberseguridad con nuestras certificaciones de Hack The
            Box
          </h2>
          <Certificado />
        </div>

        {/*  */}
        <div>
          <div className="mx-auto mb-10 max-w-2xl lg:mb-14">
            <h2 className="text-2xl font-bold md:leading-tight">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="mx-auto max-w-2xl divide-y divide-gray-200">
            {/*  */}
            <div className="py-8 first:pt-0 last:pb-0">
              <div className="flex gap-x-5">
                <svg
                  className="mt-1 h-6 w-6 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                </svg>

                <div>
                  <h3 className="font-semibold text-gray-800 md:text-lg">
                    ¿Por qué con nosotros?
                  </h3>
                  <p className="mt-1">
                    Con 29 años de experiencia, ofrecemos entrenamiento
                    profesional de calidad. Nuestros métodos de estudio
                    innovadores se adaptan a todos los niveles estudiantiles y
                    profesionales. Además, nuestras mentorías están incluidas en
                    el precio, brindando un apoyo adicional para tu crecimiento
                    y éxito.
                  </p>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="py-8 first:pt-0 last:pb-0">
              <div className="flex gap-x-5">
                <svg
                  className="mt-1 h-6 w-6 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                </svg>

                <div>
                  <h3 className="font-semibold text-gray-800 md:text-lg">
                    ¿Cómo solicito el entrenamiento?
                  </h3>
                  <p className="mt-1">
                    Primero,{' '}
                    <span className="font-semibold">
                      <Link href="/contacto">completa el formulario</Link>
                    </span>{' '}
                    de solicitud con tus datos para una toma precisa. Luego, te
                    enviaremos una cotización personalizada. Realiza el pago de
                    manera conveniente y segura. Después, recibirás
                    instrucciones de onboarding para comenzar el curso.
                    Finalmente, una vez completado, te entregaremos tus
                    merecidas credenciales. ¡Listo para empezar tu aprendizaje!
                  </p>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="py-8 first:pt-0 last:pb-0">
              <div className="flex gap-x-5">
                <svg
                  className="mt-1 h-6 w-6 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                </svg>

                <div>
                  <h3 className="font-semibold text-gray-800 md:text-lg">
                    ¿Requisitos?
                  </h3>
                  <p className="mt-1">
                    <span className="font-semibold">Ganas de aprender</span> y
                    de crecer profesionalmente. No importa si eres principiante
                    o experto, nuestros entrenamientos y cursos están diseñados
                    para que todos puedan aprender y crecer.
                  </p>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="py-8 first:pt-0 last:pb-0">
              <div className="flex gap-x-5">
                <svg
                  className="mt-1 h-6 w-6 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                </svg>

                <div>
                  <h3 className="font-semibold text-gray-800 md:text-lg">
                    ¿Qué precio tienen los entrenamientos?
                  </h3>
                  <p className="mt-1">
                    Para consultar los precios de nuestros entrenamientos y
                    cursos deberás de contactarnos por medio de nuestro{' '}
                    <span className="font-semibold">
                      <Link href="/contacto">formulario de contacto</Link>
                    </span>{' '}
                    o por medio de nuestro{' '}
                    <span className="font-semibold">
                      <Link
                        href="#footer"
                        scroll={false}
                      >
                        correo electrónico.
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <BannerContacto href="/servicios/formulario" />
      </div>
    </div>
  );
}
