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
        grey: {
          DEFAULT: '#111111',
        },
      },
      backgroundImage: {
        hero: "url('/src/img/hero/gettyimages-1183439827_custom-41f717184f86c9e0c034b3e5d2bba8cde09c8487.jpg')",
        about: "url('/src/img/hero/images-jero1.jpeg')",
        interview: "url('/src/img/interview/bg.png')",
      },
      content: {
        outlineText: 'url("/src/img/hero/outline-text.svg")',
      },
    },
  },
  plugins: [],
};
