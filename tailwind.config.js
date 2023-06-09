/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/preline/dist/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#0069b5',
        light: '#F9F9F9',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
      },
      gridTemplateColumns: {
        'auto-layout-16': 'repeat(auto-fit, minmax(16rem, 1fr))',
        'auto-layout-14': 'repeat(auto-fit, minmax(14rem, 1fr))',
        'auto-layout-partners': 'repeat(auto-fit, minmax(7rem, 1fr))',
        'auto-layout-partners-md': 'repeat(auto-fit, minmax(10rem, 1fr))',
        'auto-layout-partners-xl': 'repeat(auto-fit, minmax(14rem, 1fr))',
        'auto-layout-itemsGovernment': 'repeat(auto-fill, minmax(13rem, 1fr))',
      },
      animation: {
        'bounce-slow': 'bounce 1.8s linear infinite',
      },
    },
  },
  plugins: [require('preline/plugin'), require('@tailwindcss/forms')],
};
