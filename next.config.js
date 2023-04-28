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
    ];
  },
};

module.exports = nextConfig;
