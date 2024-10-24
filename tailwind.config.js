/** @type {import('tailwindcss').Config} */

export default {
    content:   [
        "./index.html",
        "./src//.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
    theme: {
      extend: {
        fontFamily: {
          sans: 'Switzer, system-ui, sans-serif',
        },
        borderRadius: {
          '4xl': '2rem',
        },
      },
    },
    plugins: [],
  }
