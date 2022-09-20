/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base': '#2a303c',
        'primary': '#242933',
        'secondary': '#16a34a',
        'secondary-100': '#4f46e5',
        'secondary-200' : '#191d24',
        'hover': '#374151',
        'text-color': '#a6adba'
      }
    },
  },
  plugins: [],
}