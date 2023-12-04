/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        red: '#DB2F20',
        purple: {
          light: '#C7B3DD',
          DEFAULT: '#5F259F',
        },
        gray: '#979797',
        black: '#2B2B2B',
      },
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}

