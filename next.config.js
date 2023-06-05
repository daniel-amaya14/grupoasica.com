/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.pexels.com', 'images.unsplash.com'],
  },
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
        source: '/banca',
        destination: '/servicios/banca',
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
        source: '/educacion',
        destination: '/servicios/educacion',
        permanent: true,
      },
      {
        source: '/arprotecsa',
        destination: '/servicios/gobierno/arprotecsa',
        permanent: true,
      },
      {
        source: '/freebalance',
        destination: '/servicios/gobierno/freebalance',
        permanent: true,
      },
      {
        source: '/seguridad',
        destination: '/servicios/seguridad',
        permanent: true,
      },
      {
        source: '/huntress',
        destination: '/servicios/huntress',
        permanent: true,
      },
      {
        source: '/consultoria',
        destination: '/servicios/consultoria',
        permanent: true,
      },
      {
        source: '/sas',
        destination: '/servicios/sas',
        permanent: true,
      },
      {
        source: '/psk',
        destination: '/servicios/pymes/psk',
        permanent: true,
      },
      {
        source: '/jumpcloud',
        destination: '/servicios/pymes/jumpcloud',
        permanent: true,
      },
      {
        source: '/imedical',
        destination: '/servicios/salud/imedical',
        permanent: true,
      },
      {
        source: '/sas/riesgos',
        destination: '/servicios/sas/riesgos',
        permanent: true,
      },
      {
        source: '/sas/niif9',
        destination: '/servicios/sas/niif9',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
