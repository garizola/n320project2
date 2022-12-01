/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Oswald',
      secondary: 'Raleway',
      tertiary: 'Rozha One',
    },
    container: {
      padding: {
        DEFAULT: '20px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1300px',
    },
    extend: {
      colors: {
        dark: '#111111',
        grey: '#808080',
        infared: '#da4a31',
      
      },
      backgroundImage: {
        hero: "url('/src/img/hero/image-asset-hero.png')",
        about: "url('/src/img/hero/mobyplay-5.13.19.jpg')",
  
      },
      
    },
  },
  plugins: [],
};
