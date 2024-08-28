/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(121 155 166)', // Primary color
        secondary: '#F3F4F6', // Secondary color
        highlight:'rgb(79 70 229)',
        hoverColor:'#3E45C9',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        primaryFont: ['Playfair Display', 'serif'],
        secondaryFont: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}

