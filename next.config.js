/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/gobierno',
        destination: '/servicios/gobierno',
        permanent: true,
      },
      {
        source: '/corporacion',
        destination: '/servicios/corporacion',
        permanent: true,
      },
      {
        source: '/banca-finanzas',
        destination: '/servicios/banca-finanzas',
        permanent: true,
      },
      {
        source: '/pymes',
        destination: '/servicios/pymes',
        permanent: true,
      },
      {
        source: '/salud',
        destination: '/servicios/salud',
        permanent: true,
      },
      {
        source: '/estudiantes',
        destination: '/servicios/estudiantes',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
