/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xxs: '340px',
      xs: '475px',
      sm: '640px',
      md: '768px',
      xm: '900px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        primary: {
          1: '#222222',
          2: '#CEA964',
          3: '#F7F4EE',
        },
        secondary: {
          1: '#1F1F1F',
          2: '#484848',
          3: '#7676802B',
          4: '#DADADA',
          5: '#1E1E1E',
          6: '#FAFAFA',
          7: '#303032',
          8: '#4F4F4F',
          9: '#6B6969',
          10: '#252525',
        },
      },
      padding: {
        'container-xl': '7.5rem',
        'container-lg': '5rem',
        'container-md': '2rem',
        'container-base': '1rem',
      },
      backgroundImage: {
        'top-section-home-page': "url('/public/images/mainSectionImage.svg')",
      },
    },
  },
  plugins: [],
};
