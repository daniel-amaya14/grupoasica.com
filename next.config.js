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
      {
        source: '/arpotecsa',
        destination: '/productos/arpotecsa',
        permanent: true,
      },
      {
        source: '/freebalance',
        destination: '/productos/freebalance',
        permanent: true,
      },
      {
        source: '/seguridad',
        destination: '/productos/seguridad',
        permanent: true,
      },
      {
        source: '/huntress',
        destination: '/productos/huntress',
        permanent: true,
      },
      {
        source: '/consultoria',
        destination: '/productos/consultoria',
        permanent: true,
      },
      {
        source: '/sas',
        destination: '/productos/sas',
        permanent: true,
      },
      {
        source: '/spk',
        destination: '/productos/spk',
        permanent: true,
      },
      {
        source: '/jumpcloud',
        destination: '/productos/jumpcloud',
        permanent: true,
      },
      {
        source: '/imedical',
        destination: '/productos/imedical',
        permanent: true,
      },
      {
        source: '/riesgos',
        destination: '/productos/riesgos',
        permanent: true,
      },
      {
        source: '/niff9',
        destination: '/productos/niff9',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
