/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgc': '#181818',
        'primary-link--1': '#FF512F',
        'primary-link--2': '#DD2476',
      },
      height: {
        '1px': '1px',
      },
      fontSize: {
        'body': '21px',
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '8': 'repeat(8, minmax(0, 1fr))',

        // Complex site-specific row configuration
        'layout': '115px repeat(3, 1fr) 110px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}