/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./index.html",
	"./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontSize: {
        small: '12px',
        medium: '16px',
        large: '24px',
      },
      colors: {
        'color-bg-dark': '#20212C',
        'color-border':'#3E3F4E',
        'color-main': '#2B2C37',
        'color-secondary': '#635fc7',
        'color-secondary-light': '#a8a4ff',
        'c-dark': {
          400: '#3E3F4E',
          600: '#20212C'
        },
        'c-purple': { 
          400: '#635fc7' 
        },
        'custom-grey': { 
          400: '#2B2C37',
          600: '#828fa3' 
        }
      }
    },
  },
  plugins: [],
}
