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
        hero: "url('/src/img/hero/img_3949_wide-0a15d6f15ec1a38eaa601101e257ec90875c90b0.jpg')",
        about: "url('/src/img/hero/mobyplay-5.13.19.jpg')",
  
      },
      
    },
  },
  plugins: [],
};
